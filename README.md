# Red Team Radar

Persistent field awareness — offensive-security intelligence from primary sources.

![trends](https://img.shields.io/badge/trends-13-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-30-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--26-2f9e44?style=flat-square)

---

## Since 2026-10-22 (4-day scan window)

- **[GitLab Integer Overflow RCE (CVE-2026-110264)](https://github.com/advisories/GHSA-83vq-rvff-66gw)** — CVSS 10.0 maximum severity. Pre-auth code execution via regex integer overflow in versions 7.0→19.5 (12+ years of releases). Multiple public PoCs on GitHub. Promoted to **seed trend** Oct 26.
- **[Arista VeloCloud SQL Injection (CVE-2026-114625)](https://github.com/advisories/GHSA-964w-6mm5-rm95)** — CVSS 9.4 critical. Authenticated user → superuser operator privilege escalation. Queued Oct 23.
- **[Zimbra Log File RCE (CVE-2026-73570)](https://www.elastic.co/security-labs)** — Elastic Security Labs analysis Oct 23. Single vendor at this hour; queued.
- **[SpecterOps LDAP Signing Bypass](https://specterops.io/blog/)** — New relay attack technique, Oct 23. AD/identity axis.
- **[ConnectWise SkyKick Breach + Artex APT](https://www.securityweek.com/)** — China-linked APT using AI pentest tool; 2,250+ cloud tenants, privileged access <3h. Oct 22-23.

---

## Trends

**seed 3 · dormant 10** (13 total)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [GitLab Integer Overflow RCE (CVE-2026-110264)](#initial-access-gitlab-rce-001) | seed | [2026-10-22](https://github.com/advisories/GHSA-83vq-rvff-66gw) — CVSS 10.0, 10+ public PoCs |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | seed | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Supply-Chain](#initial-access-apex-accelerator-001) | seed | [2026-10-14](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://github.com/advisories/GHSA-64qv-2ffq-h4w6) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-10-03](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-03](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [WSUS / Windows Update Server RCE](#initial-access-wsus-001) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Nightmare Eclipse: Windows Defender/BitLocker research](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |

---

## Tools & Releases

- **BloodHound** — [v9.8.0](https://github.com/SpecterOps/BloodHound/releases/tag/v9.8.0) stable (Oct 7); v9.9.0-rc3 pre-release (Oct 21)
- **NetExec** — [v1.3.0](https://github.com/Pennyw0rth/NetExec/releases) (Oct 13)
- **Sliver** — [v1.7.8](https://github.com/BishopFox/sliver/releases) (Oct 3)
- **Certipy** — [v5.1.0](https://github.com/ly4k/Certipy/releases) (Jun 23)
- **Nuclei** — [v3.11.1](https://github.com/projectdiscovery/nuclei/releases) (Aug 8; templates must be signed as of Jul 6)
- **impacket** — [0.9.20](https://github.com/fortra/impacket/releases) (stable)
- **impacket** 0.13.1 (May 19, 2026) — [fortra/impacket](https://github.com/fortra/impacket) — Active Directory / SMB toolkit.

---

## Worth Studying

- [SpecterOps: Attack of The Extensions](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) (Aug 13) — Chromium extensions as persistent C2 infrastructure; silent installation and C&C serving tradecraft.
- [SpecterOps: Return of the Cookie Monster](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) (Aug 13) — Chrome DevTools Protocol cookie theft for authenticated browser session compromise.
- [PortSwigger Research: CRLF-Powered Desync Attacks](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5) — HTTP/2 desynchronization via CRLF injection; request smuggling & cache poisoning.
- [SpecterOps: ConfigManBearPig 2.0](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (Aug 3) — SCCM/Configuration Manager attack collection tool (30+ techniques, 9 takeover paths).
- [SensePost: Process Parameter Poisoning "P3"](https://sensepost.com/blog/2026/process-parameter-poisoning/) (Jul 6) — Code injection via process-startup fields; EDR footprint reduction.

---

## Observation Queue

**23 unverified signals** awaiting trend promotion (≥3 independent sources required). [View full watchlist →](TRENDS.md#observation_queue)

Recent entries: CVE-2026-96951 (Windows IKE RCE, priority watch), php2shell RCE detection, Railway infrastructure attack, LiteLLM supply-chain, Collabora Online RCE.

---

## Details

- **[TRENDS.md](./TRENDS.md)** — Single source of truth: seed/emerging/accelerating/mainstreaming/dormant trends, confidence, aliases, evidence chains, strategy notes.
- **[Observation Queue](./TRENDS.md#observation_queue)** — Below-bar signals awaiting independent verification (≥3 sources threshold for trend seeding).
- **[Reports](./reports/)** — Daily & weekly publications tracking changes, findings, and calibration metrics.
- **[Latest Weekly Report](./reports/weekly/2026-W44.md)** — Oct 26 recalibration; 4 seed trends demoted to dormant (21+ days quiet); 2 fresh seed trends held; observation queue maintained at 23 items.
- **[SOURCES.md](./SOURCES.md)** — Agent-maintained registry of primary blogs, CVE feeds, tool repos, discovery topics, community pulse venues.

---

**Last updated:** 2026-10-22

*Autonomous red-team situational awareness — curated for operators. Published artifacts only. [Scope & rules →](AGENTS.md)*
