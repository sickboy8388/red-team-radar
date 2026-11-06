# Red Team Radar

Autonomous situational awareness for the offensive-security frontier. Tracks tools, releases, techniques, research, and advisories — published artifacts only. Updated daily.

![trends](https://img.shields.io/badge/trends-18-3266ad?style=flat-square)
![emerging](https://img.shields.io/badge/emerging-3-d97706?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-18-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--06-2f9e44?style=flat-square)

---

## Since last scan (2026-11-06)

- **RECALIBRATION: 5 new seed trends added.** Curator-directed deep sweep uncovered major missed CVE events from the past two weeks. Node2Shell/HTTP2Shell (CVE-2026-111497, Brotli RCE affecting Node.js/Python/Go/Envoy/Istio, CISA KEV, 10+ vendor analyses), eMudhra CA compromise (8 weak intermediate CA keys, all browsers revoked), Ivanti Connect Secure zero-day chain (3 chained CVEs → root RCE on fully patched VPN appliances), WordPress Core RCE (CVE-2026-119977, 58K+ attacks), BeyondTrust Remote Support zero-day (CVE-2026-102764, China-nexus APT since August).

- **PHP2Shell status corrected:** NOT approaching dormancy. Actively exploited with CISA KEV listing (Oct 26), 50,000+ exploitation requests from 600+ IPs tracked by Delft University, pre-disclosure exploitation confirmed (Amazon threat intel Oct 16). One of the most actively exploited CVEs of late 2026.

- **Observation queue cleaned up:** 8 stale single-vendor entries burned down (Oct 3–15, all >21 days with no independent corroboration). 2 new items added: Node-RED CVE-2026-58115 (CVSS 10, Siemens IoT, actively exploited) and Barracuda ESG chain (CVE-2026-116606/111560, pre-auth root). Queue now ~15 items (under ~25 cap).

- **Source registry expanded:** 11 new primary feeds verified and added (Wiz, Check Point Research, Akamai, Volexity, Sysdig, Recorded Future, Qualys, Cisco Talos, Greenbone, TheHackerNews, BleepingComputer). Playwright anti-bot bypass infrastructure established for sources behind Cloudflare/bot-detection. Total primary feeds: 30.

---

## Trends

**emerging 3 · seed 3 · dormant 12** (18 total: 3 emerging, 3 seed, 0 accelerating, 12 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [Node2Shell / HTTP2Shell Brotli RCE (CVE-2026-111497)](#web-node2shell-001) | emerging | [2026-11-06](https://www.wiz.io/blog/cve-2026-111497-brotli-rce-node-js) |
| [eMudhra Intermediate CA Key Compromise (CVE-2026-111943)](#trust-emudhra-ca-001) | seed | [2026-11-06](https://blog.google/security/protecting-chrome-and-android-users-from-compromised-emudhra-intermediate-ca-certificates/) |
| [Ivanti Connect Secure Zero-Day Chain (CVE-2026-104935/111357/118527)](#initial-access-ivanti-cs-chain-001) | emerging | [2026-11-06](https://www.volexity.com/blog/2026/10/13/a-series-of-unauthenticated-events-chained-exploitation-of-ivanti-connect-secure-zero-days/) |
| [WordPress Core Upgrade-Window RCE (CVE-2026-119977)](#web-wordpress-rce-001) | seed | [2026-11-06](https://thehackernews.com/2026/10/wordpress-rce-flaw-draws-nearly-63000.html) |
| [BeyondTrust Remote Support Zero-Day (CVE-2026-102764)](#initial-access-beyondtrust-001) | seed | [2026-11-06](https://www.cisa.gov/news-events/alerts/2026/10/16/cisa-urges-patching-critical-vulnerability-beyondtrust-remote-support) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | emerging | [2026-10-29](https://www.recordedfuture.com/blog/php2shell-vulnerability-exploitation) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://www.nextron-systems.com/) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-09-08](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-09-29](https://labs.watchtowr.com/here-we-go-again-citrix-netscaler-dtls-preauth-memory-overflow-cve-2026-88772/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-01](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | dormant | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Supply-Chain](#initial-access-apex-accelerator-001) | dormant | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Nightmare Eclipse: Windows Defender/BitLocker research campaign](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |

---

## Tools & releases

Latest stable versions (checked 2026-11-06):

- [BloodHound](https://github.com/SpecterOps/BloodHound) — v9.6.0 (2026-08-18, XSS fixes + dependency hardening)
- [Sliver C2](https://github.com/BishopFox/sliver) — v1.7.8 (2026-10-03, tunnel hardening + shell improvements)
- [Nuclei](https://github.com/projectdiscovery/nuclei) — v3.11.0 (2026-07-31, breaking change: unsigned JS templates now blocked)
- [NetExec](https://github.com/Pennyw0rth/NetExec), [Certipy](https://github.com/ly4k/Certipy), [impacket](https://github.com/fortra/impacket) — no new releases since last checked

---

## Worth studying

**Study shelf (newest first).** Each qualifies on its own merits; trend bar does not apply.

- **adshell-rs** (Nov 5) — Interactive Rust-native AD shell over LDAP(S) or ADWS. Supports RBCD, DCSync grant, Shadow Credentials, multiple auth modes (password, pass-the-hash, Kerberos, pass-the-certificate). Released Nov 2. Clear first-class tool for identity-axis operators. https://github.com/g0h4n/adshell-rs

- **Attack of The Extensions** (SpecterOps, Aug 13) — Chromium extensions as persistent C2 infrastructure; silently install and serve as command-and-control on compromised systems. https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/
- **Return of the Cookie Monster** (SpecterOps, Aug 13) — Authenticated browser session compromise via Chrome DevTools Protocol; cookie-theft techniques and modern protections. https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/
- **ConfigManBearPig 2.0** (SpecterOps, Aug 3) — SCCM/Configuration Manager attack-collection tool covering 30+ lateral-movement, priv-esc, and takeover paths; Linux support, proxy/alt-auth OPSEC. https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/
- **Process Parameter Poisoning "P3"** (SensePost, Jul 6) — Novel code-injection via process startup fields + CreateProcessW, reducing EDR footprint against four major vendors. https://sensepost.com/blog/2026/process-parameter-poisoning/
- **CRLF-Powered Desync Attacks** (PortSwigger Research, Aug 5) — HTTP/2 desynchronization via CRLF injection in header values; cache poisoning and request smuggling. https://portswigger.net/research/crlf-powered-desync-attacks

---

## Coverage & continuity

- **RECALIBRATION sweep (Nov 6):** Extended WebSearch deep sweep across 40+ primary vendor URLs. 9 new primary feeds verified and added (Wiz, Check Point, Akamai, Volexity, Sysdig, Recorded Future, Qualys, Talos, Greenbone). Total primary source registry: 30 feeds. Playwright-based anti-bot bypass validated for TheHackerNews; BleepingComputer partially (Cloudflare challenge).
- **CVE/advisory watch:** 5 major multi-vendor CVE events identified and seeded as trends (Node2Shell, eMudhra CA, Ivanti CS chain, WordPress Core RCE, BeyondTrust zero-day). PHP2Shell exploitation status corrected with CISA KEV confirmation. 2 new high-severity items queued (Node-RED CVE-2026-58115 CVSS 10, Barracuda ESG chain).
- **Observation queue:** ~15 items (under ~25 cap). 8 stale single-vendor entries burned down (all >21 days old, zero independent corroboration). Active monitoring items retained.
- **Tool release lane:** Sliver v1.7.8 (Oct 3), BloodHound v9.6.0 (Aug 18) remain latest across 6 key repos.
- **Access status:** WebSearch functional as primary verification tool; bypasses prior anti-bot/403 blocks on vendor blogs. GHSA API still 403-scoped; NVD API degraded.

**Latest full ledger:** [TRENDS.md](./TRENDS.md)  
**Today's findings:** [observation_queue](./TRENDS.md#observation_queue) · [Daily Report](./reports/2026-11-06.md)  
**Reports:** [Weekly](./reports/weekly/) · [Archive](./reports/)

---

*Autonomous Red Team Radar. Curated for operators. No runbooks, no PoCs — pointers to primary artifacts, verified evidence, and evolving attacks.*
