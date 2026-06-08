// CloudCerts - Pathway logic & interactive pathway page

const EXPERIENCE_LEVELS = {
  "student": { label: "Student / No Experience", icon: "fa-graduation-cap" },
  "junior": { label: "1-2 Years IT", icon: "fa-seedling" },
  "mid": { label: "3-5 Years IT", icon: "fa-chart-line" },
  "senior": { label: "5+ Years IT", icon: "fa-user-tie" },
  "cloud-pro": { label: "Cloud Professional", icon: "fa-cloud" }
};

// Base ordered tracks per provider+domain. The recommendation engine trims the
// front of the track based on the user's experience level.
const TRACKS = {
  azure: {
    developer:   ["AZ-900", "AZ-204", "AZ-400", "AZ-305"],
    devops:      ["AZ-900", "AZ-104", "AZ-204", "AZ-400", "AZ-305"],
    data:        ["DP-900", "DP-203", "DP-100", "DP-500"],
    security:    ["SC-900", "AZ-500", "SC-200", "SC-300", "SC-100"],
    architect:   ["AZ-900", "AZ-104", "AZ-305", "SC-100"],
    admin:       ["AZ-900", "AZ-104", "AZ-700", "AZ-800", "AZ-801"],
    business:    ["AZ-900", "MS-900", "PL-900", "PL-200"]
  },
  aws: {
    developer:   ["CLF-C02", "DVA-C02", "DOP-C02", "SAP-C02"],
    devops:      ["CLF-C02", "SOA-C02", "DVA-C02", "DOP-C02"],
    data:        ["CLF-C02", "DEA-C01", "DAS-C01", "MLS-C01"],
    security:    ["CLF-C02", "SAA-C03", "SCS-C02"],
    architect:   ["CLF-C02", "SAA-C03", "SAP-C02", "ANS-C01"],
    admin:       ["CLF-C02", "SOA-C02", "SAA-C03"],
    business:    ["CLF-C02", "AIF-C01"]
  },
  gcp: {
    developer:   ["GCP-CDL", "GCP-ACE", "GCP-PCD", "GCP-PCDE"],
    devops:      ["GCP-CDL", "GCP-ACE", "GCP-PCDE"],
    data:        ["GCP-CDL", "GCP-ACE", "GCP-PDE", "GCP-PMLE"],
    security:    ["GCP-CDL", "GCP-ACE", "GCP-PCSE"],
    architect:   ["GCP-CDL", "GCP-ACE", "GCP-PCA", "GCP-PCNE"],
    admin:       ["GCP-CDL", "GCP-ACE", "GCP-PGWA"],
    business:    ["GCP-CDL"]
  }
};

// How many foundational steps to trim from the start of the track based on experience.
const TRIM_BY_EXPERIENCE = {
  "student": 0,
  "junior": 0,
  "mid": 1,
  "senior": 1,
  "cloud-pro": 2
};

function buildTrack(provider, domain, experience) {
  const base = (TRACKS[provider] && TRACKS[provider][domain]) ? TRACKS[provider][domain].slice() : [];
  if (base.length <= 1) return base;
  const trim = TRIM_BY_EXPERIENCE[experience] || 0;
  // Never trim more than half the track, and always keep at least 2 steps.
  const maxTrim = Math.min(trim, base.length - 2);
  return base.slice(Math.max(0, maxTrim));
}

// Returns an array of pathway objects: { title, provider, domain, certs: [ids] }
function recommendPathways(experience, domain, provider) {
  const providers = provider === "all" ? ["azure", "aws", "gcp"] : [provider];
  const pathways = [];
  providers.forEach(p => {
    const track = buildTrack(p, domain, experience);
    if (track.length) {
      pathways.push({
        title: `${PROVIDERS[p].name} ${DOMAINS[domain]} Path`,
        provider: p,
        domain: domain,
        certs: track
      });
    }
  });
  return pathways;
}

// Convenience: get starting certs for the homepage recommendation
function recommendStartingCerts(experience, domain, provider) {
  return recommendPathways(experience, domain, provider).map(pw => ({
    provider: pw.provider,
    cert: getCertById(pw.certs[0])
  }));
}

/* ============================ PROGRESS TRACKING ============================ */
const PROGRESS_KEY = "cloudcerts-progress";

function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch (e) { return {}; }
}
function setCertStatus(id, status) {
  const p = getProgress();
  if (status === "none") delete p[id]; else p[id] = status;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}
function getCertStatus(id) {
  return getProgress()[id] || "none";
}

/* ============================ PATHWAY PAGE UI ============================ */
const pwState = { provider: "all", experience: null, domain: null, selectedCert: null };

