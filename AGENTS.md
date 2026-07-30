# Agent guide — Red Team Radar

Instructions for AI agents (and humans) working in this repository. Task-specific
instructions come from the session prompt; this file holds the invariants that apply
to every session.

## What this repo is

Persistent state for **Red Team Radar**, an autonomous tracker of the offensive-security
frontier — tools, releases, techniques, research and advisories — curated for a red team
operator. It is a RADAR (situational awareness): it tracks and points to *published*
artifacts. `TRENDS.md` is the single source of truth; the README and reports are derived
snapshots. History matters: never rewrite published history, never force-push.

## Scope (priority order)

1. **Active Directory / identity** — attack chains (Kerberos, ADCS, delegation, NTLM),
   tooling, detections to evade.
2. **C2, evasion & initial access** — C2 frameworks & releases, EDR/AV bypass research,
   loader/injection techniques, phishing/social-engineering research, payload delivery.
3. **Web / API / cloud** — appsec technique research, auth bypass, SSRF/deser, cloud &
   container (Azure/AWS/GCP/K8s) attack paths.
4. **Exploitable CVEs** — new CVEs/advisories with real offensive relevance (edge devices,
   VPN/firewall, AD, widely-deployed web software), especially with public PoC.
5. **TTP taxonomies** — MITRE ATT&CK updates, notable APT/threat-intel TTP writeups.

Do not limit yourself to these axes if you find something clearly more important.

## Hard rules (the constitution — never relax these)

- **Primary published sources only for EVIDENCE**, and only URLs actually opened this
  session: vendor/research security blogs, tool repos and their releases, CVEs/advisories
  (NVD, GHSA, vendor PSIRTs), conference material (DEF CON, Black Hat, Troopers), papers.
  Never SEO farms, never aggregators. Anything not opened is "unverified" → `observation_queue`.
- **Track, don't reproduce.** An evidence line is `date — primary URL — one line of context`
  (what it is, novelty, offensive impact); max 10 evidence items per trend. This radar points
  to artifacts and summarizes their significance — it is a tracker, **not a runbook**. Never
  paste operational payloads, exploit code, or step-by-step attack instructions into the
  ledger; link the primary source instead.
- **Published/disclosed only.** Track work that is publicly released or responsibly disclosed.
  The radar does not solicit, host, or hunt for non-public exploits or live targets — it is
  field awareness, not operations against any system or organization.
- **Social carve-out (intake only):** social/community sources (Reddit r/redteamsec, X,
  YouTube, forums, named blogs) are an INTAKE LANE ONLY — they may create unverified
  `observation_queue` items (promotable only after confirmation on a primary artifact) and
  feed the community-pulse note, but NEVER become trend evidence. Never name individuals.
- Never guess dates or invent URLs. Undated pages: "(undated, accessed YYYY-MM-DD)".
- **Trend bar:** ≥3 independent sources (different orgs/authors) + ≥1 concrete artifact
  (repo, release, CVE, paper, advisory). A single strong tool/paper is not a trend → `study_shelf`.
- Do not rename sections or restructure files. Everything in this repo is in English.

## File map

| Path | Contents | Edit policy |
|---|---|---|
| `TRENDS.md` | Trend ledger + `observation_queue`, `strategy_notes`, `study_shelf` | follow `ledger-update` skill |
| `SOURCES.md` | Agent-owned source registry | maintained by the radar itself |
| `README.md` | THE output surface — regenerate via `render-dashboard`; never edit by hand | fully derived |
| `reports/YYYY-MM-DD.md` | Daily reports | write once, never edit old ones |
| `reports/weekly/YYYY-Wnn.md` | Weekly reports | write once |
| `logs/source_rotation.md` | Append-only daily coverage log | append-only |
| `routines/*.md` | LIVE operating instructions | weekly amendments only |

## Tooling

- Web search: use the built-in web tools (search + fetch). If you have a Tavily key in
  `TAVILY_API_KEY`, prefer `tvly` (`pip install -q tavily-cli`) with `--include-domains`
  to cut noise; never print or commit the key. Fall back to built-in tools if it fails.
- Advisories: NVD (`https://services.nvd.nist.gov/rest/json/cves/2.0`), GHSA, vendor PSIRT
  feeds, repo release feeds (`<repo>/releases.atom`).

## Git conventions

- Commit messages: `radar: daily update YYYY-MM-DD`, `radar: weekly recalibration YYYY-Wnn`.
- Any commit that changes `TRENDS.md` must regenerate `README.md` in the SAME commit.
- Push to main: `git push origin HEAD:main`. If rejected, retry once after
  `git pull --rebase origin main`. Never force-push, never rewrite published history.

## Efficiency

Single-agent, one session per run. Triage then extract: read feeds/titles first, open the
full artifact only for genuinely new items. Read only the recent tail of long append-only logs.
