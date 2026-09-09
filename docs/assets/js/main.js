(function () {
  "use strict";

  /* ─── Mobile nav toggle ────────────────────────────── */
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ─── Scan tile toggle (demo page) ─────────────────── */
  var scanGrid = document.getElementById("scanGrid");
  if (scanGrid) {
    scanGrid.querySelectorAll(".scan-tile").forEach(function (tile) {
      tile.addEventListener("click", function () {
        scanGrid.querySelectorAll(".scan-tile").forEach(function (t) {
          t.classList.remove("is-active");
          t.setAttribute("aria-pressed", "false");
        });
        tile.classList.add("is-active");
        tile.setAttribute("aria-pressed", "true");
      });
    });
  }

  /* ─── Demo — mock inference ─────────────────────────── */
  var FINDINGS = [
    "ACL",
    "PCL",
    "Collateral ligament",
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

  var CRITICAL = { "ACL": true, "PCL": true, "Meniscus": true, "Bone contusion": true, "Fracture": true };

  var STUDIES = {
    study_00421: {
      report: "Placeholder report: mild joint effusion. Questionable partial ACL signal change. Menisci otherwise intact. No definite fracture.",
      scores: [0.62, 0.18, 0.22, 0.41, 0.15, 0.12, 0.20, 0.71, 0.33, 0.08, 0.27, 0.09]
    },
    study_01108: {
      report: "Placeholder report: degenerative change predominant in medial tibiofemoral compartment. Small Baker's cyst. No acute fracture or ligament disruption.",
      scores: [0.14, 0.11, 0.19, 0.36, 0.78, 0.44, 0.57, 0.39, 0.48, 0.66, 0.16, 0.07]
    },
    study_01955: {
      report: "Placeholder report: trauma protocol. Bone contusion pattern identified. Suspected ACL disruption. Correlate clinically for fracture.",
      scores: [0.88, 0.24, 0.31, 0.55, 0.21, 0.18, 0.25, 0.67, 0.29, 0.12, 0.81, 0.74]
    }
  };

  var studySelect  = document.getElementById("studySelect");
  var reportBox    = document.getElementById("reportBox");
  var findingsList = document.getElementById("findingsList");
  var runBtn       = document.getElementById("runBtn");
  var resetBtn     = document.getElementById("resetBtn");
  var actionPanel  = document.getElementById("actionPanel");
  var actionTitle  = document.getElementById("actionTitle");
  var actionText   = document.getElementById("actionText");

  if (!studySelect || !findingsList) return; // not on demo page

  function renderRows(scores) {
    findingsList.innerHTML = "";
    FINDINGS.forEach(function (name, i) {
      var val = scores ? scores[i] : null;
      var pct = val !== null ? Math.round(val * 100) : 0;
      var item = document.createElement("div");
      item.className = "finding-row";
      item.setAttribute("role", "listitem");
      item.innerHTML =
        '<span class="finding-name">' + name + '</span>' +
        '<span class="finding-score">' + (val !== null ? val.toFixed(2) : "—") + '</span>' +
        '<div class="finding-bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100" aria-label="' + name + ' probability">' +
          '<div class="finding-bar-fill" style="width:' + (scores ? pct + "%" : "0%") + '"></div>' +
        '</div>';
      findingsList.appendChild(item);
    });
  }

  function setTriage(scores) {
    var maxAny = 0;
    var maxCritical = 0;
    var topName = FINDINGS[0];

    scores.forEach(function (v, i) {
      if (v > maxAny) { maxAny = v; topName = FINDINGS[i]; }
      if (CRITICAL[FINDINGS[i]] && v > maxCritical) maxCritical = v;
    });

    var focus = maxCritical >= maxAny * 0.8 ? maxCritical : maxAny;
    var level, title, text;

    if (focus >= 0.70) {
      level = "high";
      title = "High priority — specialist review required";
      text  = "Mock model detects high-probability critical finding. Top concern: " + topName + " (" + maxAny.toFixed(2) + "). Immediate radiologist review is recommended. Human confirmation required before any clinical action.";
    } else if (focus >= 0.40) {
      level = "medium";
      title = "Medium priority — expedite review";
      text  = "Mock model suggests prioritised review. Focus finding: " + topName + " (" + maxAny.toFixed(2) + "). Notify the responsible radiologist.";
    } else {
      level = "low";
      title = "Low priority — routine queue";
      text  = "No high-probability critical flags in the mock output. Continue standard reporting workflow. Top signal: " + topName + " (" + maxAny.toFixed(2) + ").";
    }

    actionPanel.dataset.level = level;
    actionTitle.textContent = title;
    actionText.textContent  = text;
  }

  function loadStudy() {
    var study = STUDIES[studySelect.value];
    reportBox.value = study.report;
    renderRows(null);
    actionPanel.dataset.level = "none";
    actionTitle.textContent = "Awaiting inference";
    actionText.textContent  = "Select a study and run the mock model to generate triage guidance.";
  }

  studySelect.addEventListener("change", loadStudy);

  runBtn.addEventListener("click", function () {
    runBtn.disabled = true;
    runBtn.textContent = "Running…";
    var study = STUDIES[studySelect.value];
    setTimeout(function () {
      renderRows(study.scores);
      setTriage(study.scores);
      runBtn.disabled = false;
      runBtn.textContent = "Run inference";
    }, 480);
  });

  resetBtn.addEventListener("click", function () {
    studySelect.selectedIndex = 0;
    loadStudy();
  });

  loadStudy();

})();
