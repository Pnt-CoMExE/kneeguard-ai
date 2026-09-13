# KneeGuard AI — Topic & Problem Statement
**1501418 Selected Topics in Data Science and AI**  
**Week presentation (Topic + Problem Statement only)**  
Language: English

---

## Slide 1 — Title
**KneeGuard AI**  
Multimodal Knee Abnormality Detection from MRI

- Domain: Healthcare / Medical Imaging AI
- Dataset: RSNA Knee Abnormality Detection (Kaggle)
- Focus today: Topic selection and problem statement only

---

## Slide 2 — Team members & responsibilities

| Name | Student ID | Responsibility |
|------|------------|----------------|
| Patcharapon Teerarassamee | 6631501083 | Data processing |
| Lalitphat Bunkerd | 6631501104 | Data processing |
| Patiphan Nigrotha | 6631501070 | Modelling / Research |
| Prathanakorn Piti | 6631501073 | Modelling |
| Tanapon Saodan | 6631501044 | Modelling |
| Paniti Konngoen | 6631501071 | Web mockup |
| Pisit Nilthongkam | 6631501085 | Network + Document |
| Worayut Krichsan | 6631501105 | Report |

---

## Slide 3 — Topic (What we will build)
An AI decision-support system that estimates probabilities for **12 clinically important knee abnormalities** from MRI studies, then helps radiologists prioritize review (triage).

**Application area**
- Healthcare / MSK radiology
- Multilabel classification + decision support

**Course framework**
- Problem → Dataset → Data Model → AI Model → Decision → Action
- Today: Problem stage only

---

## Slide 4 — Problem context (What is happening?)
- One knee MRI can reveal multiple abnormalities at once (ligaments, meniscus, OA, effusion, fracture, etc.).
- Interpretation quality varies across sites and readers.
- Access to specialty-trained MSK radiologists is limited.
- High-risk findings may be delayed in large reading queues.

**Current limitation:** heavy dependence on expert reading that is hard to scale consistently.

---

## Slide 5 — Problem / Decision statement (core slide)
> **The proposed model will help radiologists and triage teams classify clinically important knee abnormalities by using multimodal knee MRI series and (training-time) radiology report text.**

**Decision needed**
- Which studies should be reviewed first?
- Which findings need urgent attention?

**How AI helps**
- Output 12 finding probabilities
- Map to Low / Medium / High triage
- Human confirmation remains required

---

## Slide 6 — Stakeholders

| Stakeholder | Role | Information / decision needed |
|-------------|------|-------------------------------|
| MSK radiologist | Decision maker | Prioritized worklist + per-finding probabilities |
| ER / orthopaedic clinician | Care provider | High-risk flags (fracture, ligament injury) |
| Hospital / imaging IT | System operator | Runtime, audit trail, safe deployment |
| Patient | Affected party | Faster and more consistent care pathway |

---

## Slide 7 — Why this problem is worth solving
- Clinical complexity: multilabel findings in one exam
- Workforce gap: uneven MSK specialist access
- Patient impact: delayed high-risk findings affect treatment timing
- Feasible public dataset: RSNA/Kaggle (~5,000+ exams, multi-site, multilingual reports)
- Clear decision use-case: triage support with human-in-the-loop

---

## Slide 8 — Objectives & project questions

**Objectives**
1. Examine relationships between MRI studies and 12 abnormality labels
2. Develop a multilabel model for per-finding probabilities
3. Translate outputs into triage decision rules with human oversight

**Key questions**
- Which features matter most for each finding?
- Which model best supports multilabel detection?
- How do we convert probabilities into practical actions?
- How should success be evaluated?

---

## Slide 9 — Summary
- **Topic:** KneeGuard AI — multimodal knee abnormality detection from MRI
- **Problem:** inconsistent / delayed MSK MRI interpretation under limited specialist access
- **Decision:** classify and prioritize clinically important findings for radiologist review
- **Next steps:** dataset description, data model, proposed decision model
- Mockup: https://pnt-comexe.github.io/kneeguard-ai/

**Thank you — Questions welcome.**

---

## Speaker notes (~2–3 minutes)
1. Introduce topic and healthcare domain.
2. Show team roles briefly.
3. Explain the clinical problem (complexity + specialist shortage).
4. Read the decision statement clearly.
5. Mention stakeholders in one sentence.
6. Close with why it matters and next steps.

---

Copy sections from this Markdown into PowerPoint / Google Slides.

## Live on GitHub Pages
https://pnt-comexe.github.io/kneeguard-ai/presentation/topic-problem-slides.html

Open `topic-problem-slides.html` in a browser → press `F` for fullscreen → use `←` `→` / Space.

