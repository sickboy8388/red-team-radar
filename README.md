# Red Team Radar

Autonomous situational awareness for the offensive-security frontier. Tracks tools, releases, techniques, research, and advisories — published artifacts only. Updated daily.

![trends](https://img.shields.io/badge/trends-14-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-31-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--13-2f9e44?style=flat-square)

---

## Since last scan (2026-11-11)

- **PHP2Shell promoted to dormant:** [PHP2Shell RCE](TRENDS.md#id-web-php2shell-001--php2shell-rce-cve-2026-109618109619) seed trend reaches 22 days quiet (last evidence Oct 22), exceeding the 21-day dormancy threshold. Now dormant (dormancy_entered 2026-11-13).

- **BloodHound v9.10.0-rc:** [New ESC11/ESC16 ADCS attack-surface detection](https://github.com/SpecterOps/BloodHound/releases/tag/v9.10.0-rc1) + graph export (PNG/JPEG/SVG) + Prometheus metrics (Nov 9-12 pre-release). Stable v9.9.2 also released Nov 6. AD/identity axis — direct offensive-capability expansion for AD Certificate Services enumeration.

- **Observation queue burndown:** 5 items removed (Oct 14-15 era + WordPress plugins cluster + Windows IKE + Samsung QA-Board; all single-vendor, 25+ days, low offensive relevance). Queue reduced to ~20 active items (under cap).

- **Quiet period continues:** 2-day gap (Nov 11→13) produces no new trends. Barracuda Email Gateway CVE (watchTowr Nov 5, single-vendor) remains queued pending secondary coverage.

- **Trends stable:** 13 dormant (now includes PHP2Shell), 0 accelerating, 0 emerging, 1 seed (none). No new evidence for any trend.

---

## Trends

**dormant 13** (14 total: 0 seed, 0 emerging, 0 accelerating, 13 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://www.nextron-systems.com/) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-09-08](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-09-29](https://labs.watchtowr.com/here-we-go-again-citrix-netscaler-dtls-preauth-memory-overflow-cve-2026-88772/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-01](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | dormant | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Supply-Chain](#initial-access-apex-accelerator-001) | dormant | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | dormant | [2026-10-22](https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619-php2shell) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Nightmare Eclipse: Windows Defender/BitLocker research campaign](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |

---

## Tools & releases

Latest stable / pre-release versions (checked 2026-11-13):

- **BloodHound** — v9.10.0-rc1/rc2 (2026-11-09/12, pre-release) — **NEW ESC11/ESC16 ADCS attack-surface detection**, graph export, Prometheus metrics. Stable: v9.9.2 (2026-11-06).

- **NetExec** — v1.5.1 (2026-02-23) — SMB/AD exploitation framework

- **Sliver** — v1.7.8 (2026-10-03) — Command-and-control framework (C2)

- **Nuclei** — v3.11.0+ (2026-07-06+) — Vulnerability scanner templates (unsigned JavaScript templates now refused)

- **Certipy** — Active; AD Certificate Services enumeration/exploitation

- **impacket** — Active; network protocol and AD authentication libraries

---

## Worth studying

- [BloodHound v9.10.0-rc](https://github.com/SpecterOps/BloodHound/releases/tag/v9.10.0-rc1) — ESC11/ESC16 ADCS template-abuse detection (new attack surface), graph export, metrics. AD/identity axis.

- [adshell-rs v1.0.0](https://github.com/g0h4n/adshell-rs) — Interactive AD Shell & Attack Toolkit (Rust; RBCD, Shadow Credentials, DCSync grant, group manipulation, authentication modes).

- [ConfigManBearPig 2.0](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) — SCCM/Microsoft Configuration Manager attack-collection tool (30+ techniques across recon, credential theft, coercion, elevation, takeover).

---

## Ledger

- **Trends:** 14 total (0 seed, 0 emerging, 0 accelerating, 13 dormant)
- **Observation queue:** ~31 items (including audit trail of burndowns; ~20 active)
- **Last updated:** [2026-11-13](reports/2026-11-13.md)
- **Weekly report:** [2026-W46](reports/weekly/) (pending)

---

**See also:**
- [TRENDS.md](TRENDS.md) — Full ledger with evidence and stage transitions
- [Observation queue](TRENDS.md#observation_queue) — Below-bar signals awaiting corroboration
- [Daily reports](reports/) — Archive of all daily scans
- [Source registry](SOURCES.md) — Feeds and discovery topics

---

**Red Team Radar** is an autonomous tracker for the offensive-security frontier. Every claim links to a primary published artifact. No operational payloads or attack runbooks are included — only situational awareness.
