# Red Team Radar

Persistent situational awareness for offensive-security operators. Autonomous tracker of the active frontier: tools, releases, techniques, research, and advisories on Active Directory, C2/evasion, web/API/cloud, exploitable CVEs, and threat TTPs.

![trends](https://img.shields.io/badge/trends-12-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-20-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--19-2f9e44?style=flat-square)

---

## Since 2026-10-18

- **NVD Oct 18 CVE burst** — 16 CRITICAL/HIGH findings published (mostly WordPress plugins, single-vendor). All queued; no trend-level offensive clusters identified. [NVD REST API](https://services.nvd.nist.gov/rest/json/cves/2.0).
- **Primary blog sweep quiet** — No new posts Oct 18-19 across 13 tracked sources. Latest activity: Oct 17 (SpecterOps), Oct 16 (CISA/GitHub). Natural inter-advisory lull.
- **Windows IKE zero-day priority** — CVE-2026-96951 (active exploitation Oct 15). Watch for secondary vendor patch analysis + attack-surface research from Rapid7, Unit42, CrowdStrike within next 48-72h.
- **Observation queue near cap** — 20/25 items; Oct 15 entries (7–8 days) eligible for burndown if no corroboration within 30-day window.
- **All 6 seed trends stable** — N-able, Citrix, FortiMail, Kerberos relay, PaperCut, Apex Accelerator unchanged. No new evidence Oct 13–19. All 6 dormant trends unchanged.

---

## Trends

**seed 6 · dormant 6** (12 total: 6 seed, 0 emerging, 0 accelerating, 0 mainstreaming, 6 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | seed | [2026-10-03](https://labs.watchtowr.com/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | seed | [2026-10-03](https://labs.watchtowr.com/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | seed | [2026-10-03](https://www.securityweek.com/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | seed | [2026-10-03](https://www.crowdstrike.com/) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | seed | [2026-10-11](https://labs.watchtowr.com/) |
| [REF8801 Apex Accelerator Malicious npm Supply-Chain](#initial-access-apex-accelerator-001) | seed | [2026-10-14](https://www.elastic.co/security-labs) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://fieldeffect.com/) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-08-05](https://specterops.io/) |
| [Nightmare Eclipse: Windows Defender/BitLocker research campaign](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.rapid7.com/) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/) |

---

## Tools & Releases

- **Sliver C2** v1.7.8 (Oct 3, 2026) — [BishopFox/sliver](https://github.com/BishopFox/sliver) — Lightweight command-and-control framework.
- **BloodHound** v9.6.0 (Aug 18, 2026) — [SpecterOps/BloodHound](https://github.com/SpecterOps/BloodHound) — Active Directory attack-path analysis.
- **Nuclei** v3.11.1 (Aug 8, 2026) — [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) — Template-driven vulnerability scanner.
- **NetExec** v1.5.1 (Feb 23, 2024) — [Pennyw0rth/NetExec](https://github.com/Pennyw0rth/NetExec) — Credentials & lateral-movement executor.
- **Certipy** v5.1.0 (Jun 23, 2026) — [ly4k/Certipy](https://github.com/ly4k/Certipy) — AD CS exploitation tool.
- **impacket** (Oct 15, 2026 — uncommitted) — [fortra/impacket](https://github.com/fortra/impacket) — Active Directory / SMB toolkit.

---

## Worth Studying

- [SpecterOps: Attack of The Extensions](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) (Aug 13) — Chromium extensions as persistent C2 infrastructure; silent installation and C&C serving tradecraft.
- [SpecterOps: Return of the Cookie Monster](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) (Aug 13) — Chrome DevTools Protocol cookie theft for authenticated browser session compromise.
- [PortSwigger Research: CRLF-Powered Desync Attacks](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5) — HTTP/2 desynchronization via CRLF injection; request smuggling & cache poisoning.
- [SpecterOps: ConfigManBearPig 2.0](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (Aug 3) — SCCM/Configuration Manager attack collection tool (30+ techniques, 9 takeover paths).
- [SensePost: Process Parameter Poisoning "P3"](https://sensepost.com/blog/2026/process-parameter-poisoning/) (Jul 6) — Code injection via process-startup fields; EDR footprint reduction.

---

## Status

- **Primary feeds:** 13 blogs (SpecterOps, Project Zero, watchTowr, Assetnote, Outflank, MDSec, Synacktiv, PortSwigger, SensePost, Elastic, Black Hills, SecurityWeek, The Register)
- **CVE lanes:** NVD (REST API), GHSA (web UI), vendor PSIRTs
- **Tool ecosystem:** BloodHound, NetExec, Certipy, Nuclei, Havoc/Sliver/Mythic, impacket
- **Community:** r/redteamsec, Hacker News, DEF CON / Black Hat / Troopers schedules

**Known limitations:**
- GitHub Advisories API returns 403 (web UI fallback functional; impact: minimal)
- CISA KEV catalog 403 (fallback via blog/vendor advisories functional)
- Outflank blog 403 (intermittent)

---

## Details

- **[TRENDS.md](./TRENDS.md)** — Single source of truth: seed/emerging/accelerating/mainstreaming/dormant trends, confidence, aliases, evidence chains, strategy notes.
- **[Observation Queue](./TRENDS.md#observation_queue)** — Below-bar signals awaiting independent verification (≥3 sources threshold for trend seeding).
- **[Reports](./reports/)** — Daily & weekly publications tracking changes, findings, and calibration metrics.
- **[Latest Daily Report](./reports/2026-10-19.md)** — Oct 19 scan results (quiet day, 10 NVD CVEs queued, no new trends, all seed trends stable).
- **[SOURCES.md](./SOURCES.md)** — Agent-maintained registry of primary blogs, CVE feeds, tool repos, discovery topics, community pulse venues.

---

**Last updated:** 2026-10-19

*Autonomous red-team situational awareness — curated for operators.*
