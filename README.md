# Red Team Radar

Autonomous situational awareness for the offensive-security frontier. Tracks tools, releases, techniques, research, and advisories — published artifacts only. Updated daily.

![trends](https://img.shields.io/badge/trends-14-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-30-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--05-2f9e44?style=flat-square)

---

## Since last scan (2026-11-05)

- **New AD attack tool:** [adshell-rs](https://github.com/g0h4n/adshell-rs) (v1.0.0 released Nov 2) — Interactive AD shell over LDAP(S)/ADWS written in Rust; supports RBCD, DCSync grant, Shadow Credentials, multiple auth modes. First new tool discovered this period. [Study pick.](./TRENDS.md#study_shelf)

- **Kyverno Critical policy bypasses:** [CVE-2026-122310](https://github.com/advisories/GHSA-4c7q-j33x-866w) (CVSS 9.4) and [4 supporting CVEs](https://github.com/advisories?query=is%3Areviewed+sort%3Aupdated-desc) (Nov 4-5 release) — Namespace-scoped users can escalate to cluster admin via Policy path traversal. Kubernetes/cloud axis. [Queued.](./TRENDS.md#observation_queue)

- **Community pulse quiet:** Reddit r/redteamsec 403 persistent. Hacker News security posts low red-team relevance. No new TTP names identified outside PHP2Shell tracking.

- **GitHub searches:** Kerberos relay, C2 frameworks, EDR evasion created >Nov 2 with >50 stars: 0 results. Broader search found adshell-rs (6 stars). GitHub search rate-limited mid-session.

- **Primary blogs:** No new posts since Nov 4 (quiet period continues). 11/13 blogs reachable; 2 degraded (Outflank 403, Google Project Zero safeguard).

---

## Trends

**seed 1 · emerging 1 · dormant 12** (14 total: 1 seed, 1 emerging, 0 accelerating, 0 mainstreaming, 12 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | seed | [2026-10-22](https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619-php2shell) |
| [ADCS abuse & escalation](#ad-adcs-001) | emerging | [2026-08-06](https://www.nextron-systems.com/) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://github.com/advisories/GHSA-64qv-2ffq-h4w6) |
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

Latest stable versions (checked 2026-11-05):

- [BloodHound](https://github.com/SpecterOps/BloodHound) — v9.6.0 (2026-08-18)
- [NetExec](https://github.com/Pennyw0rth/NetExec) — (no release data)
- [Sliver C2](https://github.com/BishopFox/sliver) — v1.7.8 (2026-10-03)
- [Certipy](https://github.com/ly4k/Certipy) — (no release data)
- [Nuclei](https://github.com/projectdiscovery/nuclei) — v3.11.0 (2026-07-06, breaking change: unsigned JS templates now blocked)
- [impacket](https://github.com/fortra/impacket) — (no release data)

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

- **Primary sweep:** 13/13 research/vendor blogs checked (11 open, 2 degraded: Outflank 403, Google Project Zero safeguard).
- **CVE/advisory watch:** NVD API degraded (parameter issue); GHSA accessible; CISA KEV 403 (low impact).
- **Tool discovery:** GitHub searches (created >2026-11-02, stars >50) completed on 2+ topics; 1 tool captured via broader search.
- **Community pulse:** Reddit 403 (persistent); Hacker News live feed accessible (low yield).
- **Observation queue:** 30 items (over ~25 cap). Oldest entries (Oct 3-6, ~32 days) overdue for burndown; Oct 14-15 entries (21 days) at threshold.

**Latest full ledger:** [TRENDS.md](./TRENDS.md)  
**Today's findings:** [observation_queue](./TRENDS.md#observation_queue) (30 items, 2 new Kyverno CVEs)  
**Reports:** [Daily](./reports/2026-11-05.md) · [Weekly](./reports/weekly/) · [Archive](./reports/)

---

*Autonomous Red Team Radar. Curated for operators. No runbooks, no PoCs — pointers to primary artifacts, verified evidence, and evolving attacks.*
