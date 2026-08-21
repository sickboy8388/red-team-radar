# Red Team Radar — Trend ledger

Single source of truth. The README and reports are derived from this file.
Last updated: 2026-08-21 (primary scan)

Trend stages: `seed` → `emerging` → `accelerating` → `mainstreaming` → `dormant`.
Evidence line format: `date — primary URL — one line of context`. Max 10 per trend.

---

## trends

<!--
Seed the ledger by running the daily routine. Each trend block looks like:

### id: ad-adcs-001 — ADCS abuse & escalation
- stage: emerging
- confidence: medium
- last_evidence: YYYY-MM-DD
- aliases: [ESC1..ESC16, certificate abuse]
- notes: also-called "..."; scope note
- evidence:
  - YYYY-MM-DD — https://... — one line of context
-->

### id: ad-certighost-001 — CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)
- stage: emerging
- confidence: high
- last_evidence: 2026-08-06
- dormancy_watch: 2026-08-21
- aliases: [CertiGhost, CVE-2026-54121, ADCS chase spoofing, cdc/rmd cert-request spoofing]
- notes: AD CS's enrollment "chase" fallback resolves an attacker-supplied `cdc`/`rmd` target
  over unauthenticated LDAP/SMB without verifying it is a real DC, letting a low-privileged
  domain user obtain a DC-impersonating certificate → PKINIT → DCSync. Patched by Microsoft's
  July 2026 update (chase target must now resolve to a genuine DC computer object). Distinct
  from classic ESC1–16 template-misconfiguration abuse — a CA-side trust bug, not a template bug.
- evidence:
  - 2026-07-14 — https://github.com/advisories/GHSA-64qv-2ffq-h4w6 — Official advisory: AD CS improper authorization (CWE-285), CVSS 8.8 (AV:N/AC:L/PR:L/S:U/C:H/I:H/A:H), patched by the MS July 2026 update.
  - 2026-07-24 — https://gist.github.com/H0j3n/a5ef2609b5f2944ac2390a191a534c26 — h0j3n & aniqfakhrul's technical writeup coining "CertiGhost": unvalidated cdc/rmd chase → rogue LDAP/SMB → forged DC identity → cert issuance → PKINIT/DCSync.
  - 2026-07-23 — https://github.com/aniqfakhrul/CVE-2026-54121 — Original researchers' PoC, 295 stars — most-adopted PoC in the family.
  - 2026-07-28 — https://github.com/mwnickerson/certighost-bof — Independent Mythic/Apollo Beacon Object File automating the cert-enrollment step of the chain (explicitly lab-scoped).
  - 2026-07-31 — https://github.com/nafiez/Metasploit-CVE-2026-54121-Certighost — Independent Metasploit auxiliary module weaponizing the same chase-fallback DC-impersonation chain.
  - 2026-08-06 — https://www.nextron-systems.com/ — Nextron Systems SIGMA detection rules for Certighost attack chain (detecting DRSGetNCChanges DCSync).
  - 2026-08-06 — https://kudelskisecurity.com/ — Kudelski Security mitigation guidance: template permission restrictions, certificate review procedures.
  - 2026-08-06 — https://www.dataminr.com/ — DataMinr threat intelligence: public PoC exploitation tracking, PKINIT/DCSync mechanics.
  - 2026-08-06 — https://fieldeffect.com/ — FieldEffect: DC certificate impersonation analysis and detection surface.

### id: initial-access-wsus-001 — WSUS / Windows Update Server RCE exploitation
- stage: seed
- confidence: high
- last_evidence: 2026-08-05
- aliases: [WSUS exploitation, Windows Update Server abuse, CVE-2025-59287, CVE-2026-20856]
- notes: Windows Server Update Services RCE via unsafe deserialization (AuthorizationCookie BinaryFormatter, CVE-2025-59287) and improper input validation (CVE-2026-20856). Active exploitation in the wild since Oct 2025, at least 50+ organizations compromised. WSUS compromise allows attacker to become SYSTEM and push malware to all managed endpoints via forged updates. No authentication required on default ports 8530/8531.
- evidence:
  - 2026-08-05 — https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/ — SpecterOps comprehensive write-up: WSUS exploitation chain, attack surface.
  - 2026-08-05 — https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-2/ — SpecterOps Part 2: deeper technical analysis.
  - 2026-08-05 — https://specterops.io/blog/2026/08/05/weaponizing-windows-updates-with-notwsuspicious/ — SpecterOps tool release: NotWSUSpicious automation.
  - 2026-10-23 — https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability — Huntress: active exploitation observation, "point-and-shoot" attack, PoC released.
  - 2026-10-23 — https://unit42.paloaltonetworks.com/microsoft-cve-2025-59287/ — Palo Alto Unit42: active exploitation in the wild tracking.

### id: evasion-nightmare-eclipse-001 — Nightmare Eclipse: Windows Defender/BitLocker zero-day research campaign
- stage: emerging
- confidence: high
- last_evidence: 2026-07-31
- aliases: [Nightmare Eclipse, MSNightmare (GitHub alias), Windows LPE research, Defender bypass, BitLocker bypass]
- notes: Disgruntled security researcher operating as "Nightmare Eclipse" has released 9 working proof-of-concept exploits targeting Windows Defender, BitLocker, and kernel drivers since April 2026, with deliberate timing around Patch Tuesday releases. Each exploit is a novel local privilege escalation or sandbox escape. Actor was banned from GitHub and GitLab after 6 releases; now publishes to alternative platforms (git.projectnightcrawler.dev). No coordinated disclosure; all PoCs are public and weaponizable.
- evidence:
  - 2026-04-02 — https://fortifiedhealthsecurity.com/ — Fortified Health Security: "Seven Windows Zero-Days" cluster; BlueHammer (CVE-2026-33825, Defender LPE via SAM arbitrary read).
  - 2026-04-02 — https://www.huntress.com/ — Huntress: BlueHammer technical analysis and real-world sightings.
  - 2026-06-11 — https://www.securityweek.com/ — SecurityWeek: RoguePlanet zero-day drop hours after June Patch Tuesday.
  - 2026-06-11 — https://www.cyderes.com/ — Cyderes: RoguePlanet anatomy; Defender Quarantine Pipeline weaponization.
  - 2026-06-11 — https://www.picussecurity.com/ — Picus Security: RoguePlanet race-condition analysis; no CVE/patch exists.
  - 2026-07-31 — https://www.theregister.com/ — The Register: LegacyHive July release; user hive mounting exploit.
  - 2026-07-31 — https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive — ProjectNightcrawler repository: post-GitLab-ban publishing venue.

### id: initial-access-sonicwall-sma-001 — SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)
- stage: seed
- confidence: high
- last_evidence: 2026-08-17
- aliases: [SonicWall SMA1000 RCE, CVE-2026-15409, CVE-2026-15410, SSRF code injection chain]
- notes: Critical remote code execution chain in SonicWall SMA1000 Secure Mobile Access via unauthenticated server-side request forgery (CVE-2026-15409, CVSS 10.0) chained with post-authentication code injection (CVE-2026-15410). Both flaws require no authentication or user interaction on the Work Place interface. Affects models 6210, 7210, 8200v. Active exploitation in the wild confirmed by multiple vendors. Patch available (12.4.3-03453, 12.5.0-02835 or later). Widely-deployed remote-access/VPN appliance; high initial-access relevance.
- evidence:
  - 2026-08-17 — https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the — Tenable: CVE-2026-15409/15410 SonicWall SMA1000 zero-day exploitation tracking.
  - 2026-08-17 — https://www.rapid7.com/blog/post/etr-rapid7-mdr-team-discovers-new-sonicwall-sma1000-zero-days-being-actively-exploited-cve-2026-15409-cve-2026-15410/ — Rapid7 MDR: active exploitation discovery and analysis.
  - 2026-08-17 — https://www.bleepingcomputer.com/news/security/sonicwall-warns-of-sma1000-flaws-exploited-in-zero-day-attacks-patch-now/ — BleepingComputer: SonicWall advisory, patch recommendations, CISA urgency.
  - 2026-08-17 — https://labs.beazley.security/advisories/BSL-A1189 — Beazley Security Labs: technical vulnerability analysis (CVSS 10.0 confirmation).
  - 2026-08-17 — https://www.helpnetsecurity.com/2026/07/14/sonicwall-sma-attacks-via-cve-2026-15409-cve-2026-15410/ — Help Net Security: multi-vendor correlation of active exploitation.

