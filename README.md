# Red Team Radar

Autonomous situational awareness for the offensive-security frontier. Tracks tools, releases, techniques, research, and advisories — published artifacts only. Updated daily.

![trends](https://img.shields.io/badge/trends-11-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-25-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--23-2f9e44?style=flat-square)

---

## Since last scan (2026-11-23)

**Weekly recalibration: 5 dormant trends archived (45-day threshold); 3 supply-chain/Java trends seeded (Nov 19)** — Archived WSUS, Entra SyncJacking, SonicWall, Oracle PeopleSoft, Nightmare Eclipse (all entered dormancy 2026-10-03, now 50 days dormant). Queue burndown: 5 Oct-dated single-vendor CVEs removed (25-30 days old). Seeded agent-framework PyPI credential stealer (192K downloads, 4 vendors), Optimizely OPTIMJACK JavaScript injection (178+ orgs), Java4Shell OpenJDK pre-auth RCE (identity services). Supply-chain cluster stable; 8 dormant trends unchanged (28 days oldest, archival threshold ~2026-12-18 if no new evidence).

- **Primary blog sweep:** 13/13 sources checked. Most recent posts: SecurityWeek (Nov 21: FBI criminal database, Trump cyber director, China-linked AI agents), SpecterOps (Nov 19: FBI ARTEX), Elastic (Nov 20: OpenShift compliance).

- **CVE advisory watch:** GHSA check shows no new advisories from Nov 22. Most recent: 9 HIGH-severity single-vendor findings from Nov 20 (ait-gui, Budibase, Contao, Paymenter, git-lfs, aedes, svglib). No multi-vendor trend-bar hits.

- **Tool releases:** No new releases detected Nov 22. Most recent: BloodHound CE v9.10.1 (Nov 19), Sliver v1.7.9 (Oct 25).

- **Queue status:** Observation queue at 25-item cap (stable). Network access stable. 11/13 primary blogs + NVD + GHSA accessible. No new access blockers.

---

## Trends

**seed 3 · dormant 8**

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [Microsoft agent-framework PyPI Supply-Chain Attack](#initial-access-agent-framework-001) | seed | [2026-11-17](https://www.wiz.io/blog/malicious-version-of-microsofts-agent-framework-published-to-pypi) |
| [Optimizely Web Experimentation Supply-Chain Attack (OPTIMJACK)](#initial-access-optimizely-001) | seed | [2026-11-16](https://report.uri.report/2026/11/16/optimjack-the-optimizely-web-experimentation-incident) |
| [Java4Shell OpenJDK Base64 RCE (CVE-2026-114938)](#web-java4shell-001) | seed | [2026-11-18](https://blog.qualys.com/vulnerabilities-threat-research/2026/11/17/how-to-find-mitigate-and-patch-the-critical-java4shell-flaw-cve-2026-114938-now) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-09-28](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-01](https://socradar.io/blog/fortimail-zero-day-under-active-exploitation/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-09-27](https://github.com/rapid7/metasploit-framework/issues/21693) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | dormant | [2026-10-09](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Packages](#initial-access-apex-accelerator-001) | dormant | [2026-10-14](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | dormant | [2026-10-21](https://www.elastic.co/security-labs/threat-command/php2shell-assessing-elastic-detection-coverage) |

---

## Tools & releases

Latest stable / pre-release versions (checked 2026-11-19):

- **BloodHound** — v9.10.0 (2026-11-16, stable) [ADCS improvements: ESC14, trust paths; multi-destination pathfinding; graph export PNG/JPEG/SVG]

- **NetExec** — v1.5.1 (2026-02-13)

- **Sliver** — v1.7.8 (2026-10-03)

- **Nuclei** — v3.11.0 (2026-07-06)

- **Certipy** — v5.1.0

- **impacket** — 0.13.1

---

## Worth Studying

None this run. Quiet period (6th consecutive day with no new trends seeded).

---

## Ledger

- **Trends:** 13 dormant (0 accelerating, 0 emerging, 0 seed)
- **Observation queue:** ~20 items pending independent verification (cap ~25)
- **Last updated:** [2026-11-18](reports/2026-11-18.md) (daily)
- **Latest weekly:** [reports/weekly/](reports/weekly/)

---

**See also:**
- [TRENDS.md](TRENDS.md) — Full ledger with evidence and stage transitions
- [Observation queue](TRENDS.md#observation_queue) — Below-bar signals awaiting corroboration
- [Daily reports](reports/) — Archive of all daily scans
- [Source registry](SOURCES.md) — Feeds and discovery topics

---

**Red Team Radar** is an autonomous tracker for the offensive-security frontier. Every claim links to a primary published artifact. No operational payloads or attack runbooks are included — only situational awareness.
