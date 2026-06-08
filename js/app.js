// CloudCerts - Shared app logic (nav, theme, homepage, explore page)

/* ============================ THEME ============================ */
const THEME_KEY = "cloudcerts-theme";
function applyTheme(theme) {
  if (theme === "light") document.body.classList.add("light-mode");
  else document.body.classList.remove("light-mode");
  const icon = document.querySelector("#theme-toggle i");
  if (icon) icon.className = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
}
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(saved);
  const toggle = document.getElementById("theme-toggle");
  if (toggle) toggle.addEventListener("click", () => {
    const next = document.body.classList.contains("light-mode") ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

/* ============================ MOBILE NAV ============================ */
function initNav() {
  const burger = document.getElementById("nav-burger");
  const links = document.getElementById("nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      links.classList.toggle("open");
      burger.classList.toggle("active");
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.classList.remove("active");
    }));
  }
  // Active link highlight
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#nav-links a").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
}

/* ============================ HELPERS ============================ */
function levelBadge(cert) {
  return `<span class="badge badge-${cert.level}">${LEVELS[cert.level].name}</span>`;
}
function domainTags(cert) {
  return cert.domain.map(d => `<span class="tag">${DOMAINS[d] || d}</span>`).join("");
}
function providerIcon(p) {
  return `<i class="fa-brands ${PROVIDERS[p].icon}"></i>`;
}
function certCard(cert) {
  return `
    <a class="cert-card glass ${cert.provider}" href="certification.html?id=${cert.id}">
      <div class="cert-card-badge ${cert.provider}">
        ${providerIcon(cert.provider)}
        <span class="cert-card-code">${cert.code}</span>
      </div>
      <div class="cert-card-body">
        <div class="cert-card-top">
          ${levelBadge(cert)}
          <span class="cert-card-provider">${PROVIDERS[cert.provider].name}</span>
        </div>
        <h3 class="cert-card-name">${cert.name}</h3>
        <div class="cert-card-tags">${domainTags(cert)}</div>
        <span class="cert-card-link">View Details <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </a>`;
}

/* ============================ HOMEPAGE ============================ */
const homeState = { experience: null, domain: null, provider: "all" };

function initHome() {
  if (!document.getElementById("home-app")) return;

  // Provider stats cards
  const statsWrap = document.getElementById("provider-stats");
  if (statsWrap) {
    statsWrap.innerHTML = ["azure", "aws", "gcp"].map(p => {
      const certs = getCertsByProvider(p);
      return `
        <a class="provider-card glass ${p}" href="explore.html?provider=${p}">
          <div class="provider-icon">${providerIcon(p)}</div>
          <h3>${PROVIDERS[p].name}</h3>
          <div class="provider-count">${certs.length}</div>
          <p>certifications</p>
        </a>`;
    }).join("");
  }

  // Total stats section
  const totalsWrap = document.getElementById("total-stats");
  if (totalsWrap) {
    const total = CERTS.length;
    const counts = {
      azure: getCertsByProvider("azure").length,
      aws: getCertsByProvider("aws").length,
      gcp: getCertsByProvider("gcp").length
    };
    totalsWrap.innerHTML = `
      <div class="stat glass"><span class="stat-num">${total}</span><span class="stat-label">Total Certifications</span></div>
      <div class="stat glass azure"><span class="stat-num">${counts.azure}</span><span class="stat-label">Azure</span></div>
      <div class="stat glass aws"><span class="stat-num">${counts.aws}</span><span class="stat-label">AWS</span></div>
      <div class="stat glass gcp"><span class="stat-num">${counts.gcp}</span><span class="stat-label">Google Cloud</span></div>`;
  }

  // Experience selector
  document.querySelectorAll("[data-home-exp]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-home-exp]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      homeState.experience = btn.dataset.homeExp;
      renderHomeRecommendation();
    });
  });
  document.querySelectorAll("[data-home-domain]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-home-domain]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      homeState.domain = btn.dataset.homeDomain;
      renderHomeRecommendation();
    });
  });
  document.querySelectorAll("[data-home-provider]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-home-provider]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      homeState.provider = btn.dataset.homeProvider;
      renderHomeRecommendation();
    });
  });

  // Featured paths
  const featured = document.getElementById("featured-paths");
  if (featured) {
    const items = [
      { exp: "student", domain: "developer", provider: "azure", label: "Azure Developer", icon: "fa-code" },
      { exp: "mid", domain: "security", provider: "azure", label: "Azure Security", icon: "fa-shield-halved" },
      { exp: "junior", domain: "data", provider: "aws", label: "AWS Data & ML", icon: "fa-database" },
      { exp: "senior", domain: "architect", provider: "gcp", label: "GCP Architect", icon: "fa-sitemap" }
    ];
    featured.innerHTML = items.map(it => {
      const pw = recommendPathways(it.exp, it.domain, it.provider)[0];
      const chain = pw.certs.map(id => getCertById(id).code).join(" &rarr; ");
      return `
        <a class="featured-card glass ${it.provider}" href="pathway.html?provider=${it.provider}&experience=${it.exp}&domain=${it.domain}">
          <div class="featured-icon"><i class="fa-solid ${it.icon}"></i></div>
          <h3>${it.label}</h3>
          <p class="featured-chain">${chain}</p>
          <span class="cert-card-link">Explore Path <i class="fa-solid fa-arrow-right"></i></span>
        </a>`;
    }).join("");
  }
}

