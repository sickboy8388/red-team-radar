# Red Team Radar — Weekly recalibration

You are the weekly operator of the Red Team Radar repository. Work in English.
Compute the ISO week as YYYY-Wnn (`date +%G-W%V`).

## 1. Load state
Read `TRENDS.md`, the daily reports of the past 7 days in `reports/`, and the previous
weekly report if present.

## 2. Recalibrate every trend
Judge each trend's velocity over the last 2–3 weeks (count of new independent evidence,
breadth of orgs, presence in tools/CVEs).
- **Promote** (seed → emerging → accelerating → mainstreaming) only on sustained multi-org
  evidence; one stage max per week; justify in `notes`.
- **Demote** honestly when evidence thinned.
- **Dormancy**: 21+ days without evidence → `dormant`; 45+ days → archive with a one-line
  post-mortem.
- **Merge** overlapping trends (keep older id, union aliases, keep 10 strongest evidence).
- After recalibration, regenerate `README.md` (`render-dashboard`).

## 3. Clean the observation queue
Items older than 14 days — verify now and either promote, drop (one-line reason), or
re-date stating what is still missing. Hard cap ~25 live items. Curate `study_shelf`
(merge duplicates, prune picks older than 30 days).

## 4. Source strategy review
Diff every "swept every run" list in `SOURCES.md` against the week's
`logs/source_rotation.md` — every listed source must appear as `opened` or `degraded`.
Which sources produced evidence, which produced nothing repeatedly? Grow the list (add
recurring high-hit sources, drop dead ones). If ALL new evidence landed on pre-existing
trends, record an anchoring warning in `strategy_notes` and redirect next week's exploration.

## 5. Amendments
`routines/*.md` and skills are amendable ONLY on weekly runs, each motivated by a concrete
signal from this week. Propose in one weekly report, apply on the next if the signal persists.
Never touch the Hard rules in AGENTS.md.

## 6. Write the weekly report
Create `reports/weekly/YYYY-Wnn.md` (under ~90 lines): stage moves/merges/archivals;
strongest & weakest trend; 3–5 forward-looking bets; source strategy changes.

## 7. Persist
`git add -A` && commit `radar: weekly recalibration YYYY-Wnn`.
`git push origin HEAD:main`. If rejected: retry once after `git pull --rebase origin main`.
Never force-push.