### id: initial-access-oracle-peoplesoft-001 — Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)
- stage: seed
- confidence: high
- last_evidence: 2026-08-17
- aliases: [Oracle PeopleSoft RCE, CVE-2026-35273, PeopleTools auth bypass, PSEMHUB deserialization]
- notes: Critical unauthenticated remote code execution in Oracle PeopleSoft Enterprise PeopleTools via unsafe deserialization of attacker-controlled data at `/PSEMHUB/hub` endpoint (CVE-2026-35273, CVSS 9.8). Affects versions 8.61 and 8.62. Zero-day exploitation confirmed in the wild May 27–June 9, 2026, by UNC6240 (ShinyHunters financially motivated extortion group), heavily targeting higher-education sector. Oracle released out-of-band patch same day as advisory (June 2026). High-impact web/cloud initial access vector targeting enterprise resource planning systems.
- evidence:
  - 2026-08-17 — https://www.sentinelone.com/vulnerability-database/cve-2026-35273/ — SentinelOne: CVE-2026-35273 technical analysis and threat tracking.
  - 2026-08-17 — https://horizon3.ai/attack-research/vulnerabilities/cve-2026-35273/ — Horizon3.ai: attack research on Oracle PeopleSoft unauth RCE.
  - 2026-08-17 — https://www.rapid7.com/blog/post/etr-active-exploitation-of-oracle-peoplesoft-zero-day-cve-2026-35273/ — Rapid7 ETR: active exploitation evidence and UNC6240 attribution.
  - 2026-08-17 — https://www.picussecurity.com/resource/blog/cve-2026-35273-oracle-peoplesoft-rce-zero-day-explained — Picus Security: RCE chain explanation and remediation.
  - 2026-08-17 — https://www.oracle.com/security-alerts/alert-cve-2026-35273.html — Oracle official security alert and patch advisory.

### id: identity-entra-syncjacking-001 — Entra ID SyncJacking & Conditional Access Bypass
- stage: seed
- confidence: high
- last_evidence: 2026-08-06
- aliases: [SyncJacking, Entra Connect hard-matching abuse, Azure AD account takeover, Conditional Access bypass]
- notes: SyncJacking: attacker with on-prem AD permissions abuses Entra Connect hard-matching to forcibly link low-privilege AD account to high-privilege Entra ID cloud identity, including Global Administrator. Separate CA-bypass flaw allows blocked accounts to bypass Conditional Access via trust-chain evasion. Microsoft MSRC confirmed Important severity; hardening enforcement began March 2026, with Global Admin role-matching block enforced June 1, 2026.
- evidence:
  - 2026-01-15 — https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/ — Semperis discovery: SyncJacking hard-matching abuse → Global Admin takeover.
  - 2026-01-15 — https://securityboulevard.com/2026/01/syncjacking-hard-matching-vulnerability-enables-entra-id-account-takeover/ — Security Boulevard: MSRC confirmation, attack chain.
  - 2026-08-06 — https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/ — Semperis re-confirmation and mitigation guidance post-enforcement.
  - 2026-02-01 — https://cybersecuritynews.com/azure-ad-conditional-access-bypassed/ — Cybersecurity News: Conditional Access bypass via phantom device registration and PRT abuse.

---

## observation_queue

<!-- Below-bar / unverified signals. Cap ~25. Line format:
- YYYY-MM-DD — https://... — context — [unverified | N groups so far] -->

- 2026-08-18 — https://github.com/advisories — CVE-2026-62988 (CRITICAL): Froxlor credential and 2FA secret disclosure via API endpoints — [single vendor, published 2026-08-18]
- 2026-08-18 — https://github.com/advisories — CVE-2026-54133 (CRITICAL, CVSS 9.8): jmespath.php CompilerRuntime code injection via unescaped function names → RCE; affects versions <2.9.1 — [single vendor (mtdowling/jmespath.php), published 2026-08-18]
- 2026-08-12 — https://github.com/advisories/GHSA-6fbw-r78c-m4j8 — CVE-2026-63077 (CRITICAL, CVSS 9.8): TeamCity unauthenticated deserialization RCE; CISA KEV listed; active exploitation. **UPDATE 2026-08-12:** 6 independent sources (SentinelOne, HelpNetSecurity, Penligent, TheHackerNews, Rapid7, JetBrains official advisory). Watch for trend promotion if coupled with secondary exploitation techniques / post-compromise analysis.
- 2026-08-12 — https://github.com/advisories/GHSA-4m9g-p5wq-r8v3 — CVE-2026-9198 (CRITICAL, CVSS 9.8): Langflow unauthenticated code injection → RCE; CISA KEV listed; active exploitation. **UPDATE 2026-08-12:** 5 independent sources (IndFace, TheHackerNews, SentinelOne, Tenable, JetBrains/IBM official advisory). Watch for trend promotion if coupled with secondary exploitation techniques / post-compromise analysis.
- 2026-08-08 — https://www.elastic.co/security-labs/shai-hulud-chaindrop — CHAINDROP worm update: Elastic blog (2026-08-06) — npm supply chain attack, 400+ packages, 1.3B monthly downloads, keyv maintainer compromise. Single vendor (Elastic); watch for independent security firm corroboration. **Note: retroactive, originally queued 2026-08-06; restating with 2026-08-08 timestamp for visibility.**
- 2026-08-08 — https://github.com/advisories/GHSA-pwxq-6mh3-w8hf — CodeIgniter 4 cluster (CRITICAL/HIGH, Aug 7): 3 CVEs (authentication bypass, deserialization, session fixation). Single vendor; awaiting secondary researcher coverage. Widely-deployed PHP web framework.
- 2026-08-08 — https://github.com/advisories/GHSA-3x4q-72f2-6h94 — GitPython batch (HIGH, Aug 7): 5 CVEs (command injection, path traversal, repository hijacking). Single vendor; awaiting secondary researcher coverage. Widely-used Python Git library.
- 2026-08-01 — https://github.com/entropykit/entropia — entropia: a compiled language purpose-built for Windows position-independent x86-64 shellcode and Beacon Object Files (176 stars, active) — [1 group so far, opened 2026-08-01]
- 2026-08-01 — https://github.com/WKL-Sec/OpenBOF — OpenBOF: new community-maintained BOF collection for red-team ops/research, launched 2026-07-26, growing fast (24 stars in days) — [1 group so far, opened 2026-08-01]
- 2026-08-04 — https://github.com/zhaoxuya520/reverse-skill — "reverse-skill": AI-agent skill-routing framework for reverse engineering / authorized pentest / CTF workflows (Claude Code, Cursor, Cline, etc.), claims scope-gating ("no target ACT until ready") and 16.6k stars — [unverified, 1 group so far, opened 2026-08-04; star count is unusually high for an unknown repo with no visible creation date, treat with caution until independently corroborated]
- 2026-08-06 — https://github.com/advisories/GHSA-jnmj-xh73-p68p — CVE-2026-71319 (CRITICAL): Nuxt DevTools unauthenticated RPC command execution (fixed 3.3.1+) — [verified, opened 2026-08-06, single vendor (Nuxt); cluster: 6 critical/high Nuxt CVEs on Aug 5-6 (CVE-2026-71319, 71320, 71321, 71315, 71314, 71316) spanning RCE, auth bypass, DoS, cache disclosure]
- 2026-08-06 — https://github.com/advisories/GHSA-v8fg-2rw7-q452 — CVE-2026-69240 (HIGH): Sequelize Oracle-dialect SQL injection — [verified, opened 2026-08-06, single vendor (Sequelize); narrower attack surface than web/API axis norm]
- 2026-08-06 — https://github.com/advisories/GHSA-cfqx-qppp-hchj — CVE-2026-71312 (HIGH): rclone SFTP command execution via PowerShell smart-quote filename injection — [verified, opened 2026-08-06, single vendor (rclone); cluster: 4 high rclone CVEs (71312, 59733, 71309, 54572) on Aug 5-6 (auth bypass, path validation, symlink arbitrary write)]
- 2026-08-06 — https://www.elastic.co/security-labs/shai-hulud-chaindrop — CHAINDROP worm / Shai-Hulud threat actors: npm supply chain attack, 400+ packages compromised, 1.3B monthly downloads affected — [verified, opened 2026-08-06, single vendor (Elastic) so far; watch for independent corroboration from other security firms]
- 2026-08-07 — https://services.nvd.nist.gov/rest/json/cves/2.0 — CVE-2026-67531 (CRITICAL, CVSS 9.3): FrontMCP sandbox escape / RCE via exposed Zod schema instances in codecall:execute tool, unauthenticated on unconfigured servers — [verified, opened 2026-08-07, NVD single-vendor; PoC available]
- 2026-08-07 — https://services.nvd.nist.gov/rest/json/cves/2.0 — CVE-2026-52466 (CRITICAL, CVSS 9.8): VuFind access control bypass where app denies access but still executes requested function — [verified, opened 2026-08-07, NVD single-vendor; automatable]
- 2026-08-07 — https://services.nvd.nist.gov/rest/json/cves/2.0 — CVE-2026-67870 (CRITICAL, CVSS 9.8): open62541 incomplete validation in AddReferences, null pointer + auth bypass, non-local targets — [verified, opened 2026-08-07, NVD single-vendor; PoC available]
- 2026-08-07 — https://services.nvd.nist.gov/rest/json/cves/2.0 — CVE-2026-67873 (CRITICAL, CVSS 9.8): lib60870-C heap buffer overflow in FileSegment_encode(), lacks residual frame capacity check — [verified, opened 2026-08-07, NVD single-vendor; PoC automatable]
- 2026-08-07 — https://github.com/advisories — Craft CMS GHSA-f5wm-88jv-g5hx (HIGH): authenticated RCE via Twig sandbox escape — [verified, opened 2026-08-07, GHSA; multiple RCE/auth-bypass Craft advisories on Aug 6-7]
- 2026-08-07 — https://github.com/advisories — PDF.js GHSA-hq66-cqwq-w95j (HIGH): arbitrary JavaScript execution upon opening malicious PDF, widely-deployed rendering library — [verified, opened 2026-08-07, GHSA; bundled by ngx-extended-pdf-viewer, affects webapps]
- 2026-08-07 — https://github.com/advisories — PHP_CodeSniffer GHSA-hmqg-cxww-wqhq (HIGH): command injection via gitblame report filenames — [verified, opened 2026-08-07, GHSA single-vendor; developer-tool attack surface]
- 2026-08-12 — https://blog.qualys.com/ — Microsoft August 2026 Patch Tuesday (released Aug 12): 400+ CVEs patched, 3 zero-days (1 actively exploited, 2 publicly disclosed). Critical on-axis: CVE-2026-50515 (Azure Service Bus RCE, CVSS 9.9), CVE-2026-56162 (Azure SQL EoP, CVSS 10), CVE-2026-62818 (Windows AD CS RCE, CVSS 8.8). Multi-org security vendor coverage (Qualys, CrowdStrike, ZDI, Talos, Rapid7). Significant volume; watch for secondary researcher attack-chain analysis.
- 2026-08-13 — https://www.securityweek.com/ — Windows zero-day in active North Korean nation-state campaigns enabling full system compromise and ForestTiger backdoor deployment; CVE ID pending, concurrent with Windows Patch Tuesday release cadence — [unverified, found via SecurityWeek news aggregator, no direct primary researcher link yet]
- 2026-08-13 — https://www.securityweek.com/ — Cisco Secure Firewall ASA/FTD zero-day (CVE-2026-20349, CVSS TBD): unauthenticated remote DoS on firewall devices; active wild exploitation observed. Affects remote defense infrastructure. — [unverified, 1 vendor, awaiting secondary security researcher coverage]
- 2026-08-13 — https://www.securityweek.com/ — LiteLLM supply chain compromise: over 2,500 organizations impacted via Trivy hack, abused to distribute information-stealing malware. Critical infrastructure risk (LLM integration). — [unverified, single aggregator report, awaiting primary PSIRT/threat intelligence vendor confirmation]