function renderHomeRecommendation() {
  const out = document.getElementById("home-recommendation");
  if (!out) return;
  if (!homeState.experience || !homeState.domain) {
    out.innerHTML = "";
    out.classList.remove("active");
    return;
  }
  const recs = recommendStartingCerts(homeState.experience, homeState.domain, homeState.provider);
  const cards = recs.filter(r => r.cert).map(r => `
    <div class="rec-card glass ${r.provider}">
      <span class="rec-label">Start with</span>
      <h4>${r.cert.code}</h4>
      <p>${r.cert.name}</p>
      ${levelBadge(r.cert)}
    </div>`).join("");
  const qs = `provider=${homeState.provider}&experience=${homeState.experience}&domain=${homeState.domain}`;
  out.innerHTML = `
    <h3 class="rec-title">Your recommended starting point</h3>
    <div class="rec-cards">${cards}</div>
    <a class="btn btn-primary btn-lg" href="pathway.html?${qs}">Start Your Journey <i class="fa-solid fa-arrow-right"></i></a>`;
  out.classList.add("active");
  out.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ============================ EXPLORE PAGE ============================ */
const exploreState = { provider: "all", level: "all", domain: "all", search: "" };

function initExplore() {
  if (!document.getElementById("explore-app")) return;

  const params = new URLSearchParams(location.search);
  if (params.get("provider")) {
    exploreState.provider = params.get("provider");
    const sel = document.getElementById("filter-provider");
    if (sel) sel.value = exploreState.provider;
  }

  const bind = (id, key) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", () => { exploreState[key] = el.value; renderExplore(); });
  };
  bind("filter-provider", "provider");
  bind("filter-level", "level");
  bind("filter-domain", "domain");

  const search = document.getElementById("filter-search");
  if (search) search.addEventListener("input", () => { exploreState.search = search.value.toLowerCase().trim(); renderExplore(); });

  renderExplore();
}

function renderExplore() {
  const grid = document.getElementById("explore-grid");
  const count = document.getElementById("explore-count");
  if (!grid) return;
  let results = CERTS.filter(c => {
    if (exploreState.provider !== "all" && c.provider !== exploreState.provider) return false;
    if (exploreState.level !== "all" && c.level !== exploreState.level) return false;
    if (exploreState.domain !== "all" && !c.domain.includes(exploreState.domain)) return false;
    if (exploreState.search) {
      const hay = (c.name + " " + c.code + " " + c.description).toLowerCase();
      if (!hay.includes(exploreState.search)) return false;
    }
    return true;
  });
  // Sort by provider then level order
  results.sort((a, b) => a.provider.localeCompare(b.provider) || LEVELS[a.level].order - LEVELS[b.level].order);
  if (count) count.textContent = `${results.length} certification${results.length !== 1 ? "s" : ""} found`;
  grid.innerHTML = results.length
    ? results.map(certCard).join("")
    : `<div class="explore-empty"><i class="fa-solid fa-magnifying-glass"></i><p>No certifications match your filters.</p></div>`;
}

/* ============================ INIT ============================ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initHome();
  initExplore();
});
