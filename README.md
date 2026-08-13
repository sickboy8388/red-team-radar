# Red Team Radar

Persistent state for the offensive-security frontier — tools, releases, techniques, research and advisories — curated for red team operators. Track published artifacts and situational awareness signals.

![trends](https://img.shields.io/badge/trends-4-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-26-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--13-2f9e44?style=flat-square)

---

## Since last scan (2026-08-12)

- [**Windows zero-day in active North Korean nation-state campaigns**](https://www.securityweek.com/) — Concurrent with Patch Tuesday (Aug 12); enables full system compromise and ForestTiger backdoor deployment. CVE ID pending; awaiting security vendor corroboration.
- [**Cisco Secure Firewall zero-day (CVE-2026-20349)**](https://www.securityweek.com/) — Unauthenticated remote DoS on ASA/FTD devices; active wild exploitation observed. Critical for remote defense infrastructure.
- [**LiteLLM supply-chain compromise**](https://www.securityweek.com/) — 2,500+ organizations impacted via Trivy hack; information-stealing malware distributed. Awaiting primary PSIRT/threat intelligence vendor confirmation.
- **BloodHound RC activity**: v9.6.0-rc3 (2026-08-12), rc2/rc1 (2026-08-10) — three new releases tracking development velocity toward stable v9.6.
- **No new trends seeded**: CertiGhost (emerging, 8 days quiet), WSUS (seed, 8 days quiet), Entra SyncJacking (seed, 7 days quiet), Nightmare Eclipse (emerging, historical) remain unchanged. Dormancy watch for CertiGhost: 2026-08-21.

---

## Trends

**Status tally:** emerging 2 · seed 2

| Trend | Stage | Latest signal |
|-------|-------|---|
| [Nightmare Eclipse Windows zero-day research](TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderblockerbitlocker-zero-day-research-campaign) | emerging | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) — 9 PoC exploits; LegacyHive hive-mounting LPE |
| [CertiGhost AD CS DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | emerging | [2026-08-06](https://fieldeffect.com/) — FieldEffect DC impersonation analysis |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis re-confirmation & guidance |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | seed | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) — SpecterOps comprehensive chain writeup |

---

## Worth studying

Current study shelf — technique writeups, novel primitives, and published research of immediate red-team relevance:

- [**Elastic: Living off the coding agent**](https://www.elastic.co/security-labs) (Aug 7, 2026) — LaunchAgent + reverse-tunnel abuse for autonomous agent C2 persistence; detection evasion in real-time.
- [**Elastic: npm cooldown removals**](https://www.elastic.co/security-labs) (Aug 7, 2026) — Supply-chain attack detection via npm metadata manipulation.
- [**PortSwigger: CRLF-Powered Desync Attacks**](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5, 2026) — HTTP/2 desynchronization via header CRLF injection; request smuggling & cache poisoning.
- [**SpecterOps: ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (Aug 3, 2026) — SCCM/Configuration Manager attack-collection tool; 30+ techniques, 9 takeover paths.
- [**SensePost: Process Parameter Poisoning**](https://sensepost.com/blog/2026/process-parameter-poisoning/) (Jul 6, 2026) — Novel injection primitive using `CreateProcessW` + thread-context manipulation; EDR evasion.
- [**ADscan**](https://github.com/ADScanPro/adscan) (2026) — Linux-native AD attack-chain consolidation; 104 techniques; Docker-based, no Windows infra required.
- [**SpecterOps: Mythic 4.0.0 public beta**](https://specterops.io/blog/2026/08/04/introducing-mythic-4-0-0/) (Aug 4, 2026) — C2 framework release.

[See full study shelf →](TRENDS.md#study_shelf)

---

## Tools & releases

Latest tracked releases (checked 2026-08-13):

- **BloodHound** v9.6.0-rc3 (Aug 12, 2026) — Three RC releases tracking development toward stable v9.6; new API endpoints, accessibility improvements, webhook integration
- **Mythic** v4.0.0 public beta (Aug 4, 2026) — C2 framework
- **Nuclei** v3.11.0 (July 6, 2026) — JavaScript-protocol template signing enforcement (breaking change)
- **Sliver** v1.7.3 (Feb 2026)
- **NetExec**, **Certipy**, **impacket** (pre-2026, no recent updates)

---

## Watchlist & queue

[26 below-bar items in observation_queue](TRENDS.md#observation_queue) — awaiting 2nd independent source, trend-bar evidence, or burndown by age.

**Escalated today (nation-state & infrastructure attacks):**
- **Windows zero-day in North Korean campaigns** (CVE ID pending; enables ForestTiger backdoor deployment)
- **Cisco Secure Firewall CVE-2026-20349** (unauthenticated RCE; active wild exploitation; critical for remote defense)
- **LiteLLM supply-chain compromise** (2,500+ organizations; Trivy hack → information-stealing malware)

**Multi-vendor coverage ongoing:**
- **Microsoft August 2026 Patch Tuesday** (400+ CVEs, 3 zero-days; Qualys, CrowdStrike, ZDI, Talos, Rapid7 analysis)
- **TeamCity CVE-2026-63077** (6 independent sources; watch for attack-chain research)
- **Langflow CVE-2026-9198** (5 independent sources; watch for post-compromise analysis)

**Single-vendor awaiting secondary coverage:**
- **CodeIgniter 4 cluster** (3 CRITICAL/HIGH, Aug 7)
- **GitPython batch** (5 HIGH, Aug 7)
- **CHAINDROP npm worm** (400+ packages, 1.3B downloads)
- **Nuxt 6-CVE cluster** (RCE, auth bypass, cache disclosure)
- **rclone batch** (command execution, auth bypass, path traversal)

---

## Resources

- **[TRENDS.md](TRENDS.md)** — full ledger
- **[Observation queue](TRENDS.md#observation_queue)** — 26 items awaiting promotion or burndown
- **[Reports](reports/)** — daily & weekly recalibrations
- **[Latest report](reports/2026-08-13.md)** — daily summary for 2026-08-13
- **[Latest weekly](reports/weekly/2026-W33.md)** — weekly recalibration for 2026-W33
- **[Source registry](SOURCES.md)** — primary feeds & discovery lanes

---

*Red Team Radar tracks and points to published offensive-security artifacts. It is a tracker, not a runbook — links only, no operational payloads.*
