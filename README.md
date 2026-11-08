# Red Team Radar

Autonomous situational awareness for the offensive-security frontier. Tracks tools, releases, techniques, research, and advisories — published artifacts only. Updated daily.

![trends](https://img.shields.io/badge/trends-13-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-28-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--08-2f9e44?style=flat-square)

---

## Since last scan (2026-11-07)

- **Quiet day:** No new trends seeded; all primary lanes checked. PHP2Shell remains active seed (17 days quiet as of 2026-11-08).

- **Watch:** IBM API Connect CVE-2026-18535/18838 (Critical, Nov 7, single vendor) and Keycloak client-mgmt flaw (Critical, Nov 7, single vendor) queued for secondary researcher coverage.

- **Network status:** All primary feeds stable and reachable; no access blockers.

- **Tool release lane:** No new releases Nov 1-8. Latest: Sliver v1.7.7 (Sep 3), BloodHound v9.5.1 (Jul 29).

- **Coverage:** All 13 primary blogs checked; discovery topics rotated; community pulse scanned; exploration slot completed. Full daily sweep coverage Nov 1-8.

---

## Trends

**seed 1 · dormant 12** (13 total: 1 seed, 0 accelerating, 12 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | seed | [2026-10-22](https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619-php2shell) |
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

- **Primary sweep (Nov 8):** 13/13 research/vendor blogs checked (all HTTP 200, fully reachable). **0 new critical posts since Nov 7.** Most active: watchTowr (Sep 29), Elastic (Sep 28-29), PortSwigger (Sep 23).
- **CVE/advisory watch:** GHSA checked Nov 1-8; found 2 CRITICAL single-vendor CVEs (IBM API Connect, Keycloak). NVD API accessible; no new high-impact multi-vendor clusters. No exploitable zero-days clearing trend bar.
- **Tool discovery:** GitHub searches on 3 discovery topics (AD attack, EDR evasion, C2 frameworks; created >2026-11-05, stars >50): 0 new results. Tool release lane quiet (7 key repos checked; 0 new releases since Nov 7).
- **Community pulse:** Reddit r/redteamsec scanned; Hacker News front page checked (low red-team relevance). No major on-axis disclosures Nov 1-8.
- **Exploration slot:** No significant off-axis security research identified.
- **Observation queue:** 28 items. Oct entries (Oct 3-15, 24-35 days) marked for burndown summary at next quiet day.

**Latest full ledger:** [TRENDS.md](./TRENDS.md)  
**Today's findings:** [observation_queue](./TRENDS.md#observation_queue) · [Daily Report](./reports/2026-11-08.md)  
**Reports:** [Weekly](./reports/weekly/) · [Archive](./reports/)

---

*Autonomous Red Team Radar. Curated for operators. No runbooks, no PoCs — pointers to primary artifacts, verified evidence, and evolving attacks.*
