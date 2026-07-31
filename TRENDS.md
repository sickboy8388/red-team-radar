# Red Team Radar — Trend ledger

Single source of truth. The README and reports are derived from this file.
Last updated: 2026-07-31

Trend stages: `seed` → `emerging` → `accelerating` → `mainstreaming` → `dormant`.
Evidence line format: `date — primary URL — one line of context`. Max 10 per trend.

---

## trends

<!--
Seed the ledger by running the daily routine. Each trend block looks like:

### id: ad-adcs-001 — ADCS abuse & escalation
- stage: emerging
- confidence: medium
- last_evidence: YYYY-MM-DD
- aliases: [ESC1..ESC16, certificate abuse]
- notes: also-called "..."; scope note
- evidence:
  - YYYY-MM-DD — https://... — one line of context
-->

_(empty — first run will populate this)_

---

## observation_queue

<!-- Below-bar / unverified signals. Cap ~25. Line format:
- YYYY-MM-DD — https://... — context — [unverified | N groups so far] -->

- 2026-07-31 — https://labs.watchtowr.com/more-evidence-that-words-dont-mean-what-we-thought-they-meant-ivanti-sentry-pre-auth-os-command-injection-cve-2026-10520/ — Ivanti Sentry pre-auth OS command injection (CVE-2026-10520, CVSS 10.0); watchTowr published technical analysis, a PoC and a vuln-check script — [unverified, found via search, not opened this session]
- 2026-07-31 — https://specterops.io/blog/2026/03/24/attack-paths-dont-stop-at-identity-providers/ — SpecterOps/BloodHound Enterprise extends attack-path graphing to Okta/Entra/GitHub identity, beyond on-prem AD — [unverified, found via search, not opened this session]
- 2026-07-31 — https://www.outflank.nl/blog/2026/03/26/introducing-cobalt-strike-research-labs/ — Outflank + Fortra launch "Cobalt Strike Research Labs" (CS:RL), a research-tooling drop channel for Cobalt Strike (UDRLs, sleep masks, UDC2 channels) — [unverified, found via search, not opened this session]
- 2026-07-31 — https://github.com/D7EAD/mkPIVM — mkPIVM: generates polymorphic, position-independent VMs from x86/x64 shellcode for EDR evasion (421 stars, active) — [1 group so far, surfaced via GitHub discovery search, repo not opened]
- 2026-07-31 — https://github.com/JM00NJ/Phantom-Evasion-Loader — Phantom-Evasion-Loader: pure x64 ASM injection loader aimed at modern EDR/XDR (109 stars) — [1 group so far, surfaced via GitHub discovery search, repo not opened]
- 2026-07-31 — https://github.com/advisories/GHSA-xr9x-r78c-5hrm — (see study_shelf) also note GHSA listing flagged other high/critical advisories same window (Fluentd "Logging Operator" config-injection RCE, an SSRF/file-write/cred-leak chain in a project referred to as "Flyto2 Core") — exact GHSA IDs/URLs not yet pinned down — [unverified, needs a follow-up open of github.com/advisories to grab direct links]

---

## study_shelf

<!-- 0–2 per day, newest first. A single strong artifact qualifies (no trend bar). -->

- 2026-07-31 — https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0 — Nuclei now refuses to run unsigned JavaScript-protocol templates (breaking change, released 2026-07-06); if you maintain custom offensive nuclei templates using the `javascript:` protocol, they now need signing or they silently stop loading.
- 2026-07-31 — https://github.com/advisories/GHSA-xr9x-r78c-5hrm — CVE-2026-66066: Rails Active Storage arbitrary file read + RCE during variant processing, published 2026-07-30. Widely-deployed framework; check for it on any Rails target using Active Storage variants.

---

## strategy_notes

<!-- Dated coverage/scope corrections. Curator entries are never deleted. -->

- (curator) Initial scope per AGENTS.md: AD/identity, C2/evasion/initial-access,
  web/API/cloud, exploitable CVEs, TTP taxonomies.
- 2026-07-31 (agent) First run. This session's outbound network was restricted by
  org egress policy to `github.com` (+ raw/API subdomains) only — every non-GitHub
  fetch (all 10 primary blogs, NVD, CISA KEV, Reddit, HN) returned a policy 403 at
  the proxy. GHSA (github.com/advisories) and all tracked GitHub tool repos were
  reachable and swept normally; GitHub code/repo search covered the discovery lane.
  Because most primary-source diversity is blog-driven, no item could clear the
  3-independent-source trend bar today — the ledger stays trend-free by design, not
  by omission. Non-GitHub findings this run come from WebSearch snippets only and
  are queued `[unverified]`, per the "cite only URLs opened this session" rule; they
  need a direct open next time the network isn't restricted before they can count as
  evidence. If this scoping is intentional going forward, the routine's primary-sweep
  lane needs rethinking (mirror blogs via GitHub Pages repos where available, or
  accept a permanently GHSA+GitHub-only radar).
