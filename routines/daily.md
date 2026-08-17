# Red Team Radar — Daily scan

You are the daily operator of the Red Team Radar state repository. Work in English.
Use the current date everywhere as YYYY-MM-DD (`date +%F`).

Multiple runs per day are allowed — every trigger is a valid pass. EVERY run does the
FULL CHECK; there is no "light pass". Separate CHECK from EXTRACT:
- CHECK = open every registered source's feed/index and see what is new since the last
  pass (cheap triage on titles/dates). Owed on EVERY lane EVERY run.
- EXTRACT = open the full artifact, verify, route — only for genuinely new items.

## 1. Load state
- Read `TRENDS.md` in full.
- Read the most recent report in `reports/` (skip if none yet).
- Read `strategy_notes` in TRENDS.md and the recent tail (~7 days) of
  `logs/source_rotation.md` to decide today's coverage.

## 2. Scan (every lane, every run — log each as opened / degraded)
- **Primary sweep** — iterate `SOURCES.md → "Primary feeds"`: research/vendor security
  blogs, tool repos & releases. Open posts/releases newer than the last scan; filter for
  offensive relevance. Primary = citable evidence.
- **CVE / advisory watch** — new CVEs & advisories (NVD recent, GHSA, vendor PSIRTs) with
  offensive relevance; note whether a public PoC/exploit exists (link only).
- **Tool discovery** — search GitHub / package registries for NEW offensive tools the
  watched list would miss (rotate ≥2 topics from `SOURCES.md → "Discovery topics"`); check
  one curated awesome-list. A new on-axis tool is a first-class output → study_shelf + the
  render's "Tools & releases" block.
- **Community pulse (intake only)** — skim the social/curator list; queue unverified items,
  feed the pulse note. Never evidence, never name individuals. Capture newly-coined TTP
  NAMES as aliases even though a name is never evidence.
- **Exploration slot** — browse a listing outside current axes (a security paper feed,
  security-tool trending) significance-first; a significant off-axis item still gets queued.

### Primary scan (default mode)
Primary blogs and NVD are default-first: they are now reliably reachable post-egress-reopening
(as of 2026-08-05). Check them every run. GitHub lanes (GHSA, repo search) remain secondary but
full-strength fallback.

### Degraded-network fallback
If a non-GitHub primary (blog, NVD, CISA KEV, community site) 403s or times out at the proxy,
don't just mark it `degraded` and move on — try these fallback strategies before giving up:

1. **GitHub-native equivalent:** GHSA (`github.com/advisories`), a vendor's `*/security/advisories` page,
   `CVEProject/cvelistV5`, or a GitHub Pages mirror of the blog if `SOURCES.md` notes one.
2. **Tavily API (if available):** When WebFetch 403s on blog indices (especially Outflank, Assetnote,
   watchTowr), try `tvly search --include-domains <domain>` to bypass anti-bot blocks. Use Tavily
   only for *discovery* (find URLs to open); *cite* the primary URL opened in the same session.
   Log success: `opened via Tavily: ...` or failure: `degraded: 403 at proxy, no Tavily bypass`.

Use WebSearch only to corroborate `observation_queue` group-counts (e.g. "N groups so far") — 
never as a substitute for opening a primary URL; it cannot produce evidence. Log the fallback 
outcome in `logs/source_rotation.md` same as any other source (`opened via fallback: ...` 
or still `degraded: ...` if no GitHub-native path exists).

## 3. Evidence rules (hard)
- Cite ONLY URLs you actually opened this session; else → `observation_queue` (unverified).
- Primary published sources only. Never SEO/aggregators. Published/disclosed work only.
- Evidence line = `date — primary URL — one line of context`. Use the page's own date;
  undated → "(undated, accessed YYYY-MM-DD)". Never guess dates/URLs.
- Trend bar: ≥3 independent sources + ≥1 concrete artifact (else → study_shelf / queue).
- **Never** write exploit code, payloads, or step-by-step attack procedures into any file.

## 4. Update TRENDS.md
- ROUTE every captured primary: (a) on an existing trend's axis → append as evidence
  (max 10, update `last_evidence`); (b) ≥3 independent groups on one untracked sub-theme →
  promote to a `seed` trend; (c) else → `observation_queue`.
- Stage moves: at most ONE stage up per trend per day, on new independent evidence.
  21+ days quiet → `dormant`.
- `observation_queue` maintenance every run: add weak signals, promote those clearing the
  bar, burn down to ~25 (resolve oldest with a one-line reason; never silently delete).
- Append one dated line to `logs/source_rotation.md`. Update "Last updated" in TRENDS.md.
- Regenerate `README.md` from the ledger in the SAME commit (`render-dashboard` skill).

## 5. Study picks
Select 0–2 items a red teamer should know this week (tool, technique writeup, CVE, paper).
Trend bar does not apply; evidence rules do. Add to `study_shelf` (newest first).

## 6. Write the daily report
Create `reports/YYYY-MM-DD.md` (under ~60 lines): ledger changes; Top 3 of the day
(one line + link each); study picks; Next (what tomorrow should check first).

## 7. Persist
- `git add -A` && commit `radar: daily update YYYY-MM-DD`.
- `git push origin HEAD:main`. If rejected: retry once after `git pull --rebase origin main`.
  Never force-push.

## Failure modes
- `TRENDS.md` missing/malformed → restore latest valid from git history, document repair.
- No web access → write a report noting the outage, make no ledger changes.
