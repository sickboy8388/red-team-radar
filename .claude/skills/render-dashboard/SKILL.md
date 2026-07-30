---
name: render-dashboard
description: Regenerate README.md from TRENDS.md. Use in the SAME commit as any change to TRENDS.md so the landing page never drifts from the ledger.
---

# Rendering README.md

README.md is fully derived from TRENDS.md — never hand-edit it. Regenerate it whenever the
ledger changes, in the same commit.

Produce, in order:
1. Title + a one-line "Since last scan (YYYY-MM-DD)" digest: 3–5 bullets of the day's most
   important changes, each linking a primary URL.
2. **Trends table**: columns `trend | stage | latest signal`. Sort by stage
   (mainstreaming → accelerating → emerging → seed → dormant), then by last_evidence desc.
   Link each trend title to its TRENDS.md anchor and the latest-signal date to its URL.
3. **Tools & releases**: bullets for tracked tool repos with their newest release + date.
4. **Worth studying**: the current `study_shelf` items, each a link + one-line why.
5. Footer links: TRENDS.md, reports/, latest daily, latest weekly.

Keep it scannable. Every claim links a primary source. No exploit detail — pointers only.
