# Red Team Radar — 2026-11-10

- **Quiet** · Comprehensive daily scan completed. No new on-axis primary research posts since 2026-11-07. 9/13 primary blogs opened (MDSec 522, Outflank 403, Project Zero safeguard).
- **Evidence** · [CVE-2026-116879](https://github.com/advisories) (Apache OFBiz RCE, CVSS 9.9 CRITICAL) — unauthenticated deserialization RCE; single vendor, queued for secondary analysis (→ [observation_queue](TRENDS.md#observation_queue)).
- **Evidence** · [CVE-2026-122410](https://github.com/advisories) (Kubernetes kubelet privilege escalation, CVSS 8.2 HIGH) — insecure symlink handling in volume mounts.
- **Evidence** · [CVE-2026-121340](https://github.com/advisories) (AWS Lambda cache poisoning, CVSS 8.3 HIGH) and [CVE-2026-122501](https://github.com/advisories) (OpenStack Nova privilege escalation, CVSS 7.8 HIGH) — cloud platform security issues.
- **Tool Release** · [BloodHound v9.10.0-rc1](https://github.com/SpecterOps/BloodHound/releases) (Nov 9) — UI overhauls, UUID-based IDs, Prometheus metrics, dependency hardening.
- **Dormancy Watch** · [PHP2Shell RCE](TRENDS.md#id-web-php2shell-001--php2shell-rce-cve-2026-109618109619) (seed, 17 days quiet); dormancy line 2026-11-21 (4 days out). Observation queue at 32 items (over 25-item cap); burndown prioritized next run.
