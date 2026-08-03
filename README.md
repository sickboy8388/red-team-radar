# Red Team Radar

![trends](https://img.shields.io/badge/trends-1-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-4-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--02-2f9e44?style=flat-square)

Autonomous tracker of the offensive-security frontier — AD/identity, C2 & evasion, web/API/cloud,
exploitable CVEs, and red-team TTPs — curated for a red team operator. Derived from
[TRENDS.md](TRENDS.md); regenerated on every scan.

## Since last scan (2026-08-02)

- **Network note (persists 3 sessions):** outbound access is still restricted to `github.com`
  by org egress policy — the 10 primary security blogs, NVD, CISA KEV, Reddit and Hacker News
  all 403. GitHub (tool releases, GHSA, code search) and server-side WebSearch work; WebSearch
  is used for queue corroboration only, never as evidence.
- [Ivanti Sentry pre-auth RCE (CVE-2026-10520, CVSS 10.0)](https://github.com/advisories/GHSA-v2vc-rgvq-3pwf) — resolved off a directly-opened GHSA advisory (blog still blocked); actively exploited, CISA KEV.
- [ADscan](https://github.com/ADScanPro/adscan) — new Linux-native CLI automating 104 AD attack-chain techniques including ADCS ESC1-16, in one Dockerized tool.
- No new trends seeded — the ≥3-independent-source bar needs blog diversity still unreachable under the egress block; see `TRENDS.md → strategy_notes`.

## Trends

_(empty — no item has cleared the ≥3-independent-source bar yet under the ongoing
egress block; see [`TRENDS.md`](TRENDS.md#strategy_notes) for why.)_

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

- [CVE-2026-10520 — Ivanti Sentry pre-auth RCE](https://github.com/advisories/GHSA-v2vc-rgvq-3pwf) — OS command injection, CVSS 10.0, actively exploited and in CISA KEV. Fixed in R10.5.2/R10.6.2/R10.7.1.
- [ADscan](https://github.com/ADScanPro/adscan) — Dockerized CLI consolidating 104 AD attack-chain techniques (Kerberoasting, ADCS ESC1-16, DCSync, BloodHound-compatible output) into one tool, no Windows infra needed.
- [CVE-2026-54680 — Logging Operator Fluentd-injection RCE](https://github.com/advisories/GHSA-mjqf-28ph-426h) — unescaped CRD strings injected into `fluent.conf`; a newline plants `@type exec` → RCE in the aggregator pod. Kubernetes/cloud.
- [CVE-2026-67428 — flyto2-core SSRF](https://github.com/advisories/GHSA-pgwh-4jj4-qm8v) — HTTP modules fetch client-controlled URLs without the SSRF guard their siblings apply → internal/cloud-metadata reach.

## How it works

A scheduled Claude Code routine runs a fixed prompt: *read `AGENTS.md`, then `routines/daily.md`,
and execute it.* The agent sweeps the sources in [`SOURCES.md`](SOURCES.md), routes new published
artifacts into the [trend ledger](TRENDS.md), writes a dated report under [`reports/`](reports/),
regenerates this page, and pushes to `main`. A weekly routine recalibrates trends and prunes.

This is a **radar**: it points to published research, tools, and advisories and summarizes their
significance. It tracks artifacts — it is not a runbook and stores no operational payloads.

---
[Ledger](TRENDS.md) · [Reports](reports/) · [Latest daily](reports/2026-08-02.md) · [Latest weekly](reports/weekly/2026-W31.md) · [Weekly reports](reports/weekly/)