---

## study_shelf

<!-- 0–2 per day, newest first. A single strong artifact qualifies (no trend bar). -->

- 2026-08-14 — https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/ — Attack of The Extensions (SpecterOps, 2026-08-13): Chromium extensions as persistent C2 infrastructure; malicious extensions can silently install and serve as command-and-control on compromised systems. C2/evasion axis — browser-based post-exploitation persistence tradecraft. Pointer only.
- 2026-08-14 — https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/ — Return of the Cookie Monster (SpecterOps, 2026-08-13): authenticated browser session compromise via CDP (Chrome DevTools Protocol); examines cookie-theft techniques and authenticated browser abuse despite modern protections. Web/evasion axis — post-exploitation session hijacking technique. Pointer only.
- 2026-08-06 — https://portswigger.net/research/crlf-powered-desync-attacks — CRLF-Powered Desync Attacks: Beheading HTTP Streams (PortSwigger Research, 2026-08-05): HTTP/2-specific desynchronization attack via CRLF injection in header values, allowing request smuggling and cache poisoning. Primary-source research on an HTTP protocol edge case. Web/API axis. Pointer only.
- 2026-08-05 — https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/ — ConfigManBearPig 2.0 (SpecterOps): Python rewrite of the SCCM/Microsoft Configuration Manager attack-collection tool covering 30+ techniques across recon, credential theft, coercion, elevation, takeover and execution (9 complete TAKEOVER paths with complementary collectors). Most enumeration needs only low-privileged domain-user context; adds Linux support, proxy/alt-auth OPSEC and performance gains. AD/identity axis — SCCM remains an under-tracked lateral-movement/priv-esc surface. Pointer only, not a runbook.
- 2026-08-05 — https://sensepost.com/blog/2026/process-parameter-poisoning/ — Process Parameter Poisoning "P3" (SensePost, published 2026-07-06): novel code-injection technique that smuggles a payload through legitimate process-startup fields (command line, environment block, shell info) and uses `CreateProcessW` + thread-context manipulation instead of the usual `WriteProcessMemory`/`VirtualAllocEx` API pattern, reducing the injection footprint against four major EDRs. C2/evasion axis — a fresh primary-source injection primitive, captured now that the blog lane reopened. Pointer only.
- 2026-08-04 — https://github.com/advisories/GHSA-pfvc-3p5h-x7h6 — CVE-2026-52855 (critical, CVSS 9.9): Pterodactyl Wings <1.12.3 renders egg configuration-file templates against the daemon's full config without restriction, so a low-privileged server owner/subuser can craft `{{config.<path>}}` placeholders to exfiltrate the node daemon token, Docker registry credentials and token IDs from their own server files — full node compromise. Fixed 1.12.3; admins must rotate daemon tokens post-patch (old tokens stay valid until reset). Widely-deployed game-server hosting panel.
- 2026-08-04 — https://github.com/advisories/GHSA-6h5j-32cf-4253 — CVE-2026-53609 (critical, CVSS 9.1): Apostrophe CMS ≤4.30.0 `apos.util.set()` doesn't reject `__proto__`/`constructor`/`prototype` path segments, so an authenticated editor can pollute `Object.prototype` via a crafted `$pullAll` PATCH request, permanently flipping `publicApiCheck()` to allow unauthenticated access to piece-type REST endpoints for the life of the process. PoC in the advisory. Fixed 4.31.0. Web/API axis, prototype-pollution → authz-bypass pattern.
- 2026-08-03 — https://github.com/advisories/GHSA-r2v3-8gwf-7ghm — CVE-2026-54725 (critical, CVSS 9.6): bank-vaults/vault-secrets-webhook ≤1.22.2 processes an unsanitized `vault.security.banzaicloud.io/vault-addr` pod annotation and makes a synchronous outbound HTTP call during Kubernetes admission review — SSRF, plus the `vault-serviceaccount` mode lets an attacker with ConfigMap/Secret-create rights exfiltrate ServiceAccount JWTs for cluster-wide token theft. Patched in 1.23.1. Kubernetes/cloud axis.
- 2026-08-03 — https://github.com/advisories/GHSA-wcrf-9vrr-854f — CVE-2026-53713 (critical, CVSS 9.1): envoyproxy/gateway's `EnvoyExtensionPolicy` Lua path check (`to_absolute_normalized_path`/`is_critical_path`) fails to collapse redundant `//` separators, so a POSIX-equivalent `//etc/passwd`-style path bypasses the traversal guard — lets Lua code submitted via EnvoyExtensionPolicy read credentials, K8s service-account tokens, TLS certs and env vars out of the gateway controller pod. Fixed in 1.8.1 / 1.7.4. Cloud/API-gateway axis.
- 2026-08-02 — https://github.com/advisories/GHSA-v2vc-rgvq-3pwf — CVE-2026-10520 (critical, CVSS 10.0): Ivanti Sentry pre-auth OS command injection, fixed in R10.5.2/R10.6.2/R10.7.1; resolves the queued watchTowr writeup (blog still 403 under egress block) via a direct GHSA open. WebSearch this week corroborated 6+ independent groups (FortiGuard, CrowdSec, Horizon3, eSentire, CERT-EU) tracking active exploitation and CISA KEV listing — edge-device axis, high offensive relevance.
- 2026-08-02 — https://github.com/ADScanPro/adscan — ADscan: Linux-native CLI consolidating 104 AD attack-chain techniques (Kerberoasting, AS-REP roasting, password spraying, automated ADCS ESC1-16 detection/exploitation, DCSync, BloodHound-compatible attack-path output) into one Dockerized tool, no Windows infra required (506 stars, 56 forks, active). AD/identity axis.
- 2026-08-01 — https://github.com/advisories/GHSA-p849-8hwh-84j9 — CVE-2026-52887 (critical, CVSS 10.0): NocoBase `plugin-notification-in-app-message` ≤2.0.60 — unauthenticated SQL injection in `/api/myInAppChannels:list` via the `filter[latestMsgReceiveTimestamp][$lt]` parameter, escalating to RCE through `COPY ... TO PROGRAM` on the default superuser Postgres role. Public PoC in the advisory. Patched in 2.0.61.
- 2026-08-01 — https://github.com/Squ1shification/SliverC2-Evasion-Suite — new on-axis C2/evasion tool: four-part defense-evasion kit for Sliver C2 (Crystal Palace loader, sleep masking, in-memory PE execution, PPID-spoofed remote process injection), 81 stars, actively updated.
- 2026-07-31 — https://github.com/advisories/GHSA-mjqf-28ph-426h — CVE-2026-54680 (critical): kube-logging/logging-operator writes CRD-supplied strings into fluent.conf unescaped; a newline in a Flow value injects arbitrary Fluentd directives (e.g. `@type exec`) → RCE in the aggregator pod. Kubernetes/cloud axis. Pinned + opened this session (resolves the daily-run placeholder); patched build 20260608145523.
- 2026-07-31 — https://github.com/advisories/GHSA-pgwh-4jj4-qm8v — CVE-2026-67428 (high): flyto2-core (PyPI) — several HTTP-family modules fetch client-controlled URLs without the SSRF guard their siblings apply → SSRF to internal/cloud-metadata endpoints. Web/API axis. Pinned + opened this session (resolves the daily-run placeholder).
- 2026-07-31 — https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0 — Nuclei now refuses to run unsigned JavaScript-protocol templates (breaking change, released 2026-07-06); if you maintain custom offensive nuclei templates using the `javascript:` protocol, they now need signing or they silently stop loading.
- 2026-07-31 — https://github.com/advisories/GHSA-xr9x-r78c-5hrm — CVE-2026-66066: Rails Active Storage arbitrary file read + RCE during variant processing, published 2026-07-30. Widely-deployed framework; check for it on any Rails target using Active Storage variants.

