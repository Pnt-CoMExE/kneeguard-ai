(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const FINDINGS = [
    "ACL",
    "PCL",
    "MCL / LCL complex",
    "Meniscus",
    "OA medial TF",
    "OA lateral TF",
    "OA patellofemoral",
    "Joint effusion",
    "Synovitis",
    "Baker's cyst",
    "Bone contusion",
    "Fracture"
  ];

  const CRITICAL = new Set(["ACL", "PCL", "Fracture", "Bone contusion", "Meniscus"]);

  const STUDIES = {
    study_00421: {
      report:
        "Placeholder report: mild joint effusion. Questionable partial ACL signal change. Menisci otherwise intact. No definite fracture.",
      scores: [0.62, 0.18, 0.22, 0.41, 0.15, 0.12, 0.2, 0.71, 0.33, 0.08, 0.27, 0.09]
    },
    study_01108: {
      report:
        "Placeholder report: degenerative change predominant in medial tibiofemoral compartment. Small Baker's cyst. No acute fracture.",
      scores: [0.14, 0.11, 0.19, 0.36, 0.78, 0.44, 0.57, 0.39, 0.48, 0.66, 0.16, 0.07]
    },
    study_01955: {
      report:
        "Placeholder report: trauma protocol. Bone contusion pattern. Suspected ACL disruption. Correlate clinically for fracture.",
      scores: [0.88, 0.24, 0.31, 0.55, 0.21, 0.18, 0.25, 0.67, 0.29, 0.12, 0.81, 0.74]
    }
  };

  const studySelect = document.getElementById("studySelect");
  const reportBox = document.getElementById("reportBox");
  const findingsList = document.getElementById("findingsList");
  const runBtn = document.getElementById("runInference");
  const resetBtn = document.getElementById("resetDemo");
  const actionBox = document.getElementById("actionBox");
  const actionTitle = document.getElementById("actionTitle");
  const actionText = document.getElementById("actionText");
  const scanGrid = document.getElementById("scanGrid");

  if (!studySelect || !findingsList) {
    return;
  }

  function renderFindingRows(scores) {
    findingsList.innerHTML = "";
    FINDINGS.forEach(function (name, index) {
      const value = scores ? scores[index] : 0;
      const row = document.createElement("div");
      row.className = "finding";
      row.innerHTML =
        '<div class="finding-name">' +
        name +
        '</div><div class="finding-score">' +
        (scores ? value.toFixed(2) : "—") +
        '</div><div class="meter"><span style="width:' +
        (scores ? Math.round(value * 100) : 0) +
        '%"></span></div>';
      findingsList.appendChild(row);
    });
  }

  function triage(scores) {
    let maxCritical = 0;
    let maxAny = 0;
    let topName = FINDINGS[0];

    scores.forEach(function (value, index) {
      if (value > maxAny) {
        maxAny = value;
        topName = FINDINGS[index];
      }
      if (CRITICAL.has(FINDINGS[index]) && value > maxCritical) {
        maxCritical = value;
      }
    });

    const focus = maxCritical >= maxAny * 0.85 ? maxCritical : maxAny;
    let level = "low";
    let title = "Low priority";
    let text =
      "No high-probability critical flags in the mock output. Continue routine reporting workflow. Top signal: " +
      topName +
      " (" +
      maxAny.toFixed(2) +
      ").";

    if (focus >= 0.7) {
      level = "high";
      title = "High priority — specialist review";
      text =
        "Mock model suggests immediate review. Highest concern near " +
        topName +
        " (" +
        maxAny.toFixed(2) +
        "). Human confirmation required before any clinical action.";
    } else if (focus >= 0.4) {
      level = "medium";
      title = "Medium priority — expedite review";
      text =
        "Mock model suggests prioritized radiologist review. Focus on " +
        topName +
        " (" +
        maxAny.toFixed(2) +
        "). Notify the responsible reader.";
    }

    actionBox.dataset.level = level;
    actionTitle.textContent = title;
    actionText.textContent = text;
  }

  function syncStudyMeta() {
    const study = STUDIES[studySelect.value];
    reportBox.value = study.report;
    renderFindingRows(null);
    actionBox.dataset.level = "low";
    actionTitle.textContent = "Awaiting inference";
    actionText.textContent =
      "Select a study and run the mock model to generate triage guidance.";
  }

  studySelect.addEventListener("change", syncStudyMeta);

  if (scanGrid) {
    scanGrid.querySelectorAll(".scan-tile").forEach(function (tile) {
      tile.addEventListener("click", function () {
        scanGrid.querySelectorAll(".scan-tile").forEach(function (t) {
          t.classList.remove("is-active");
        });
        tile.classList.add("is-active");
      });
    });
  }

  runBtn.addEventListener("click", function () {
    const study = STUDIES[studySelect.value];
    runBtn.disabled = true;
    runBtn.textContent = "Running…";

    window.setTimeout(function () {
      renderFindingRows(study.scores);
      triage(study.scores);
      runBtn.disabled = false;
      runBtn.textContent = "Run inference";
    }, 450);
  });

  resetBtn.addEventListener("click", function () {
    studySelect.selectedIndex = 0;
    syncStudyMeta();
  });

  syncStudyMeta();
})();