function initPathwayPage() {
  if (!document.getElementById("pathway-app")) return;

  // Provider step
  document.querySelectorAll("[data-pw-provider]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-pw-provider]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      pwState.provider = btn.dataset.pwProvider;
      maybeRenderPathways();
    });
  });

  // Experience step
  document.querySelectorAll("[data-pw-exp]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-pw-exp]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      pwState.experience = btn.dataset.pwExp;
      maybeRenderPathways();
    });
  });

  // Domain step
  document.querySelectorAll("[data-pw-domain]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-pw-domain]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      pwState.domain = btn.dataset.pwDomain;
      maybeRenderPathways();
    });
  });

  // Pre-fill from URL (coming from homepage)
  const params = new URLSearchParams(location.search);
  if (params.get("provider")) {
    pwState.provider = params.get("provider");
    const b = document.querySelector(`[data-pw-provider="${pwState.provider}"]`);
    if (b) b.classList.add("selected");
  }
  if (params.get("experience")) {
    pwState.experience = params.get("experience");
    const b = document.querySelector(`[data-pw-exp="${pwState.experience}"]`);
    if (b) b.classList.add("selected");
  }
  if (params.get("domain")) {
    pwState.domain = params.get("domain");
    const b = document.querySelector(`[data-pw-domain="${pwState.domain}"]`);
    if (b) b.classList.add("selected");
  }
  maybeRenderPathways();

  // Side panel close
  const closeBtn = document.getElementById("pw-panel-close");
  if (closeBtn) closeBtn.addEventListener("click", closePanel);
}

function maybeRenderPathways() {
  const out = document.getElementById("pw-results");
  if (!out) return;
  if (!pwState.experience || !pwState.domain) {
    out.innerHTML = `<div class="pw-empty"><i class="fa-solid fa-route"></i><p>Select your background above to generate personalized pathways.</p></div>`;
    return;
  }
  const pathways = recommendPathways(pwState.experience, pwState.domain, pwState.provider);
  if (!pathways.length) {
    out.innerHTML = `<div class="pw-empty"><i class="fa-solid fa-circle-info"></i><p>No pathway found for that combination. Try a different provider.</p></div>`;
    return;
  }
  out.innerHTML = pathways.map(renderPathway).join("");
  bindNodeEvents();
}

function renderPathway(pw) {
  const nodes = pw.certs.map((id, idx) => {
    const cert = getCertById(id);
    if (!cert) return "";
    const status = getCertStatus(id);
    const arrow = idx < pw.certs.length - 1
      ? `<div class="pw-arrow"><i class="fa-solid fa-arrow-right-long"></i></div>` : "";
    return `
      <div class="pw-node-wrap">
        <div class="pw-node ${cert.provider} status-${status}" data-cert="${id}" role="button" tabindex="0">
          <span class="pw-node-code">${cert.code}</span>
          <span class="pw-node-name">${cert.name}</span>
          <span class="badge badge-${cert.level}">${LEVELS[cert.level].name}</span>
          <span class="pw-node-status status-pill status-${status}">${statusLabel(status)}</span>
        </div>
        ${arrow}
      </div>`;
  }).join("");
  return `
    <div class="pw-pathway glass">
      <h3 class="pw-pathway-title"><i class="fa-brands ${PROVIDERS[pw.provider].icon}"></i> ${pw.title}</h3>
      <div class="pw-track">${nodes}</div>
    </div>`;
}

function statusLabel(status) {
  return { none: "Not Started", planned: "Planned", "in-progress": "In Progress", completed: "Completed" }[status] || "Not Started";
}

function bindNodeEvents() {
  document.querySelectorAll(".pw-node").forEach(node => {
    const open = () => openPanel(node.dataset.cert);
    node.addEventListener("click", open);
    node.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

function openPanel(id) {
  const cert = getCertById(id);
  if (!cert) return;
  pwState.selectedCert = id;
  const panel = document.getElementById("pw-panel");
  const body = document.getElementById("pw-panel-body");
  const status = getCertStatus(id);
  body.innerHTML = `
    <div class="pw-panel-header ${cert.provider}">
      <span class="badge badge-${cert.level}">${LEVELS[cert.level].name}</span>
      <h3>${cert.name}</h3>
      <span class="pw-panel-code">${cert.code} &middot; ${PROVIDERS[cert.provider].name}</span>
    </div>
    <p class="pw-panel-desc">${cert.description}</p>
    <div class="pw-panel-meta">
      <div><i class="fa-solid fa-clock"></i> ${cert.examDetails.duration}</div>
      <div><i class="fa-solid fa-tag"></i> ${cert.examDetails.cost}</div>
      <div><i class="fa-solid fa-list-check"></i> ${cert.examDetails.questions} questions</div>
    </div>
    <div class="pw-status-control">
      <label>Your progress</label>
      <div class="pw-status-btns">
        ${["none","planned","in-progress","completed"].map(s =>
          `<button class="pw-status-btn ${status===s?'active':''}" data-status="${s}">${statusLabel(s)}</button>`
        ).join("")}
      </div>
    </div>
    <a class="btn btn-primary btn-block" href="certification.html?id=${cert.id}">View Full Details</a>
  `;
  body.querySelectorAll(".pw-status-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setCertStatus(id, btn.dataset.status);
      maybeRenderPathways();
      openPanel(id);
    });
  });
  panel.classList.add("open");
}

function closePanel() {
  const panel = document.getElementById("pw-panel");
  if (panel) panel.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", initPathwayPage);
