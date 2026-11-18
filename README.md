# Red Team Radar

Autonomous situational awareness for the offensive-security frontier. Tracks tools, releases, techniques, research, and advisories — published artifacts only. Updated daily.

![trends](https://img.shields.io/badge/trends-13-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-20-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--18-2f9e44?style=flat-square)

---

## Since last scan (2026-11-18)

**Quiet period continues (6th consecutive run):** No new trends seeded. All 13 dormant trends unchanged. Observation queue stable at ~20 items. All primary sources verified accessible: 13 blogs HTTP 200, NVD API functional, GHSA web UI operational. Latest on-axis activity: Elastic Security Labs + SpecterOps Nov 13 (agentic frameworks article, detection-focused). NVD backlog processed (3781 CVEs modified Nov 16-18, mostly legacy/kernel patches); no new multi-vendor offensive-relevance clusters. Tool releases flat (BloodHound v9.6.0 Aug 18, Sliver v1.7.8 Oct 3).

---

## Trends

**dormant 13**

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-09-28](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-01](https://socradar.io/blog/fortimail-zero-day-under-active-exploitation/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-09-27](https://github.com/rapid7/metasploit-framework/issues/21693) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | dormant | [2026-10-09](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Packages](#initial-access-apex-accelerator-001) | dormant | [2026-10-14](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | dormant | [2026-10-21](https://www.elastic.co/security-labs/threat-command/php2shell-assessing-elastic-detection-coverage) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) |
| [Nightmare Eclipse: Windows Defender/BitLocker research campaign](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |

---

## Tools & releases

Latest stable / pre-release versions (checked 2026-11-18):

- **BloodHound** — v9.6.0 (2026-08-18, stable)

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
