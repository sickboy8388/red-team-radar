# Red Team Radar

Persistent situational awareness for offensive-security operators. Autonomous tracker of the active frontier: tools, releases, techniques, research, and advisories on Active Directory, C2/evasion, web/API/cloud, exploitable CVEs, and threat TTPs.

![trends](https://img.shields.io/badge/trends-12-3266ad?style=flat-square)
![seed](https://img.shields.io/badge/seed-6-0969da?style=flat-square)
![dormant](https://img.shields.io/badge/dormant-6-6c757d?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-11-ffc90e?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--16-2f9e44?style=flat-square)

---

## Since last scan (2026-10-15 → 2026-10-16)

- **Quiet day: no new blog posts** — All primary blogs dormant since Oct 14. No new on-axis offensive-security research published Oct 15-16.
- **6 new CRITICAL CVEs from GHSA Oct 15** — Infrastructure/cloud-focused: Podman sandbox-bypass, KEDA K8s privilege-escalation, Argo CD restriction-bypass, TanStack Router XSS, Dgraph DoS, Vitess XSS. Single-vendor; limited initial-access relevance; no trend bar clearance.
- **Observation queue stable** — 11 queued items (Windows zero-day CVE-2026-96951, WordPress plugin RCEs, Samsung command injection, TP-Link Kasa auth bypass, Collabora Online, Atlassian file-read, F5 heap-overflow) all remain single-vendor, awaiting independent verification.
- **5 existing seed trends stable** — N-able, Citrix, FortiMail, Kerberos relay, PaperCut show no new evidence Oct 16. 6 dormant trends unchanged.
- **No new tool releases** — BloodHound v9.8.0 (Oct 7), Sliver v1.7.7 (Sep 3) remain latest. No discovery-topic repos created Oct 15-16 meeting >50-star criteria.

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

- **BloodHound CE** v9.8.0 (Oct 7, 2026) — [SpecterOps/BloodHound](https://github.com/SpecterOps/BloodHound) — Active Directory attack-path analysis with XSS hardening (CVE-2026-67213 fix).
- **Sliver C2** v1.7.7 (Sep 3, 2026) — [BishopFox/sliver](https://github.com/BishopFox/sliver) — Golang command-and-control framework with OPFOR tradecraft.
- **impacket** 0.9.20+ (Aug 2026+) — [fortra/impacket](https://github.com/fortra/impacket) — Windows/SMB/Active Directory toolkit.
- **Nuclei** v3.11.0+ — [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) — Template-driven scanner (enforces template signing, breaking change for unsigned JS protocols).
- **Certipy** (active maintenance) — [ly4k/Certipy](https://github.com/ly4k/Certipy) — AD CS enumeration and exploitation automation.
- **NetExec** (active maintenance) — [Pennyw0rth/NetExec](https://github.com/Pennyw0rth/NetExec) — Network enumeration and exploitation framework.
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