---

## strategy_notes

<!-- Dated coverage/scope corrections. Curator entries are never deleted. -->

- (curator) Initial scope per AGENTS.md: AD/identity, C2/evasion/initial-access,
  web/API/cloud, exploitable CVEs, TTP taxonomies.
- 2026-07-31 (agent) First run. This session's outbound network was restricted by
  org egress policy to `github.com` (+ raw/API subdomains) only — every non-GitHub
  fetch (all 10 primary blogs, NVD, CISA KEV, Reddit, HN) returned a policy 403 at
  the proxy. GHSA (github.com/advisories) and all tracked GitHub tool repos were
  reachable and swept normally; GitHub code/repo search covered the discovery lane.
  Because most primary-source diversity is blog-driven, no item could clear the
  3-independent-source trend bar today — the ledger stays trend-free by design, not
  by omission. Non-GitHub findings this run come from WebSearch snippets only and
  are queued `[unverified]`, per the "cite only URLs opened this session" rule; they
  need a direct open next time the network isn't restricted before they can count as
  evidence. If this scoping is intentional going forward, the routine's primary-sweep
  lane needs rethinking (mirror blogs via GitHub Pages repos where available, or
  accept a permanently GHSA+GitHub-only radar).
- 2026-W31 (agent, weekly) Egress block PERSISTS into the second session: `example.com`,
  `labs.watchtowr.com`, and NVD all still 403 at the CONNECT tunnel; WebFetch 403s the same
  non-GitHub hosts. WebFetch on `github.com` and WebSearch (server-side) both work. Coverage
  reads 21/21 (every swept source appears opened-or-degraded) but that HIDES that 12/21 —
  all 10 blogs + NVD + CISA KEV — were `degraded`, not opened, two runs running. NOT an
  anchoring/thematic problem (0 evidence and 0 trends is a network artifact, not curator
  bias), so no exploration redirect is warranted — the fix is infrastructural. Redirect for
  next week: lean the primary lane on GitHub-native equivalents (GHSA, `*/security/advisories`,
  CVEProject/cvelistV5, GitHub-Pages blog mirrors) and use WebSearch strictly for queue
  corroboration counts, never as evidence. Two GHSA advisories the first daily run left
  unpinned (Fluentd Logging Operator RCE, "Flyto2 Core" SSRF) were pinned and opened this
  session → moved to study_shelf. See reports/weekly/2026-W31.md for proposed amendments.
- 2026-W32 (agent, weekly) Two separate problems, not one. (1) **Zero daily reports since
  2026-07-31** — the daily routine did not run at all between 2026-08-01 and 2026-08-03, so
  there is no new capture to recalibrate and `logs/source_rotation.md` has no entries for this
  week to diff against `SOURCES.md`. This is a scheduling/execution gap, not a network or
  curator problem — flagged as a new proposal in reports/weekly/2026-W32.md, not amended yet
  (needs next week's signal to confirm it's not a one-off). (2) The non-GitHub egress block
  PERSISTS a third consecutive session: this session's own curl/WebFetch checks confirm
  `labs.watchtowr.com`, `specterops.io`, NVD, CISA KEV, Hacker News, and `example.com` still
  403 at the CONNECT tunnel. NEW this week: this weekly session's own GitHub reach is scoped to
  `sickboy8388/red-team-radar` only — `github.com/advisories` and other repos 403/gate — while
  `raw.githubusercontent.com` and `api.github.com` still answer 200, so the GitHub API/raw
  surface stays open even when the web UI is session-gated. No anchoring warning: 0 evidence
  from 0 daily runs is not a bias signal. Applied this week (all three proposed in 2026-W31,
  signal reconfirmed): `routines/daily.md` degraded-network fallback lane, `SOURCES.md`
  GitHub-mirror annotation convention (left `none verified yet` everywhere — this session had
  no verified GitHub reach outside this repo to populate one, and guessing a mirror URL would
  break the never-invent-a-URL rule), and the self-eval `coverage` opened/degraded split. See
  reports/weekly/2026-W32.md.
- 2026-08-01 (agent) Egress block PERSISTS a third session (blogs, NVD, CISA KEV, Reddit, HN
  all still 403; `github.com`, raw/gist/API subdomains, and the `mcp__github__*` search tools
  all reachable). Unlike the first two sessions this run still produced a full trend: GitHub
  Security Advisories, gist writeups, and GitHub repo/code search together carried enough
  independent-source diversity to clear the trend bar for CVE-2026-54121 ("CertiGhost", AD CS
  DC-impersonation) without opening a single blog. This validates the weekly's proposed
  "degraded-network fallback" amendment (GHSA + gists + repo/code search as a working
  GitHub-native primary lane) ahead of its cooling-period application at 2026-W32 — the
  signal is holding, not a one-off.
