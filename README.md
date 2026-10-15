# Red Team Radar

Persistent situational awareness for offensive-security operators. Autonomous tracker of the active frontier: tools, releases, techniques, research, and advisories on Active Directory, C2/evasion, web/API/cloud, exploitable CVEs, and threat TTPs.

![trends](https://img.shields.io/badge/trends-12-3266ad?style=flat-square)
![seed](https://img.shields.io/badge/seed-6-0969da?style=flat-square)
![dormant](https://img.shields.io/badge/dormant-6-6c757d?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-11-ffc90e?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--15-2f9e44?style=flat-square)

---

## Since last scan (2026-10-14 → 2026-10-15)

- **Windows IKE zero-day CVE-2026-96951** — Microsoft Patch Tuesday (Oct 12) zero-day RCE with active exploitation reported. SecurityWeek Oct 14 coverage. [SecurityWeek](https://www.securityweek.com/)
- **Cisco email system zero-day** — New pre-auth RCE "make-me-root" email bug exploited in the wild. The Register Oct 14 coverage. [The Register](https://www.theregister.com/)
- **6 new single-vendor CVEs queued** — Collabora Online (actively exploited), WordPress plugin RCEs (Printcart/AGE-GATE/Snazzy file upload chains), Samsung QA-Board command injection, TP-Link Kasa adjacent-network auth bypass (24 models). All await independent security researcher coverage.
- **Existing seed trends stable** — N-able, Citrix, FortiMail, Kerberos relay, PaperCut show no new evidence Oct 14-15. All 6 dormant trends unchanged.
- **No new tool releases** — No discovery-topic repos created Oct 14-15 meeting >50-star criteria. BloodHound v9.6.0 (Aug 18) and Sliver v1.7.7 (Sep 3) remain current.

---

## Trends

**seed 6 · dormant 6**

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

- **BloodHound CE** v9.6.0 (Aug 18, 2026) — [SpecterOps/BloodHound](https://github.com/SpecterOps/BloodHound) — Active Directory attack-path analysis (XSS fix CVE-2026-67213 in rc4+).
- **Sliver C2** v1.7.7 (Sep 3, 2026) — [BishopFox/sliver](https://github.com/BishopFox/sliver) — Lightweight command-and-control framework.
- **impacket** 0.9.20 (Aug 2026) — [fortra/impacket](https://github.com/fortra/impacket) — Active Directory / SMB toolkit.
- **Nuclei** (projectdiscovery/nuclei) — Template-driven vulnerability scanner (no recent release this period).
- **Certipy** (ly4k/Certipy) — AD CS exploitation tool (no recent release this period).
- **NetExec** (Pennyw0rth/NetExec) — Credentials & lateral-movement executor (no recent release this period).

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
- **[Latest Daily Report](./reports/2026-10-15.md)** — Oct 15 scan results (no new trends, 6 new CVEs queued, Windows/Cisco zero-days).
- **[SOURCES.md](./SOURCES.md)** — Agent-maintained registry of primary blogs, CVE feeds, tool repos, discovery topics, community pulse venues.

---

**Last updated:** 2026-10-15

*Autonomous red-team situational awareness — curated for operators.*
