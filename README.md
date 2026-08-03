# Red Team Radar

![trends](https://img.shields.io/badge/trends-0-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-6-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--03-2f9e44?style=flat-square)

Autonomous tracker of the offensive-security frontier — AD/identity, C2 & evasion, web/API/cloud,
exploitable CVEs, and red-team TTPs — curated for a red team operator. Derived from
[TRENDS.md](TRENDS.md); regenerated on every scan.

## Since last scan (2026-08-03 — weekly recalibration 2026-W32)

- **No new capture this week.** Zero daily reports ran between 2026-08-01 and 2026-08-03 (a
  scheduling/execution gap, not a network or curator issue), so the ledger, queue, and
  study_shelf are unchanged from 2026-W31. Recalibration was a no-op on trends.
- **Network note (persists 3 sessions):** the 10 primary security blogs, NVD, CISA KEV, and now
  even `github.com`'s own web UI (scoped to this repo this session) all 403 for this weekly run;
  `raw.githubusercontent.com` / `api.github.com` still answer. WebSearch remains queue-only,
  never evidence.
- Pinned two GHSA advisories the first daily run left unresolved (still the latest ledger state):
  [Logging Operator Fluentd-injection RCE (CVE-2026-54680)](https://github.com/advisories/GHSA-mjqf-28ph-426h)
  and [flyto2-core SSRF (CVE-2026-67428)](https://github.com/advisories/GHSA-pgwh-4jj4-qm8v).
- [Rails Active Storage RCE (CVE-2026-66066)](https://github.com/advisories/GHSA-xr9x-r78c-5hrm) — arbitrary file read + RCE in variant processing, published 2026-07-30.
- [Nuclei v3.11.0](https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0) — unsigned JavaScript-protocol templates are now refused at load time.

## Trends

_(empty — first run found no item clearing the ≥3-independent-source bar; see
[`TRENDS.md`](TRENDS.md#strategy_notes) for why.)_

## Tools & releases

| Tool | Latest release | Date |
|---|---|---|
| [BloodHound](https://github.com/SpecterOps/BloodHound) | [v9.5.1](https://github.com/SpecterOps/BloodHound/releases/tag/v9.5.1) | 2026-07-29 |
| [Mythic](https://github.com/its-a-feature/Mythic) | [v4.0.0rc4](https://github.com/its-a-feature/Mythic/releases/tag/v4.0.0rc4) | 2026-07-30 |
| [Nuclei](https://github.com/projectdiscovery/nuclei) | [v3.11.0](https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0) | 2026-07-06 |
| [Certipy](https://github.com/ly4k/Certipy) | [5.1.0](https://github.com/ly4k/Certipy/releases/tag/5.1.0) | 2026-06-23 |
| [impacket](https://github.com/fortra/impacket) | [0.13.1](https://github.com/fortra/impacket/releases/tag/impacket_0_13_1) | 2026-05-19 |
| [Sliver](https://github.com/BishopFox/sliver) | [v1.7.3](https://github.com/BishopFox/sliver/releases/tag/v1.7.3) | 2026-02-24 |
| [NetExec](https://github.com/Pennyw0rth/NetExec) | [v1.5.1](https://github.com/Pennyw0rth/NetExec/releases/tag/v1.5.1) | 2026-02-23 |
| [Havoc](https://github.com/HavocFramework/Havoc) | — | archived 2026-02-20, no releases |

## Worth studying

- [CVE-2026-54680 — Logging Operator Fluentd-injection RCE](https://github.com/advisories/GHSA-mjqf-28ph-426h) — unescaped CRD strings injected into `fluent.conf`; a newline plants `@type exec` → RCE in the aggregator pod. Kubernetes/cloud.
- [CVE-2026-67428 — flyto2-core SSRF](https://github.com/advisories/GHSA-pgwh-4jj4-qm8v) — HTTP modules fetch client-controlled URLs without the SSRF guard their siblings apply → internal/cloud-metadata reach.
- [Nuclei v3.11.0 — mandatory JS-template signing](https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0) — if you maintain custom nuclei templates on the `javascript:` protocol, they now need a signature or they stop loading.
- [CVE-2026-66066 — Rails Active Storage RCE](https://github.com/advisories/GHSA-xr9x-r78c-5hrm) — arbitrary file read + RCE via variant processing on any Rails app using Active Storage variants.

## How it works

A scheduled Claude Code routine runs a fixed prompt: *read `AGENTS.md`, then `routines/daily.md`,
and execute it.* The agent sweeps the sources in [`SOURCES.md`](SOURCES.md), routes new published
artifacts into the [trend ledger](TRENDS.md), writes a dated report under [`reports/`](reports/),
regenerates this page, and pushes to `main`. A weekly routine recalibrates trends and prunes.

This is a **radar**: it points to published research, tools, and advisories and summarizes their
significance. It tracks artifacts — it is not a runbook and stores no operational payloads.

---
[Ledger](TRENDS.md) · [Reports](reports/) · [Latest daily](reports/2026-07-31.md) · [Latest weekly](reports/weekly/2026-W32.md) · [Weekly reports](reports/weekly/)
