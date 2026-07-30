---
name: ledger-update
description: How to edit TRENDS.md safely — routing captured artifacts to evidence/queue/study_shelf, stage moves, and queue burndown. Use on every daily/weekly run that touches the ledger.
---

# Updating TRENDS.md

TRENDS.md is the single source of truth. Edit it surgically; never restructure or rename sections.

## Routing a captured primary (opened this session)
1. On an existing trend's axis → append an evidence line `date — URL — one-line context`
   (max 10; drop the weakest if over). Update that trend's `last_evidence`.
2. Not on any trend, but ≥3 independent groups already hold artifacts on the same sub-theme
   (check observation_queue) → create a new `### id: <slug> — <title>` block at `stage: seed`.
3. Otherwise → add one `observation_queue` line marked `[unverified]` or `[N groups so far]`.

## Stage moves
- At most ONE stage up per trend per run, and only on NEW independent evidence.
- No evidence for 21+ days → `dormant`. (Weekly archives at 45+ days.)

## Queue hygiene (every run)
- Add today's weak signals. Promote anything that now clears the bar (≥3 independent + artifact).
- Keep the queue ≤ ~25 lines: resolve the oldest over cap (promote, or drop with a one-line
  reason in today's report). Never silently delete.

## Hard limits
- Cite only URLs opened this session. Never guess a date or invent a URL.
- Never paste exploit code / payloads / step-by-step procedures. Link the primary source.
