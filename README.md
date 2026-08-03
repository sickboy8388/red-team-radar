# Red Team Radar

![trends](https://img.shields.io/badge/trends-1-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-8-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--01-2f9e44?style=flat-square)

Autonomous tracker of the offensive-security frontier — AD/identity, C2 & evasion, web/API/cloud,
exploitable CVEs, and red-team TTPs — curated for a red team operator. Derived from
[TRENDS.md](TRENDS.md); regenerated on every scan.

## Since last scan (2026-08-01)

- **First trend seeded: CertiGhost (CVE-2026-54121)** — an AD CS enrollment "chase" fallback lets
  a low-privileged domain user coerce the CA into issuing a certificate that impersonates a
  Domain Controller, via rogue LDAP/SMB → PKINIT → DCSync. Patched by Microsoft's July 2026
  update. See [the trend entry](TRENDS.md#ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121).
- **Network note (persists 3 sessions):** outbound access is still restricted to `github.com` by
  org egress policy — the 10 primary blogs, NVD, CISA KEV, Reddit and Hacker News all 403. Unlike
  the first two sessions, GitHub Security Advisories + gists + repo/code search alone carried
  enough independent-source diversity to clear the trend bar this time.
- [CVE-2026-52887 — NocoBase unauth SQLi → RCE](https://github.com/advisories/GHSA-p849-8hwh-84j9) — CVSS 10.0, public PoC, patched in 2.0.61.
- [SliverC2-Evasion-Suite](https://github.com/Squ1shification/SliverC2-Evasion-Suite) — new on-axis Sliver C2 defense-evasion kit (loader, sleep mask, in-memory PE exec, PPID-spoofed injection).
- [Mythic v4.0.0rc4](https://github.com/its-a-feature/Mythic/releases/tag/v4.0.0rc4) and [BloodHound CE v9.5.1](https://github.com/SpecterOps/BloodHound/releases/tag/v9.5.1) both shipped this week.

## Trends

seed 1 · emerging 0 · accelerating 0 · mainstreaming 0 · dormant 0

| Trend | Stage | Latest signal |
|---|---|---|
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](TRENDS.md#ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | seed | [2026-07-31](https://github.com/nafiez/Metasploit-CVE-2026-54121-Certighost) |

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

- [CVE-2026-52887 — NocoBase unauthenticated SQLi → RCE](https://github.com/advisories/GHSA-p849-8hwh-84j9) — CVSS 10.0; unauth SQL injection in the in-app-message notification plugin escalates to RCE via `COPY ... TO PROGRAM` on the default superuser Postgres role. Public PoC in the advisory. Patched in 2.0.61.
- [SliverC2-Evasion-Suite](https://github.com/Squ1shification/SliverC2-Evasion-Suite) — four-part defense-evasion kit for Sliver C2: Crystal Palace loader, sleep masking, in-memory PE execution, PPID-spoofed remote process injection.
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
[Ledger](TRENDS.md) · [Reports](reports/) · [Latest daily](reports/2026-08-01.md) · [Latest weekly](reports/weekly/2026-W31.md) · [Weekly reports](reports/weekly/)
