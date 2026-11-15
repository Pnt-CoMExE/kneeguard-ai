(function () {
  "use strict";

  var cases = [
    {
      id: "c1",
      chip: "Case 1 · Torn ligament and torn meniscus",
      tail: "291861307866",
      side: "Right knee",
      note: [
        "The anterior cruciate ligament, which holds the center of the knee, is completely torn through the middle of the ligament.",
        "The medial meniscus is torn, and a small fragment has slipped into the medial gutter, so the knee may catch or lock.",
        "The lateral meniscus has a small tear.",
        "The medial collateral ligament has a mild sprain. It is not torn.",
        "There is only a trace of fluid in the joint. The cartilage still looks smooth."
      ],
      report: [
        "Horizontal oblique tear at the body and posterior horn of the medial meniscus. Displaced meniscal fragment into the medial gutter.",
        "Small longitudinal vertical tear at the periphery of the posterior horn of the lateral meniscus.",
        "Acute complete tear of the anterior cruciate ligament, at mid substance. Anterior tibial translation.",
        "Grade I ligamentous sprain of the medial collateral ligament.",
        "Minimal amount of right knee effusion. Articular cartilage appears normal."
      ],
      scores: [
        ["ACL", "0.56", "The report says the ligament is completely torn, but the score is still near the middle."],
        ["Medial meniscus", "0.50", "The report says it is torn, but the score is not decisive."],
        ["Lateral meniscus", "0.49", "The report says a small tear, but the score is not decisive."],
        ["Medial collateral ligament", "0.83", "The score leans toward a finding, even though the report calls it only a mild sprain."]
      ],
      follow: "This set follows the report: a knee with a torn central ligament and a torn meniscus. It does not follow the scores that are still uncertain.",
      caution: "If the knee catches and stays stuck when you straighten it, and it will not fully extend, stop the whole set. Do not keep trying to bend it.",
      dose: "Three exercises make one set. Do two sets a day.",
      moves: [
        {
          kind: "pump",
          name: "Ankle pumps",
          dose: "10 slow repetitions",
          how: "Lie down or sit reclined. Pull the toes toward you, then point the foot away.",
          guard: "This is not a knee-ligament stretch. Do not yank at the knee."
        },
        {
          kind: "quad",
          name: "Front-thigh squeeze",
          dose: "Hold 5 seconds, 8 times",
          how: "Keep the leg straight. Press the back of the knee into the bed, with the toes pointing up.",
          guard: "Do not hold your breath, and do not turn the toes inward or outward."
        },
        {
          kind: "slide",
          name: "Heel slide, only to a slight stretch",
          dose: "8 times, then straighten fully",
          how: "Slide the heel along the bed. Bend until you feel a slight stretch, then slowly straighten until the knee is straight.",
          guard: "Do not bend deeply, and do not twist the knee. If it clicks and then locks, stop that exercise."
        }
      ]
    },
    {
      id: "c2",
      chip: "Case 2 · Small lateral meniscus tear",
      tail: "670995018991",
      side: "The knee examined this time",
      note: [
        "The lateral meniscus has a small tear at its back edge.",
        "The medial meniscus is still normal.",
        "The anterior cruciate ligament is still normal.",
        "The medial collateral ligament has a moderate sprain that is healing.",
        "The cartilage on the inner side of the patella is starting to fray. There is not much fluid in the joint."
      ],
      report: [
        "Small free edge radial tear of the posterolateral corner of the lateral meniscus. Normal medial meniscus.",
        "Normal ACL, PCL, LCL.",
        "Mild thickening of the proximal half of MCL, a healing low grade, grade II MCL sprain.",
        "Fraying and fissuring of the medial patellar facet. Grade 2 patellar chondromalacia.",
        "No significant knee effusion."
      ],
      scores: [
        ["ACL", "0.08", "This matches the report, which says this ligament is still normal."],
        ["Lateral meniscus", "0.52", "The report says a small tear, but the score is still near the middle."],
        ["Medial meniscus", "0.58", "The score is still uncertain, even though the report says the medial side is normal."],
        ["Medial collateral ligament", "0.59", "The score is not decisive, even though the report describes a sprain."]
      ],
      follow: "This set looks after the small lateral meniscus tear and the healing medial collateral ligament. It is not the program used for a torn anterior cruciate ligament.",
      caution: "",
      dose: "Three exercises make one set. Do two sets a day.",
      moves: [
        {
          kind: "quad",
          name: "Front-thigh squeeze",
          dose: "Hold 5 seconds, 8 times",
          how: "Press the back of the knee into the bed, with the toes pointing up.",
          guard: "Do not twist the knee inward. The medial collateral ligament still has a sprain."
        },
        {
          kind: "raise",
          name: "Straight-leg raise",
          dose: "Lift about a handspan, hold 3 seconds, 8 times",
          how: "Bend the other knee, with that foot on the floor. Tighten the thigh first, then lift the examined leg until the heel comes off the bed.",
          guard: "If the knee bends as you lift, put the leg down. Do not force it higher."
        },
        {
          kind: "slide",
          name: "Heel slide, no deep bend",
          dose: "8 times",
          how: "Slide the heel toward you until a slight stretch, and stop before a deep bend.",
          guard: "The cartilage under the patella is starting to fray. Do not use a deep squat or stair climbing as the exercise."
        }
      ]
    },
    {
      id: "c3",
      chip: "Case 3 · Medial meniscus and a cyst behind the knee",
      tail: "242501252567",
      side: "The knee examined this time",
      note: [
        "The medial meniscus is torn toward the back.",
        "There is a small to moderate cyst behind the knee crease.",
        "There is a small amount of fluid in the joint.",
        "The main ligaments, and the bones mentioned in the report, still look normal."
      ],
      report: [
        "Oblique inferior surfacing tear through the posteromedial corner and posterior horn of the medial meniscus.",
        "A mild to moderate Baker's cyst is noted.",
        "There is a mild knee effusion.",
        "Normal lateral meniscus. Normal ACL, PCL, MCL and LCL.",
        "Articular cartilage is normal. Normal visualized bones."
      ],
      scores: [
        ["ACL", "0.07", "This matches the report, which says this ligament is normal."],
        ["Medial meniscus", "0.64", "It leans toward a finding, but it is still not clear, even though the report says the meniscus is torn."],
        ["Baker's cyst", "0.54", "The score sits in the middle, even though the report describes a cyst."],
        ["Fracture", "0.68", "The score leans toward a possible fracture, but the report says the bones that were seen are still normal."]
      ],
      follow: "This set follows the report, so it is trained as a torn meniscus with a cyst behind the knee. It does not restrict weight bearing the way a fracture would.",
      caution: "The model's fracture score is higher than in the other cases, but the radiology report does not say the bone is broken. Do not read this score in place of the report.",
      dose: "Three exercises make one set. Do two sets a day.",
      moves: [
        {
          kind: "quad",
          name: "Front-thigh squeeze",
          dose: "Hold 5 seconds, 8 times",
          how: "Press the back of the knee into the bed.",
          guard: "Do not put a pillow under the knee and press hard until the back of the knee feels tight."
        },
        {
          kind: "slide",
          name: "Heel slide, stop when the back of the knee tightens",
          dose: "8 times",
          how: "Slide the heel toward you until the back of the knee starts to feel tight, then straighten again.",
          guard: "Do not pull a strap to force a full bend. That compresses the cyst."
        },
        {
          kind: "raise",
          name: "Straight-leg raise",
          dose: "Lift about a handspan, hold 3 seconds, 8 times",
          how: "Tighten the thigh before you lift, then lower the leg slowly.",
          guard: "Do not turn the toes while you lift, and do not squat to pick up something heavy on the same day."
        }
      ]
    },
    {
      id: "c4",
      chip: "Case 4 · Bone bruise, not a fracture",
      tail: "144591371229",
      side: "Right knee. The symptom is pain.",
      note: [
        "The outer bone of the upper shin has a bruise inside the bone.",
        "No fracture line is seen.",
        "There is no fluid in the joint and no cyst behind the knee.",
        "The report says both menisci, the anterior cruciate ligament, and the collateral ligaments are normal."
      ],
      report: [
        "Indication: right knee pain.",
        "Focus of bone marrow edema at the lateral tibial plateau without a discrete fracture line.",
        "Most compatible with moderate osseous contusion. No discrete fracture line.",
        "No joint effusion. No Baker's cyst.",
        "Menisci, cruciate ligaments, and collateral ligaments are normal. Patella alta."
      ],
      scores: [
        ["Bone contusion", "0.69", "It leans toward a finding. That agrees with the report, but the score is not very high."],
        ["Fracture", "0.30", "It leans toward no fracture. That agrees with the report."],
        ["Medial meniscus", "0.53", "The score has not ruled this out, even though the report says it is normal."],
        ["ACL", "0.43", "The score has not ruled this out, even though the report says it is normal."]
      ],
      follow: "This set rests the bruised bone and moves it gently. It is not the program used for a torn ligament or a torn meniscus.",
      caution: "",
      dose: "Three exercises make one set. Do two sets a day. Do not jump yet, and do not run yet.",
      moves: [
        {
          kind: "pump",
          name: "Ankle pumps",
          dose: "10 times",
          how: "Pull the toes in and point them out, alternating slowly.",
          guard: "Do not stamp the heel hard on the floor. The bruise is in the upper shin."
        },
        {
          kind: "quad",
          name: "Front-thigh squeeze",
          dose: "Hold 5 seconds, 8 times",
          how: "Press the back of the knee into the bed.",
          guard: "Do not turn this exercise into a squat-to-stand or a fast walk."
        },
        {
          kind: "slide",
          name: "Short-range heel slide",
          dose: "8 times",
          how: "Slide the heel in a little, then straighten until the knee is straight.",
          guard: "If the bone hurts more while you bend, shorten the bend. Do not push farther."
        }
      ]
    },
    {
      id: "c5",
      chip: "Case 5 · Bone impaction and a torn ligament",
      tail: "136730458010",
      side: "Right knee. Football about one month ago, with little motion, swelling, and pain.",
      note: [
        "The anterior cruciate ligament is completely torn.",
        "There is an impaction fracture, a dent, at the outer end of the thigh bone, with bone bruising around it.",
        "The medial collateral ligament has a moderate sprain.",
        "There is a moderate cyst behind the knee, and part of that cyst has ruptured.",
        "Both menisci are still normal, and the report says there is no fluid in the joint."
      ],
      report: [
        "Football injury one month ago, with decreased range of motion, swelling and pain.",
        "Complete rupture of the anterior cruciate ligament, partially resorbed. Anterior translation of the tibia.",
        "Impaction fracture at the sulcus terminalis of the lateral femoral condyle, with severe osseous stress response and tibial plateau contusions.",
        "Grade 2 sprain of the medial collateral ligament.",
        "Moderate, partially ruptured Baker's cyst. No joint effusion. High-grade cartilage loss at the sulcus terminalis. Menisci are normal."
      ],
      scores: [
        ["ACL", "0.48", "The score sits in the middle, even though the report says the ligament is completely torn."],
        ["Fracture", "0.46", "The score sits in the middle, even though the report describes an impaction fracture."],
        ["Baker's cyst", "0.65", "It sits at the edge of a positive finding. That agrees with the report."],
        ["Joint effusion", "0.63", "The score leans toward fluid, even though the report says there is no joint effusion."]
      ],
      follow: "This set follows the report, so it is the gentlest of the five. There is both an impaction injury and a torn central ligament.",
      caution: "This page does not clear full weight bearing, or a return to football. The physician or physical therapist who examined this person is the one who says when weight bearing is allowed.",
      dose: "Three exercises make one set. Up to two sets a day. If the swelling increases, rest that set.",
      moves: [
        {
          kind: "pump",
          name: "Ankle pumps",
          dose: "10 times",
          how: "Lie with the head slightly raised. Pull the toes in and point them out.",
          guard: "This is not a walking exercise, and it is not marching in place."
        },
        {
          kind: "quad",
          name: "Thigh squeeze, without lifting the leg",
          dose: "Hold 5 seconds, 8 times",
          how: "Keep the leg straight on the bed. Press the back of the knee down gently.",
          guard: "Do not lift the leg off the bed, and do not put full body weight on this leg."
        },
        {
          kind: "tiny",
          name: "A very small heel slide",
          dose: "6 times. Bend only about one palm-width.",
          how: "Slide the heel toward you only a little. Stop when you feel a stretch, then straighten again.",
          guard: "Do not copy the other cases that bend farther. This case has an impaction injury. If bending makes the pain worse, stop that exercise."
        }
      ]
    }
  ];

  var clips = {
    pump: ["assets/img/rehab/ankle.gif", "Red alternates between two muscles in the figure. The shin is tibialis anterior as the foot pulls up. The calf is gastrocnemius as the foot points away."],
    quad: ["assets/img/rehab/quad.gif", "Red is rectus femoris, the central muscle on the front of the thigh, tightening while the leg stays straight."],
    raise: ["assets/img/rehab/raise.gif", "The other knee stays bent. The lifted leg stays straight. Red is rectus femoris, which both straightens the knee and helps lift the hip."],
    slide: ["assets/img/rehab/flex.gif", "While bending, red is biceps femoris, a hamstring. While straightening, the highlight moves to rectus femoris on the front."],
    tiny: ["assets/img/rehab/flex.gif", "The picture bends quite far. For this case, move only through the beginning of the bend. Do not follow it all the way."]
  };

  var rail = document.getElementById("rehab-cases");
  var detail = document.getElementById("rehab-detail");
  if (!rail || !detail) return;

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function draw(item) {
    rail.querySelectorAll("button").forEach(function (button) {
      button.setAttribute("aria-pressed", button.dataset.id === item.id ? "true" : "false");
    });

    var scores = item.scores.map(function (score) {
      return '<div class="rehab-score"><b>' + esc(score[0]) + " " + esc(score[1]) + "</b><span>" + esc(score[2]) + "</span></div>";
    }).join("");

    var notes = item.note.map(function (line) {
      return "<li>" + esc(line) + "</li>";
    }).join("");

    var report = item.report.map(function (line) {
      return "<li>" + esc(line) + "</li>";
    }).join("");

    var moves = item.moves.map(function (move, index) {
      var clip = clips[move.kind];
      return (
        '<article class="rehab-gif">' +
          '<img src="' + esc(clip[0]) + '" alt="' + esc(move.name) + '">' +
          '<div class="body">' +
            "<h3>" + (index + 1) + ". " + esc(move.name) + "</h3>" +
            '<p class="rehab-dose">' + esc(move.dose) + "</p>" +
            '<p class="rehab-cap">' + esc(clip[1]) + "</p>" +
            '<p class="rehab-cap"><strong>How to do it:</strong> ' + esc(move.how) + "</p>" +
            '<p class="rehab-guard"><strong>Do not mistake this:</strong> ' + esc(move.guard) + "</p>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    detail.innerHTML =
      '<article class="rehab-panel">' +
        '<p class="rehab-side">' + esc(item.side) + "</p>" +
        "<h2>" + esc(item.chip) + "</h2>" +
        '<p class="rehab-id">Study ID ending in ' + esc(item.tail) + "</p>" +
        '<div class="rehab-scores">' + scores + "</div>" +
        '<p class="rehab-bridge"><a href="model.html#decision-rules">How these scores become a triage decision</a>. When a score and the report disagree, this exercise set follows the written report.</p>' +
        "<ul>" + notes + "</ul>" +
        "<h3>What the report notes</h3>" +
        '<ul class="rehab-report">' + report + "</ul>" +
        '<p class="rehab-follow">' + esc(item.follow) + "</p>" +
        (item.caution ? '<div class="rehab-warn">' + esc(item.caution) + "</div>" : "") +
      "</article>" +
      '<article class="rehab-panel">' +
        '<div class="rehab-set-head">' +
          '<p class="eyebrow">This person\'s exercise set</p>' +
          "<h2>Bone and muscle pictures</h2>" +
          "<p>" + esc(item.dose) + "</p>" +
        "</div>" +
        '<div class="rehab-gifs">' + moves + "</div>" +
      "</article>";
  }

  cases.forEach(function (item, index) {
    var button = document.createElement("button");
    var parts = item.chip.split(" · ");
    button.type = "button";
    button.className = "rehab-case";
    button.dataset.id = item.id;
    button.innerHTML = "<small>" + esc(parts[0]) + "</small><b>" + esc(parts[1]) + "</b><span>" + esc(item.note[0]) + "</span>";
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.addEventListener("click", function () { draw(item); });
    rail.appendChild(button);
  });

  draw(cases[0]);
})();
