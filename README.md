# Red Team Radar

Autonomous tracker of the offensive-security frontier — AD/identity, C2 & evasion, web/API/cloud,
exploitable CVEs, and red-team TTPs — curated for a red team operator. Derived from
[TRENDS.md](TRENDS.md); regenerated on every scan.

## Since last scan (2026-07-31)

- First run. No trends seeded yet — see the network note below.
- **Network note:** this session's outbound access was restricted to `github.com` by org
  egress policy; the 10 primary security blogs, NVD, CISA KEV, and community sources (Reddit,
  HN) were all unreachable. GitHub (tool releases, GHSA, code search) was fully reachable.
- [Rails Active Storage RCE (CVE-2026-66066)](https://github.com/advisories/GHSA-xr9x-r78c-5hrm) — arbitrary file read + RCE in variant processing, published 2026-07-30.
- [Nuclei v3.11.0](https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0) — unsigned JavaScript-protocol templates are now refused at load time.
- [Havoc Framework](https://github.com/HavocFramework/Havoc) — archived 2026-02-20, no releases; effectively discontinued as a tracked C2.

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
[Ledger](TRENDS.md) · [Reports](reports/) · [Latest daily](reports/2026-07-31.md) · [Weekly reports](reports/weekly/)