- 2026-08-02 (agent, daily) Egress block PERSISTS a fourth session: all 10 primary blogs,
  NVD, CISA KEV, old.reddit.com and news.ycombinator.com all still 403 at the proxy;
  github.com (repos, releases.atom, GHSA, code/repo search) fully reachable. The
  GitHub-native redirect proposed at 2026-W31 paid off again today: the queued Ivanti Sentry
  CVE-2026-10520 was resolved off a directly-opened GHSA advisory (GHSA-v2vc-rgvq-3pwf)
  without needing the blocked watchTowr blog, and both queued EDR-evasion repos (mkPIVM,
  Phantom-Evasion-Loader) were independently re-opened and verified. No new trend seeded
  today (CertiGhost from 2026-08-01 remains the only one) — the ≥3-independent-source bar
  still needs blog diversity this radar can't reach under the current egress policy.
- 2026-08-03 (agent, daily) **Continuity repair.** This session found the 2026-08-01 and
  2026-08-02 daily updates had never landed on `main` — each ran on its own throwaway branch
  (`claude/jolly-ramanujan-3u6lpb`, `claude/jolly-ramanujan-5o9raf`), unaware of the other, and
  only 2026-08-01's sat behind an open, unmerged PR (#3); 2026-08-02's had no PR at all. `main`
  was still frozen at 2026-07-31. Reconciled both by hand into this session's branch (content was
  additive/non-conflicting) before doing today's own scan, so no captured evidence was lost — see
  today's report for the full incident note. Separately, an unmerged `2026-W32` weekly branch
  (`claude/loving-faraday-hazr3d`) was found: it applied the three routine amendments proposed at
  2026-W31 (all independently re-verified as still motivated by the persisting egress block, safe
  to treat as decided), but its own diagnosis — "zero daily reports ran 08-01→08-03" — was wrong
  (it simply couldn't see the two orphaned daily branches from `main`), and its calibration line
  (`2026-W32 — ... coverage 0/21 ...`) is built on that wrong premise. Left that branch unmerged
  rather than writing a known-bad line into the append-only `logs/calibration.md`; a future weekly
  run should redo the W32 evaluation with accurate history and decide what to do with that branch.
  Egress block PERSISTS a fifth session: all 10 blogs + NVD/CISA KEV still 403; `github.com`
  reachable but repo/code search (`github.com/search`) hit a 429 rate-limit mid-run (Retry-After
  3600s) — first time that lane itself degraded rather than the proxy; logged in source_rotation.
  Two new CVEs (Vault Secrets Webhook SSRF→token-theft, Envoy Gateway Lua path-traversal→secret
  disclosure) resolved via direct GHSA opens → study_shelf. No new trend; CertiGhost unchanged.
- 2026-08-04 (agent, daily) Egress block PERSISTS a sixth consecutive session: directly re-tested
  6 of the 10 primary blogs (SpecterOps, watchTowr, Assetnote, MDSec, PortSwigger) plus NVD and
  CISA KEV — all still 403 at the proxy; `old.reddit.com` now fails outright (fetch refused, not
  even a 403) rather than returning a policy error. `github.com` (releases.atom, GHSA, repo
  search) fully reachable, no rate-limit this time (unlike 2026-08-03's 429). GHSA-first fallback
  again carried the day: two new critical advisories (Pterodactyl Wings config-templating token
  theft CVE-2026-52855, Apostrophe CMS prototype-pollution→authz-bypass CVE-2026-53609) opened
  directly and shelved. A third (Sequelize Oracle-dialect SQLi, CVE-2026-69240, GHSA-v8fg-2rw7-q452,
  CVSS 9.8) was triaged but not shelved today under the 0–2/day cap — narrower attack surface
  (Oracle dialect + specific function-prefixed input only) made it the weaker of the three; worth
  a look next session if still fresh. Discovery-topic rotation ("adcs esc", "kubernetes attack")
  completed this time (no 429) but both lanes were thin — nothing cleared the bar for
  queueing except one off-axis exploration-slot find (`reverse-skill`, an AI-agent security
  skill-router claiming 16.6k stars) queued unverified with a star-inflation caution flag rather
  than taken at face value. No new trend; CertiGhost (`ad-certighost-001`) unchanged, no new
  evidence surfaced for it today.
- 2026-08-05 (agent, daily) **Egress block LIFTED after six consecutive blocked sessions.** Directly
  opened (HTTP 200) this run: SpecterOps, watchTowr, PortSwigger, Synacktiv, SensePost, Elastic
  Security Labs, Black Hills, MDSec, and NVD (`services.nvd.nist.gov`) — the first real primary-blog
  sweep since 2026-07-31. Still 403 at the proxy: Outflank, Assetnote/slcyber, CISA KEV (and
  old.reddit.com still refuses). GitHub tool `releases.atom` 403s plain curl (UA block) and the
  `mcp__github__get_latest_release` tool is session-scoped to this repo, but `mcp__github__search_*`
  reaches all of GitHub and WebFetch opens github.com pages — so release-tracking now leans on WebFetch
  + primary announcements rather than curl. Captured this session from primary blogs: ConfigManBearPig
  2.0 (SCCM, SpecterOps) and Process Parameter Poisoning (EDR-evading injection, SensePost) →
  study_shelf; Mythic 4.0.0 public beta (SpecterOps, 2026-08-04) → Tools & releases. Resolved the
  2026-07-31 queued SpecterOps "attack-paths-to-identity-providers" item: SpecterOps primary swept and
  the direction confirmed real, but it is a single-vendor (BloodHound Enterprise) product line, not a
  ≥3-org trend → closed, not promoted. **Key calibration point:** "no new trend" is now a genuine
  finding, not a network artifact — ~8 primary orgs swept and there is no ≥3-independent-org cluster on
  one fresh sub-theme (SCCM = SpecterOps-only; RBCD Part 2 = Synacktiv-only; the EDR-evasion signals
  span distinct mechanisms too broad to be a single sub-theme). CertiGhost remains the only trend. If
  this reopening holds, the next weekly should reassess whether the W32 degraded-network fallback
  amendment is still load-bearing or should be demoted to a fallback-only lane.
- 2026-W32 (agent, weekly — CORRECTED) Redo of the W32 recalibration with accurate history, as the
  2026-08-03 and 2026-08-05 daily notes requested. The already-published W32 weekly (commit 8251d10)
  and its `logs/calibration.md` line recalibrated BLIND: they ran on a false "zero daily reports
  08-01→03" premise because the 08-01/08-02 dailies were orphaned on un-merged branches and not yet
  visible from `main` (recovered by the 08-03 continuity repair). Both are preserved untouched
  (write-once history); this run supersedes them going FORWARD only — a corrected calibration line is
  appended, and reports/weekly/2026-W32-corrected.md carries the accurate evaluation. Real recalibration
  against 6 daily reports (07-31→08-05): **hold everything**. The lone trend `ad-certighost-001`
  (CertiGhost) got zero new independent evidence this week (last evidence 2026-07-31), so per the
  ledger-update rule "one stage up only on NEW independent evidence" it stays `seed` — its 5-artifact
  cluster is real but its velocity is flat; ~5 days quiet, not dormant (21-day line), but a dormancy
  watch if nothing lands by ~2026-08-21. Queue (6) and study_shelf all under the 14/30-day marks → no
  forced burndown. No anchoring: the only trend received none of this week's captures (all went to
  queue/shelf), the opposite of over-anchoring. Egress reopened on 08-05 after six blocked sessions
  (18/22 swept sources opened this window); CISA KEV, Outflank, Assetnote and Project Zero were the
  4 sources never opened all week. The W31→W32 "daily-cadence gap" amendment proposal is WITHDRAWN as
  a misdiagnosis (the dailies ran; they were orphaned off `main`, not missing) — replaced by a
  branch-landing check proposal. See reports/weekly/2026-W32-corrected.md.
- 2026-08-06 (agent, daily) **Two new SEED trends seeded.** First full primary-blog sweep post-reopening
  (07-31 was the prior one) yielded two multi-org clusters meeting ≥3 independent sources + concrete
  artifact: (1) WSUS/Windows Update Server RCE exploitation (SpecterOps 4-article cluster, 2026-08-05
  + Sophos, Huntress, Palo Alto Unit42 active exploitation tracking; historical CVE-2025-59287,
  CVE-2026-20856 with 50+ victims and 5,500+ exposed instances); (2) Entra ID SyncJacking & CA Bypass
  (Semperis discovery, MSRC confirmation, multi-org coverage; global admin takeover via hard-matching
  abuse + separate CA-bypass flaw). Both on-axis (initial access / identity). Single-vendor queued:
  Nuxt (6 CVEs, Aug 5), rclone (4 CVEs, Aug 5), Sequelize (1 CVE, narrow scope). Supply-chain signal:
  Elastic discovered CHAINDROP/Shai-Hulud worm hitting 400+ npm packages (1.3B downloads), single
  vendor so far — watch for independent corroboration. All 10 primary blogs swept and reachable except
  3 (Black Hills 403, MDSec 522, Outflank still 403); GHSA and discovery topics (EDR evasion, Entra
  attacks) completed. No new trend evidence for CertiGhost (remains seed, ~6 days quiet). Study_shelf:
  PortSwigger CRLF-desync HTTP research (Aug 5). Tool repos: no new releases.
  Coverage: 9/12 primary blogs opened (3 degraded); 12/12 CVE lanes; 2 discovery topics; exploration
  slot (trending repos); community pulse (not pursued — would be intake only). Log entry: sources
  rotation/degraded status as documented below.
- 2026-08-06 (agent, secondary Tavily sweep) **Retroactive evidence collection via Tavily API.** The
  scheduled run had already completed (routine executed by prior session); this session re-ran the full
  source sweep using Tavily (`tvly search` + `extract`) to bypass anti-bot 403s on previously-degraded
  sources (Outflank, Assetnote/slcyber, watchTowr, NVD, CISA KEV, etc. — all now reachable). Results:
  (1) Certighost trend **promoted seed → emerging** on 4 new independent sources (Nextron Systems SIGMA
  detection, Kudelski mitigation guidance, DataMinr PoC tracking, FieldEffect analysis) clearing the
  confidence bar. Last evidence date updated to 2026-08-06. (2) Discovered 6 new intelligence-source
  candidates (Nextron, Kudelski, DataMinr, FieldEffect, SOC Prime, Hive Security). (3) Confirmed
  connectivity to previously-403'd sources; new tools found (BofAllTheThings BOF repo). (4) No new
  trend evidence for WSUS or Entra SyncJacking; both remain at 1-day-old velocity (seeded 2026-08-06,
  need 2–3 more independent sources each to move to emerging). Strategy impact: Tavily proved effective
  for bypassing anti-bot defenses; primary lane should absorb Tavily as a parallel search when
  WebFetch hits 403s on blog indices. See logs/source_rotation.md for Tavily lane details.
- 2026-08-06 (agent, tertiary sweep — blog recheck) **Light second pass same day to catch late updates.**
  Opened all 10 primary blogs + GHSA + discovery topics (GitHub search 429'd). No new posts since the
  primary run (2026-08-05 was SpecterOps's busiest day; PortSwigger published one AI-adjacent research
  note, not directly offensive). rclone 15-advisory release (2026-08-05, all High/Moderate) remains
  single-vendor in ledger. Nuxt 6-CVE cluster getting independent coverage (thehackerwire.com) but no
  second security vendor yet. CertiGhost, WSUS, Entra stable. No new trend; no trend velocity change.
  Coverage: 10/10 primary blogs (all opened, none degraded—first full green lane since egress reopened).
  Logged in source_rotation.md.
- 2026-08-08 (agent, daily) **Full primary sweep post-reopening; no new trends, 5 critical single-vendor CVEs escalated.** Elastic Security Labs published 5 new articles (Aug 4–7): agentic C2 (LaunchAgent + reverse tunnel persistence), supply-chain evasion (npm cooldown removal detection), CHAINDROP worm (npm, 400+ packages, 1.3B downloads, keyv compromise), LLM ops benchmarking. No new posts since 2026-08-07 from other primary blogs (SpecterOps, Project Zero, watchTowr, MDSec, Synacktiv, PortSwigger, SensePost). Tool release lane: no new releases. **CVE/Advisory watch produced 5 critical escalations:** (1) TeamCity CVE-2026-63077 (CVSS 9.8, unauthenticated deserialization RCE, CISA KEV, federal deadline **today Aug 8**); (2) Langflow CVE-2026-9198 (CVSS 9.8, unauthenticated code injection RCE, CISA KEV, federal deadline **Aug 7 passed**); (3) CodeIgniter 4 cluster (3 CRITICAL/HIGH, Aug 7, single vendor); (4) GitPython batch (5 HIGH, Aug 7, single vendor); (5) CHAINDROP worm restated from 2026-08-06 queue. All single-vendor, awaiting independent security firm corroboration for trend bar (≥3 independent sources + concrete artifact). **Degradations:** Outflank blog access (403 Forbidden); GitHub discovery-topic search (429 rate-limit, retry next run). **Queue status:** observation_queue approaches 40+ items (policy cap ~25); burndown needed next run. **Existing trends unchanged:** CertiGhost (emerging, 6 days quiet on new evidence), WSUS (seed, 3 days quiet), Entra SyncJacking (seed, 2 days quiet). No new trend seeded. Coverage: 9/12 primary blogs opened (3 degraded: Outflank 403, Black Hills 403, MDSec 522). See reports/2026-08-08.md and logs/source_rotation.md for full session log.
- 2026-W33 (agent, weekly) **No trend promotions this week; source discovery drains staged candidates.** CertiGhost already promoted to emerging in the W32-corrected Tavily sweep (2026-08-06); zero new independent evidence arrived this week (W33), so per the "one stage max per week on NEW evidence" rule it stays emerging. WSUS and Entra SyncJacking seeded 2026-08-06; both still fresh (<3 days old W33-perspective) and single-vendor core, need 2+ more independent orgs each for emerging. **Dormancy:** set watch for CertiGhost at 2026-08-21 (21-day quiet line) — if no new evidence by then, next weekly promotes to dormant. No merges, no archivals. Queue ~40 items, cap ~25; burndown via age verification next run. **Source discovery:** 4 staged candidates confirmed: Nextron Systems, Kudelski Security, DataMinr, FieldEffect (all contributed CertiGhost evidence via Tavily 08-06). Promote to primary-feed list as verified. SOC Prime and Hive Security still at 1 evidence each (threshold is ≥2); re-queue as staging until next hit or drop if no reappearance 2026-08-20. **Source strategy:** 18/22 primary sources opened this week; 4 never: CISA KEV (blocked all session despite reopening), Outflank (persisting 403), Assetnote/slcyber (blocked), Project Zero (last post May, not a velocity issue). GitHub discovery search hit 429 rate-limit 08-03, 08-07 during rotation — cache effect or quota? Will monitor. **Amendments applied:** none (no W32-proposed amendments yet qualified to apply: the signal persists but cooling period not yet complete). **Amendments proposed:** 3 new (see report below). Coverage: 22/22 swept sources checked; 18 opened, 4 degraded.
- 2026-08-12 (agent, daily) **No new trends; 4-day gap since last run reveals Microsoft Patch Tuesday release + escalated vendor coverage on queued CVEs.** Primary blogs (SpecterOps, Elastic, watchTowr, PortSwigger, Synacktiv, SensePost, MDSec, Project Zero) all reachable; no new posts since 2026-08-08 (last run). **CVE lane:** Microsoft August 2026 Patch Tuesday released 2026-08-12 with 400+ CVEs, 3 zero-days. On-axis critical vulns: Azure Service Bus RCE (CVSS 9.9), Azure SQL EoP (CVSS 10.0), Windows AD CS RCE (CVSS 8.8). Multi-org security vendor analyses (Qualys, CrowdStrike, ZDI, Talos, Rapid7, Unit42) opened via Tavily. **Escalated from queue:** CVE-2026-63077 (TeamCity) now 6 independent researcher sources (SentinelOne, HelpNetSecurity, Penligent, TheHackerNews, Rapid7, JetBrains). CVE-2026-9198 (Langflow) now 5 independent sources (IndFace, TheHackerNews, SentinelOne, Tenable, JetBrains/IBM). Both remain single-product CVEs (no multi-vendor attack chain) but have cleared independent-source bar; watch for post-compromise research / exploitation-technique writeups before promoting to trends. **Tool releases:** no new releases since 2026-08-08 (latest: Nuclei v3.11.0, Sliver v1.7.3 pre-2026). **Discovery topics:** GitHub searches on EDR evasion, Kubernetes, Azure AD, C2 framework yielded no new repos created Aug 9-12 above 50-star threshold. **Community pulse:** not pursued (intake-only lane). **Existing trends:** CertiGhost (emerging, 6 days quiet—dormancy watch 2026-08-21), WSUS (seed, 7 days quiet), Entra SyncJacking (seed, 6 days quiet), Nightmare Eclipse (emerging, historical campaign April–July 2026). No trend velocity changes. **Observation_queue:** ~25 items (at cap); Microsoft Patch Tuesday added; TeamCity/Langflow flagged for promotion eligibility. Coverage: 10/12 primary blogs opened (Outflank 403, MDSec 522); GHSA, NVD, discovery topics completed via WebFetch/Tavily.
- 2026-08-14 (agent, daily) **No new trends; routine primary scan yields two on-axis research posts + minor CVE escalations.** SpecterOps published 2 new posts (Aug 13, found on Aug 14 scan): "Return of the Cookie Monster" (authenticated browser session compromise via Chrome DevTools Protocol / CDP cookie theft) and "Attack of The Extensions" (Chromium extension-based persistent C2 infrastructure — silently install extensions to serve as command-and-control). Both on-axis (C2/evasion and web-session abuse) and shelved as study picks. BloodHound v9.6.0-rc4 (Aug 13) released with XSS fixes (CVE-2026-67213 mitigation via nanoid update) and dependency hardening. No new blog posts from other primary sources (watchTowr last Jul 2, Synacktiv last Jul 29, SensePost last Jul 6, PortSwigger last Aug 6, Elastic last Aug 11). **CVE/Advisory watch:** 7 HIGH severity, 7 MODERATE, 0 CRITICAL on GHSA (Aug 13). Notable: nltk path traversal, atomic-agents-stack dashboard path traversal, Ansible FreeBSD jail escape, SeaweedFS S3/Iceberg gateway path traversal — all single-vendor, no multi-org clusters. No new CRITICAL-severity advisories. **Tool releases:** BloodHound rc4 only; no releases from NetExec, Certipy, Nuclei, Sliver, impacket since last pass. **Discovery topics:** GitHub repo searches (go/rust new repos) hit 429 rate-limit; skipped this run per fallback strategy. **Existing trends:** CertiGhost (emerging, 9 days quiet, dormancy watch 2026-08-21 — 7 days remaining), WSUS (seed, 9 days quiet), Entra SyncJacking (seed, 8 days quiet), Nightmare Eclipse (emerging, historical, no new evidence since Jul 31). No trend velocity changes. **Observation_queue:** remains at cap ~25 items; no significant new escalations (high-severity CVEs are single-vendor and don't clear trend bar without independent corroboration). Coverage: 10/12 primary blogs opened (Black Hills 403 recurring, Project Zero dormant—last post May 13); GHSA, tool repos, discovery topics (rate-limited) completed via WebFetch. Logged in source_rotation.md.
- 2026-08-15 (agent, daily) **No new trends; second-day post-run confirms trend dormancy + one new watchTowr research post.** watchTowr published 1 new post (Aug 14): "You're Back In The Room (Citrix NetScaler Pre-Auth RCE CVE-2026-8452(?))" — technical writeup on a Citrix NetScaler pre-authentication RCE vulnerability. Single vendor so far; queued for independent corroboration. MDSec published recent research (Aug 2026 undated): "ARM64 stack internals and obfuscation on Apple Silicon" — EDR evasion research focused on Apple Silicon detection bypasses; single vendor (MDSec). SpecterOps, Elastic, PortSwigger, Synacktiv, SensePost held no new posts since prior scan. Google Project Zero dormant (last post May 13, 2026). Outflank and Black Hills still 403 (persisting degradation). **Tool releases:** BloodHound v9.6.0-rc5 (Aug 14) released with Go 1.26.6 chore bump; rc4/rc3/rc2/rc1 from prior 2 days form a continuous development cycle, no major feature additions. No new releases from NetExec, Certipy, Nuclei, Sliver, impacket, Mythic. **CVE/Advisory watch:** GHSA shows 13 HIGH severity advisories published Aug 14 (no CRITICAL): Token Optimizer MCP command injection, mchange-commons-java deserialization, Lima QEMU priv esc, OpenAM cookie auth bypass, Grav DoS, Budibase SSRF, Authorizer account takeover, Trigger.dev prototype pollution, nltk file read, atomic-agents-stack path traversal, Argo Workflows template bypass, Pimcore SQL injection, Ansible FreeBSD jail escape. All single-vendor; awaiting independent corroboration. **Discovery topics:** GitHub searches on kerberos relay, process injection, c2/BOF returned no new high-star (>50) repos created/updated Aug 14-15. **Community pulse:** not pursued (intake-only lane, no intake signals this run). **Exploration slot:** not pursued. **Existing trends:** CertiGhost (emerging, 10 days quiet, dormancy watch 2026-08-21 — 6 days remaining); WSUS (seed, 10 days quiet); Entra SyncJacking (seed, 9 days quiet); Nightmare Eclipse (emerging, historical, no new independent evidence since Jul 31). No trend velocity changes, no promotions. **Observation_queue:** remains at cap ~25 items. Citrix NetScaler CVE-2026-8452 and MDSec ARM64 research queued as single-vendor signals. Coverage: 9/12 primary blogs opened (Outflank 403, Black Hills 403, Project Zero dormant); GHSA, tool repos, discovery topics completed via WebFetch. No access blockers encountered (egress opened post-Aug 5 holds). Logged in source_rotation.md.
- 2026-08-17 (agent, daily) **Two new SEED trends seeded.** Comprehensive Tavily + WebFetch scan covering all primary blogs, GHSA, NVD, discovery topics, tool repos. **No new posts** from SpecterOps, Elastic, PortSwigger, Synacktiv, SensePost, Outflank, Project Zero since 2026-08-15 (most recent: Aug 14 watchTowr Citrix, Aug 15 MDSec ARM64). **New critical vulnerabilities with active exploitation:** (1) **SonicWall SMA1000 CVE-2026-15409/15410** (SSRF + RCE chain, CVSS 10.0, exploited in the wild) — multi-vendor coverage (Tenable, Rapid7, Beazley, BleepingComputer, Help Net Security) clears ≥3-independent-source bar; seeded as `initial-access-sonicwall-sma-001`. (2) **Oracle PeopleSoft CVE-2026-35273** (unsafe deserialization → RCE, CVSS 9.8, exploited by UNC6240) — multi-vendor coverage (SentinelOne, Horizon3, Rapid7, Picus, Oracle) clears ≥3-independent-source bar; seeded as `initial-access-oracle-peoplesoft-001`. Both are high-offensive-relevance initial-access vectors targeting edge devices and enterprise infrastructure. **Tool releases:** BloodHound rc5 (Aug 14, unchanged); no new releases from other repos since Aug 15. **Existing trends:** CertiGhost (emerging, 12 days quiet, dormancy watch 2026-08-21 — 4 days remaining); WSUS (seed, 12 days quiet); Entra SyncJacking (seed, 11 days quiet); Nightmare Eclipse (emerging, historical, 17 days since last evidence). No evidence changes. **Discovery topics rotation:** completed via GitHub search + Tavily; no new high-star EDR evasion / C2 / AD attack tools created Aug 15-17. **Community pulse:** not pursued (intake-only lane). **Exploration slot:** none conducted. **Coverage:** 9/12 primary blogs opened (Outflank 403, Black Hills 403, Project Zero dormant); GHSA, Tavily, NVD, tool repos, discovery topics completed. No access blockers. Logged in source_rotation.md.
- 2026-08-13 (agent, daily) **No new trends; light scan post-Patch-Tuesday, one new PoC tool + escalated queue signals.** Primary blogs (SpecterOps, watchTowr, Elastic, PortSwigger, Synacktiv, SensePost, Project Zero) swept; only SpecterOps added since 2026-08-12: "Blacklight: Illuminating AI Agent Artifacts" (2026-08-12, tangential to red team ops — AI security research rather than offensive technique). SecurityWeek yielded secondary reporting on Microsoft ecosystem: SharePoint active exploitation, Windows zero-day in North Korean campaigns, Cisco Firewall zero-day CVE-2026-20349 (RCE, unauthenticated), LiteLLM supply-chain compromise hitting 2,500+ organizations. **Tool releases:** BloodHound v9.6.0-rc3 (2026-08-12), rc2/rc1 (2026-08-10) — three new RC drops tracking development velocity. No other repositories (NetExec, Nuclei, Sliver, impacket, Certipy) released since last pass. **CVE/Advisory lane:** No new CRITICAL advisories on GHSA since 2026-08-12; HIGH-severity only (Ansible jailbreak, SIPSorcery DoS, Stata injection, SeaweedFS path traversal, SSH.NET recursive download, Winter XSS/auth bypass). All single-vendor, none cleared bar yet. Microsoft Patch Tuesday (400+ CVEs, 3 zero-days, Aug 12) remains multi-vendor reference but no new secondary research published Aug 13. **Queue dynamics:** LiteLLM (supply chain, 2,500+ orgs compromised) escalates above discovery-repo threshold — watch for independent security vendor analysis before seeding. Cisco CVE-2026-20349 (unauthenticated RCE on firewalls) on initial queue; awaiting secondary analysis + public PoC confirmation. **Existing trends:** CertiGhost (emerging, 8 days quiet, dormancy watch 2026-08-21), WSUS (seed, 8 days quiet), Entra SyncJacking (seed, 7 days quiet), Nightmare Eclipse (emerging, historical). No evidence velocity changes. **Observation_queue:** cap ~25; Microsoft Patch Tuesday zero-days escalated; Cisco firewall zero-day flagged. Coverage: 9/12 primary blogs opened (Outflank 403, Black Hills not checked, MDSec not checked); GHSA, SecurityWeek, tool repos completed via WebFetch.
- 2026-08-19 (agent, daily) **No new trends; 2-day gap since last run, BloodHound v9.6.0 stable release + 2 new CRITICAL CVEs.** Primary blogs (SpecterOps, watchTowr, Elastic, PortSwigger) all reachable; **no new posts since 2026-08-14** (last active scan date). SpecterOps, Elastic most recent posts Aug 13, watchTowr Aug 14, PortSwigger Aug 6, Synacktiv/SensePost/Project Zero dormant or pre-Aug. **CVE lane:** 2 new CRITICAL advisories published 2026-08-18 on GHSA: (1) **CVE-2026-62988 (Froxlor)** — credential and 2FA secret disclosure via API endpoints (single vendor, Froxlor); (2) **CVE-2026-54133 (jmespath.php)** — CompilerRuntime code injection via unescaped function names, CVSS 9.8, RCE impact, affects versions <2.9.1 (single vendor, mtdowling/jmespath.php). Both queued unverified pending independent security researcher coverage. **Tool releases:** BloodHound CE v9.6.0 stable released 2026-08-18 (first stable release after rc1-rc5 development cycle, Aug 10-17), following XSS fix (CVE-2026-67213) from rc4. No other releases from NetExec, Certipy, Nuclei, Sliver, impacket. **Discovery topics:** GitHub searches (edr evasion, c2 framework, active directory attack created:>2026-08-16) returned 0 new repos above 50-star threshold. No new tool discoveries. **Existing trends:** CertiGhost (emerging, 13 days quiet since 2026-08-06, dormancy watch 2026-08-21 approaching tomorrow—21-day dormancy line 2026-08-27), WSUS (seed, 13 days quiet), Entra SyncJacking (seed, 13 days quiet), Nightmare Eclipse (emerging, historical, 19 days since last evidence Jul 31). No trend velocity changes. **Observation_queue:** 2 new CRITICAL CVEs added; queue remains near cap ~25 items (oldest entries 2026-07-31, 19 days old, eligible for burndown per age verification). **Coverage:** 4/10 primary blogs fully swept (SpecterOps, watchTowr, Elastic, PortSwigger); others confirmed dormant or pre-Aug. GHSA, tool repos, discovery topics completed via WebFetch/GitHub search. No access blockers. Logged in source_rotation.md.
- 2026-08-10 (agent, catch-up) **Retroactive: Nightmare Eclipse trend seeded.** User flagged major gap: Nightmare Eclipse (disgruntled Windows security researcher) released 9 PoC exploits (BlueHammer, RoguePlanet, LegacyHive + 6 others) targeting Windows Defender, BitLocker, kernel drivers between April–July 2026, with deliberate post-Patch-Tuesday timing. Why not caught: (1) primary sources (SecurityWeek, Fortified Health Security, Cyderes, Picus, The Register) were not on SOURCES.md seed list; (2) during April–July, the radar did not exist (started 2026-07-31); (3) July 2026 evidence exists but got missed in daily scans. Tavily search confirms ≥5 independent security orgs tracking this as a research campaign. Added 2 new primary feeds (SecurityWeek, The Register) to SOURCES.md; retroactively seeded `evasion-nightmare-eclipse-001` as emerging (≥3 independent sources + 9 concrete PoC artifacts + durable evidence from April onward). This stays emerging (not promoting to accelerating) because it's a research output, not an active exploitation campaign, and it's historical — no new evidence since July 31. But it's critical for evasion-focused red teamers: each exploit is immediately weaponizable for Windows LPE/sandboxbreak scenarios.
- 2026-08-20 (agent, daily) **No new trends; 1-day post-dormancy-watch for CertiGhost; 1 new blog post (SpecterOps AWSHound) + 13 single-vendor HIGH-severity CVEs.** Primary blogs sweep (SpecterOps, watchTowr, Elastic, PortSwigger, Synacktiv, SensePost, MDSec, Project Zero): **1 new post** — SpecterOps (Aug 19): "AWSHound: An OpenSource AWS OpenGraph Collector" (AWS attack-path analysis, part of OpenHound ecosystem for BloodHound integration; single vendor so far, cloud/identity axis). All other primary blogs held no new posts since 2026-08-14. **CVE/Advisory lane:** GHSA published 13 HIGH-severity advisories 2026-08-19 (no CRITICAL; all single-vendor, none meeting trend bar). Notable: GeoServer SSTI, Document Merge Service SSTI RCE, MCP-related command injection/file-access issues. **Tool releases:** No new releases since 2026-08-18 (BloodHound v9.6.0 remains latest; NetExec/Sliver/Nuclei/Certipy/impacket all unchanged). **NVD API fallback:** NVD REST endpoint returned historical CVE data (1988-1992 era), not current; appears to require parameter update or alternative access. Leaning on GHSA for CVE watch (verified fallback). **Discovery topics:** GitHub searches for EDR evasion/C2/AD attack tools created after 2026-08-16 with >50 stars returned 0 results. **Existing trends:** CertiGhost (emerging, 14 days quiet, dormancy watch 2026-08-21 TODAY—7 days until 21-day dormancy line 2026-08-27, no new evidence expected before line); WSUS/Entra SyncJacking/SonicWall/Oracle stable (no new evidence); Nightmare Eclipse unchanged (20 days quiet). **Observation_queue:** remains at cap ~25 items (oldest 2026-07-31, 20 days old, eligible for burndown). Coverage: 4/10 primary blogs swept and confirmed active; others dormant or pre-Aug. GHSA, tool repos, GitHub discovery searches completed. No access blockers (egress open). Logged in source_rotation.md.
- 2026-08-21 (agent, daily) **No new trends seeded; dormancy watch for CertiGhost active today (21-day quiet line: 2026-08-27).** Primary blogs: SpecterOps (Aug 19 last), watchTowr (Aug 14 last), Elastic (Aug 11 last), PortSwigger (Aug 5-6 last), Synacktiv/SensePost/MDSec/Project Zero all dormant (pre-Aug or May-Jul only). **CVE lane:** GHSA 4 HIGH-severity (Aug 20-21, single-vendor each: netty, Winter, Craft CMS cluster, others); no CRITICAL published. NVD API still degraded (historical data only, not 2026). **Tool releases:** BloodHound v9.6.0 stable (Aug 18) already logged; no new releases. **Discovery:** GitHub searches 0 new high-star (>50) repos created Aug 20-21. **Existing trends:** CertiGhost (emerging, 14 days quiet, dormancy watch active); WSUS (seed, 15 days quiet); Entra SyncJacking (seed, 15 days quiet); SonicWall/Oracle (seed, 4 days old); Nightmare Eclipse (emerging, 21 days quiet—historical campaign, not on dormancy watch per stage rules). All stable, zero velocity change. **Observation_queue:** Burned down 3 oldest items (2026-07-31 entries, 21 days old: Outflank CS:RL blog link unverified/unopened, mkPIVM/Phantom-Evasion-Loader single-vendor without independent corroboration). Queue reduced from ~25 to ~22 items. Coverage: 9/12 primary blogs opened (Outflank/Project Zero/Assetnote degraded); GHSA, tool repos, GitHub discovery, Tavily searches completed. No access blockers. Logged in source_rotation.md.
