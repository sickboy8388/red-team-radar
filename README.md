# Red Team Radar

Autonomous tracker of the offensive-security frontier — tools, releases, techniques, research and advisories. Single source of truth: [TRENDS.md](TRENDS.md).

![trends](https://img.shields.io/badge/trends-10-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-3-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--09-2f9e44?style=flat-square)

---

## Since last scan (2026-10-07)

- **CVE-2026-87902** (WordPress path traversal → conditional RCE, CVSS pending): Unauthenticated path traversal in WordPress Core page-template resolution; under specific theme/server conditions allows inclusion of readable local PHP files outside active theme directories, escalating to RCE via `pearcmd.php` or similar targets. 4+ vendor sources (Safe Security, Indusface, Kaspersky, Penligent), active exploitation within hours of disclosure (Oct 8-9). [Safe Security analysis](https://safe.security/).
- **Existing seed trends stable:** N-able N-central, Citrix NetScaler (CVE-2026-88771/88772), FortiMail, Kerberos relay via DNS CNAME—all from Oct 3 scans, no new evidence.
- **Primary blog landscape dormant:** All 13 tracked sources reachable (HTTP 200); no new posts since Oct 7 (most recent: SpecterOps AWSHound Aug 20, watchTowr Citrix research Aug 14–15).
- **Tool releases:** No new releases since Oct 3. Latest: BloodHound v9.6.0 (Aug 18), Sliver v1.7.7 (Sep 3).
- **Coverage:** 13/13 primary blogs checked; GHSA web UI functional (API still 403 session-scoped); no access blockers.

---

## Trends

**seed 4 · dormant 6** — No new trends seeded this scan; existing seed trends unchanged since Oct 3.

| Trend | Stage | Latest signal |
|-------|-------|---------------|
| [Kerberos relay via DNS CNAME (CVE-2026-20929)](/TRENDS.md#id-identity-kerberos-relay-dns-cname-001--kerberos-relay-via-dns-cname-abuse-cve-2026-20929) | seed | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](/TRENDS.md#id-initial-access-fortimail-001--fortinet-fortimail-pre-auth-arbitrary-file-write-cve-2026-104286) | seed | [2026-10-03](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](/TRENDS.md#id-initial-access-citrix-netscaler-001--citrix-netscaler-adcgateway-pre-auth-rce-cve-2026-8877188772) | seed | [2026-10-03](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](/TRENDS.md#id-initial-access-nable-ncentral-001--n-able-n-central-pre-auth-rce-cve-2026-86218) | seed | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Nightmare Eclipse: Windows Defender/BitLocker zero-day research](/TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderbitlocker-zero-day-research-campaign) | dormant | [2026-07-31](https://fortifiedhealthsecurity.com/) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](/TRENDS.md#id-initial-access-oracle-peoplesoft-001--oracle-peoplesoft-unsafe-deserialization-rce-cve-2026-35273) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](/TRENDS.md#id-initial-access-sonicwall-sma-001--sonicwall-sma1000-ssrf--rce-exploitation-cve-2026-154091541 0) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Entra ID SyncJacking & Conditional Access Bypass](/TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |
| [WSUS / Windows Update Server RCE exploitation](/TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | dormant | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) |
| [CertiGhost AD CS DC-impersonation (CVE-2026-54121)](/TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | dormant | [2026-08-06](https://www.nextron-systems.com/) |

---

## Tools & releases

- **BloodHound** — v9.6.0 (2026-08-18) — [SpecterOps/BloodHound](https://github.com/SpecterOps/BloodHound)
- **Sliver** — v1.7.7 (2026-09-03) — [BishopFox/sliver](https://github.com/BishopFox/sliver)
- **NetExec** — (no recent releases tracked) — [Pennyw0rth/NetExec](https://github.com/Pennyw0rth/NetExec)
- **Certipy** — (no recent releases tracked) — [ly4k/Certipy](https://github.com/ly4k/Certipy)
- **Nuclei** — v3.11.0 (2026-07-06) — [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei)
- **impacket** — (no recent releases tracked) — [fortra/impacket](https://github.com/fortra/impacket)

---

## Worth studying

- [Return of the Cookie Monster](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) (SpecterOps, 2026-08-13) — Authenticated browser session compromise via Chrome DevTools Protocol (CDP); post-exploitation session hijacking despite modern protections. Web/evasion axis.
- [Attack of The Extensions](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) (SpecterOps, 2026-08-13) — Chromium extensions as persistent C2 infrastructure; silently install and serve command-and-control on compromised systems. C2/evasion axis.
- [CRLF-Powered Desync Attacks](https://portswigger.net/research/crlf-powered-desync-attacks) (PortSwigger Research, 2026-08-05) — HTTP/2-specific desynchronization attack via CRLF injection in header values; request smuggling and cache poisoning. Web/API axis.

(Older picks on [study_shelf](TRENDS.md#study_shelf); cap: 0–2 per day)

---

## Links

- [TRENDS.md](TRENDS.md) — ledger (single source of truth)
- [Observation queue](TRENDS.md#observation_queue) — below-bar signals awaiting verification
- [Reports](reports/) — daily & weekly snapshots
- [Latest daily report](reports/2026-10-09.md) — today's scan
- [Sources](SOURCES.md) — registered primary feeds and discovery topics
- [Logs](logs/source_rotation.md) — per-run coverage & access status

---

*Red Team Radar — autonomous offensive-security frontier tracker. Updated: 2026-10-09.*
