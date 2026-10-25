# Red Team Radar — Offensive Security Trend Tracker

Persistent situational awareness for offensive-security operators. Autonomous tracker of the active frontier: tools, releases, techniques, research, and advisories on Active Directory, C2/evasion, web/API/cloud, exploitable CVEs, and threat TTPs.

![trends](https://img.shields.io/badge/trends-12-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-26-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--25-2f9e44?style=flat-square)

---

## Since 2026-10-25

- **PHP2Shell RCE promoted to seed trend** — 4 independent sources verified (Elastic, SecurityWeek, The Register, Assetnote); CVE-2026-109618/109619; UK government services impacted; Mirai botnet integration confirmed.
- **NTLM relay attack chain research** — SpecterOps Oct 23: bypass of LDAP signing enforcement via reauthentication; post-Channel Binding attack surface for AD compromise.
- **CISA KEV additions Oct 23** — Collabora Online pre-auth RCE (already queued), Arista VeloCloud on-prem SQLi (third exploitation in 4 months; BOD 26-04 due Oct 26).
- **3 new EDR evasion tools discovered** — DLLParty (97 ⭐), PhantomBuffer (67 ⭐, SendMessage injection), KillerLand (59 ⭐, BYOVD EDR killer).
- **NVD Oct 21 scan** — 2 CRITICAL (D-Link empty admin CVSS 9.8, vLLM arbitrary Python CVSS 9.2), 30+ HIGH single-vendor CVEs; Wasmtime compiler overflow via GHSA.

---

## Trends

**seed 6 · dormant 6** (12 total: 6 seed, 0 emerging, 0 accelerating, 0 mainstreaming, 6 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [PHP2Shell RCE (CVE-2026-109618/109619)](#initial-access-php2shell-001) | seed | [2026-10-25](https://www.elastic.co/security-labs/threat-command/php2shell-assessing-elastic-detection-coverage) — 4 independent sources; real-world impact |
| [PaperCut NG/MF Pre-Auth RCE (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | seed | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [Kerberos Relay via DNS CNAME (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | seed | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [Fortinet FortiMail Pre-Auth RCE (CVE-2026-104286)](#initial-access-fortimail-001) | seed | [2026-10-03](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | seed | [2026-10-03](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | seed | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://github.com/advisories/GHSA-64qv-2ffq-h4w6) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Nightmare Eclipse: Windows Defender/BitLocker research](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |

---

## Tools & Releases

- **BloodHound** v9.9.0-rc3 (Oct 21, 2026) — [SpecterOps/BloodHound](https://github.com/SpecterOps/BloodHound) — AD attack-path analysis; authorization bypass fixes, CVE patches.
- **BloodHound** v9.9.0-rc1 (Oct 19, 2026) — Unsafe SAML logging removed; rate limiting added.
- **BloodHound** v9.8.0 (Oct 7, 2026) — Security fixes: CVE-2026-84304 (gRPC).
- **DLLParty** (97 ⭐, Oct 1, 2026) — [CCob/DLLParty](https://github.com/CCob/DLLParty) — DLL party process injection PoC.
- **PhantomBuffer** (67 ⭐, Oct 18, 2026) — [Wh1t3Rh1n0/PhantomBuffer](https://github.com/Wh1t3Rh1n0/PhantomBuffer) — SendMessage/WM_SETTEXT EDR evasion.
- **KillerLand** (59 ⭐, Oct 17, 2026) — [DeEpinGh0st/KillerLand](https://github.com/DeEpinGh0st/KillerLand) — BYOVD-based EDR killer collection.
- **Sliver C2** v1.7.8 (Oct 3, 2026) — [BishopFox/sliver](https://github.com/BishopFox/sliver) — Lightweight command-and-control framework.
- **Nuclei** v3.11.1 (Aug 8, 2026) — [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) — Template-driven vulnerability scanner.
- **Certipy** v5.1.0 (Jun 23, 2026) — [ly4k/Certipy](https://github.com/ly4k/Certipy) — AD CS exploitation tool.
- **NetExec** v1.5.1 (Feb 23, 2024) — [Pennyw0rth/NetExec](https://github.com/Pennyw0rth/NetExec) — Credentials & lateral-movement executor.
- **impacket** 0.13.1 (May 19, 2026) — [fortra/impacket](https://github.com/fortra/impacket) — Active Directory / SMB toolkit.

---

## Worth Studying

- [SpecterOps: Signed, Sealed, and Relayed, NTLM-style](https://specterops.io/blog/2026/10/23/signed-sealed-relayed-ntlm-style-bypassing-ldap-signing-through-reauthentication/) (Oct 23) — NTLM relay attack chain; bypass of LDAP signing enforcement via reauthentication; post-Channel Binding AD attack surface.
- [PhantomBuffer](https://github.com/Wh1t3Rh1n0/PhantomBuffer) (Oct 18) — EDR evasion via SendMessage/WM_SETTEXT injection; hands-on process injection tradecraft.
- [KillerLand](https://github.com/DeEpinGh0st/KillerLand) (Oct 17) — BYOVD-based EDR killer; driver-based persistence and detection bypass automation.
- [DLLParty](https://github.com/CCob/DLLParty) (Oct 1) — DLL party process injection PoC; foundational injection primitive.
- [SpecterOps: Attack of The Extensions](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) (Aug 13) — Chromium extensions as persistent C2 infrastructure; silent installation and C&C serving tradecraft.
- [SpecterOps: Return of the Cookie Monster](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) (Aug 13) — Chrome DevTools Protocol cookie theft for authenticated browser session compromise.
- [PortSwigger Research: CRLF-Powered Desync Attacks](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5) — HTTP/2 desynchronization via CRLF injection; request smuggling & cache poisoning.
- [SpecterOps: ConfigManBearPig 2.0](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (Aug 3) — SCCM/Configuration Manager attack collection tool (30+ techniques, 9 takeover paths).
- [SensePost: Process Parameter Poisoning "P3"](https://sensepost.com/blog/2026/process-parameter-poisoning/) (Jul 6) — Code injection via process-startup fields; EDR footprint reduction.

---

## Observation Queue

**26 unverified signals** awaiting trend promotion (≥3 independent sources required). [View full watchlist →](TRENDS.md#observation_queue)

Recent entries: LiteLLM supply-chain (2 sources), CVE-2026-114625 Arista VeloCloud SQLi, CVE-2026-111497 Node.js Brotli RCE, eMudhra CA compromise, autonomous AI agent research, Collabora Online RCE (CISA KEV), CVE-2026-96951 Windows IKE RCE.

---

## Details

- **[TRENDS.md](./TRENDS.md)** — Single source of truth: seed/emerging/accelerating/mainstreaming/dormant trends, confidence, aliases, evidence chains, strategy notes.
- **[Observation Queue](./TRENDS.md#observation_queue)** — Below-bar signals awaiting independent verification (≥3 sources threshold for trend seeding).
- **[Reports](./reports/)** — Daily & weekly publications tracking changes, findings, and calibration metrics.
- **[Latest Daily Report](./reports/2026-10-25.md)** — Oct 25 scan results; PHP2Shell promoted to seed trend; CISA KEV additions; 3 new EDR evasion tools.
- **[SOURCES.md](./SOURCES.md)** — Agent-maintained registry of primary blogs, CVE feeds, tool repos, discovery topics, community pulse venues.

---

**Last updated:** 2026-10-25

*Autonomous red-team situational awareness — curated for operators. Published artifacts only. [Scope & rules →](AGENTS.md)*
