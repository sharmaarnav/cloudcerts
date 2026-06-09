// CloudCerts - Individual certification detail page

function initCertPage() {
  const root = document.getElementById("cert-app");
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const cert = id ? getCertById(id) : null;

  if (!cert) {
    root.innerHTML = `
      <div class="cert-notfound glass">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <h2>Certification not found</h2>
        <p>We couldn't find a certification with that ID.</p>
        <a class="btn btn-primary" href="explore.html">Browse all certifications</a>
      </div>`;
    return;
  }

  document.title = `${cert.code} - ${cert.name} | CloudCerts`;

  const pInfo = PROVIDERS[cert.provider];
  const linkCert = cid => {
    const c = getCertById(cid);
    return c ? `<a class="related-link ${c.provider}" href="certification.html?id=${c.id}">
      <span class="related-code">${c.code}</span><span class="related-name">${c.name}</span>
      <i class="fa-solid fa-arrow-right"></i></a>` : "";
  };

  // Build prominent status alert for retired/retiring certs
  let statusAlert = "";
  if (cert.status === "retired") {
    const rep = cert.replacedBy ? `<br><strong>Replaced by:</strong> ${cert.replacedBy}` : "<br>No direct replacement announced.";
    statusAlert = `<div class="cert-status-alert retired">
      <i class="fa-solid fa-ban"></i>
      <div><strong>This certification was retired on ${cert.retiredDate}.</strong> The exam is no longer available. Existing credentials remain valid for 3 years from the date earned.${rep}</div>
    </div>`;
  } else if (cert.status === "retiring") {
    const rep = cert.replacedBy ? `<br><strong>Replacement:</strong> ${cert.replacedBy}` : "";
    statusAlert = `<div class="cert-status-alert retiring">
      <i class="fa-solid fa-triangle-exclamation"></i>
      <div><strong>⚠️ This certification is retiring on ${cert.retirementDate}.</strong> You can still earn it before that date. Plan accordingly.${rep}</div>
    </div>`;
  } else if (cert.status === "new") {
    statusAlert = `<div class="cert-status-alert new-cert">
      <i class="fa-solid fa-star"></i>
      <div><strong>New certification!</strong> This credential was recently launched.</div>
    </div>`;
  }

  root.innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">Home</a> <i class="fa-solid fa-chevron-right"></i>
      <a href="explore.html">Explore</a> <i class="fa-solid fa-chevron-right"></i>
      <span>${cert.code}</span>
    </nav>

    ${statusAlert}

    <header class="cert-header glass ${cert.provider}" style="--p-color:${pInfo.color}">
      <div class="cert-header-icon"><i class="fa-brands ${pInfo.icon}"></i></div>
      <div class="cert-header-info">
        <div class="cert-header-meta">
          <span class="badge badge-${cert.level}">${LEVELS[cert.level].name}</span>
          <span class="cert-header-provider">${pInfo.name}</span>
        </div>
        <h1>${cert.name}</h1>
        <span class="cert-header-code">${cert.code}</span>
      </div>
    </header>

    <div class="tabs">
      <div class="tab-bar" role="tablist">
        ${["Overview","Skills Covered","Prerequisites","Exam Details","Study Resources","Career Impact"]
          .map((t,i)=>`<button class="tab-btn ${i===0?'active':''}" data-tab="${i}">${t}</button>`).join("")}
      </div>

      <div class="tab-panel active" data-panel="0">
        <h2>About this certification</h2>
        <p>${cert.description}</p>
        <div class="info-grid">
          <div class="info-block glass"><h3><i class="fa-solid fa-user-check"></i> Who it's for</h3><p>${cert.whoIsItFor}</p></div>
          <div class="info-block glass"><h3><i class="fa-solid fa-star"></i> Why get it</h3><p>${cert.whyGetIt}</p></div>
        </div>
      </div>

      <div class="tab-panel" data-panel="1">
        <h2>Skills Covered</h2>
        <div class="skills-list">
          ${cert.skills.map(s=>`
            <div class="skill-row">
              <div class="skill-head"><span>${s.name}</span><span class="skill-pct">${s.percentage}%</span></div>
              <div class="skill-bar"><div class="skill-fill ${cert.provider}" style="width:${s.percentage}%"></div></div>
            </div>`).join("")}
        </div>
      </div>

      <div class="tab-panel" data-panel="2">
        <h2>Prerequisites</h2>
        <div class="info-block glass">
          <h3><i class="fa-solid fa-briefcase"></i> Recommended experience</h3>
          <p>${cert.prerequisites.experience}</p>
        </div>
        <h3 class="sub-h">Recommended prior certifications</h3>
        ${cert.prerequisites.certs.length
          ? `<div class="related-list">${cert.prerequisites.certs.map(linkCert).join("")}</div>`
          : `<p class="muted">None required &mdash; this is a great starting point.</p>`}
      </div>

      <div class="tab-panel" data-panel="3">
        <h2>Exam Details</h2>
        <div class="exam-grid">
          <div class="exam-item glass"><i class="fa-solid fa-list-check"></i><span class="exam-label">Questions</span><span class="exam-val">${cert.examDetails.questions}</span></div>
          <div class="exam-item glass"><i class="fa-solid fa-clock"></i><span class="exam-label">Duration</span><span class="exam-val">${cert.examDetails.duration}</span></div>
          <div class="exam-item glass"><i class="fa-solid fa-check-double"></i><span class="exam-label">Passing Score</span><span class="exam-val">${cert.examDetails.passingScore}</span></div>
          <div class="exam-item glass"><i class="fa-solid fa-tag"></i><span class="exam-label">Cost</span><span class="exam-val">${cert.examDetails.cost}</span></div>
          <div class="exam-item glass"><i class="fa-solid fa-file-lines"></i><span class="exam-label">Format</span><span class="exam-val">${cert.examDetails.format}</span></div>
          <div class="exam-item glass"><i class="fa-solid fa-language"></i><span class="exam-label">Languages</span><span class="exam-val">${cert.examDetails.languages.join(", ")}</span></div>
        </div>
      </div>

      <div class="tab-panel" data-panel="4">
        <h2>Study Resources</h2>
        <div class="related-list">
          ${cert.studyResources.map(r=>`
            <a class="resource-link glass" href="${r.url}">
              <i class="fa-solid fa-book-open"></i>
              <span class="resource-title">${r.title}</span>
              <span class="tag">${r.type}</span>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>`).join("")}
        </div>
      </div>

      <div class="tab-panel" data-panel="5">
        <h2>Career Impact</h2>
        <h3 class="sub-h">Job roles this qualifies you for</h3>
        <div class="role-chips">${cert.careerRoles.map(r=>`<span class="role-chip ${cert.provider}">${r}</span>`).join("")}</div>
        <div class="info-block glass salary">
          <h3><i class="fa-solid fa-money-bill-trend-up"></i> Salary impact</h3>
          <p>${salaryNote(cert)}</p>
        </div>
      </div>
    </div>

    <section class="related-section">
      <h2>What to take next</h2>
      ${cert.nextCerts.length
        ? `<div class="related-list">${cert.nextCerts.map(linkCert).join("")}</div>`
        : `<p class="muted">This is a top-tier credential &mdash; consider a specialty or another provider next.</p>`}
    </section>

    <div class="cert-nav">
      <a class="btn btn-ghost" href="pathway.html"><i class="fa-solid fa-route"></i> Back to Pathway</a>
      <a class="btn btn-ghost" href="explore.html"><i class="fa-solid fa-grip"></i> Back to Explore</a>
    </div>
  `;

  // Tab switching
  root.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      root.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      root.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add("active");
    });
  });
}

function salaryNote(cert) {
  const byLevel = {
    foundational: "Entry-level credentials like this typically support roles in the $55k–$85k range and accelerate promotion into specialized cloud roles.",
    associate: "Associate certifications commonly correlate with salaries in the $90k–$130k range and are among the most requested credentials in cloud job postings.",
    professional: "Professional-level credentials are linked to senior roles often paying $130k–$180k+, and consistently rank among the highest-paying IT certifications.",
    expert: "Expert credentials position you for principal and lead roles, frequently paying $140k–$190k+ with significant negotiating leverage.",
    specialty: "Specialty certifications validate rare expertise and can add a meaningful premium, with specialized roles often paying $130k–$175k+."
  };
  return byLevel[cert.level] || "";
}

document.addEventListener("DOMContentLoaded", initCertPage);
