<p align="center">
  <strong>SCOR AI</strong>
</p>

<h1 align="center">The Actuarial Standard for Autonomous AI Risk</h1>

<p align="center">
  We are building the credit bureau of the AI era.<br>
  Fortune 500 companies are deploying AI blind. We price the risk before it becomes a liability.
</p>

<p align="center">
  <a href="https://scorai-platform.vercel.app"><strong>Live Demo</strong></a>
  &nbsp;·&nbsp;
  <a href="#architecture">Architecture</a>
  &nbsp;·&nbsp;
  <a href="#mcp-server">MCP Server</a>
  &nbsp;·&nbsp;
  <a href="#who-this-is-for">Who This Is For</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-V3_Live-000000?style=flat-square" alt="V3 Live">
  <img src="https://img.shields.io/badge/MCP-29_Tools-000000?style=flat-square" alt="MCP Tools">
  <img src="https://img.shields.io/badge/V4-In_Development-000000?style=flat-square" alt="V4">
  <img src="https://img.shields.io/badge/License-Proprietary-000000?style=flat-square" alt="License">
</p>

---

## The Liability Crisis

AI stopped being a chatbot. It is now an autonomous agent executing real API calls, writing to production databases, and initiating financial transactions — with zero insurance behind it.

Traditional application security — firewalls, WAFs, SAST, DAST — is architecturally blind to semantic attacks, multi-turn jailbreaks, hallucinated outputs, and silent data exfiltration through conversational context.

Cyber-insurance underwriters cannot price what they cannot measure. CISOs are freezing generative AI rollouts across the enterprise because the downside liability is unquantifiable.

When an LLM hallucinates a binding contract, leaks a customer database, or executes a malicious payload — who pays? Today, the enterprise holds 100% of the liability. Zero transfer. Zero coverage. Zero standard.

SCOR AI exists to fix that.

---

## The Solution

SCOR AI deploys an adversarial intelligence swarm that systematically attacks and breaks enterprise AI systems — before a real adversary does.

Every vulnerability discovered is converted into one actuarial number: **Modified Expected Loss (MEL)**. MEL calculates the statistical probability of a semantic failure in production and maps it directly to concrete financial exposure — regulatory fines, breach remediation, legal costs, brand damage.

The final output is the **SRS Certificate** — a Semantic Risk Score ranging from 300 to 850 that an underwriter can actually price a policy against.

Security tells you what is broken. SCOR AI tells you what it costs. That is the difference between a bug report and a balance-sheet liability.

### SRS Scoring Reference

| Score | Grade | Classification | Action |
|:---:|:---:|---|---|
| 750 – 850 | A | Insurance-Ready | Cleared for production. Insurable at standard rates. |
| 600 – 749 | B | Low Risk | Monitor closely. Acceptable for internal tooling. |
| 450 – 599 | C | Moderate Risk | Remediation required before external deployment. |
| 300 – 449 | D | High Risk | Immediate action. Significant regulatory exposure. |

---

## Why Now

The regulatory hammer is dropping. The EU AI Act carries fines up to €35 million or 7% of global turnover. India's RBI guidelines and NIST's AI Risk Management Framework are converging on the same demand: prove your AI is safe, or do not deploy it.

The enterprise AI deployment market is projected to reach $400 billion by 2027, and not one standardized risk metric exists to govern it.

Whoever defines the scoring standard first becomes infrastructure. FICO did not win by being the best calculator — it won by being the number everyone agreed to use.

---

## A Shipped Platform, Not a Deck

This is not a whiteboard idea. It is a live, pure-TypeScript offensive security platform. No wrapped nmap. No wrapped sqlmap. No glued-together open-source scripts.

**Five fully operational intelligence domains:**

| Domain | Capabilities |
|---|---|
| **AI/LLM Adversarial Testing** | Prompt injection, semantic drift, data exfiltration, jailbreak chains, RLHF bypass |
| **Network & Attack-Surface Recon** | DNS enumeration, subdomain discovery, port scanning, technology fingerprinting, WHOIS |
| **Web Application Security** | SQL injection, XSS, CORS misconfiguration, TLS/SSL audit, directory brute-force, header analysis |
| **Cloud & Infrastructure** | S3/GCS/Azure blob exposure, Docker audit, Terraform and Kubernetes IaC scanning |
| **Secrets & Identity** | JWT audit, 40+ secret types (AWS, GCP, OpenAI, Stripe, private keys), password policy evaluation |

A live orchestration API, real-time WebSocket telemetry streaming attacks as they happen, and an automated engine issuing the SRS Trust Badge.

Competitors testing only prompts are looking at 20% of the actual liability surface. We score all of it.

---

<a name="architecture"></a>

## Architecture

### Jarvis and Shannon — Orchestrator and Stress Battery

Jarvis autonomously maps the target's entire attack surface through headless browser navigation and live API discovery. It crawls endpoints, parses schemas, identifies authentication boundaries, and builds a complete topology — without requiring source code access.

Shannon is the high-velocity stress battery. Once Jarvis maps the surface, Shannon fires over 2,000 adversarial probes across every attack category at machine speed.

### S.O.V.A. — Semantic Offensive Vulnerability Analysis

S.O.V.A. is the core differentiator. It is a reinforcement-learning adversarial agent that plays a continuous chess game against the target AI using **Monte Carlo Tree Search (MCTS)**.

Unlike static rule-based scanners that run a fixed checklist, S.O.V.A. adapts. It reads the target's response, recalculates the optimal next move, and builds deep conversational context over multi-turn interactions — systematically navigating the target's logic until it forces a critical failure. This is how it bypasses RLHF-aligned models that static probes cannot touch.

### The Reasoning Layer

A neuro-symbolic logic validator that evaluates whether an AI's conclusions are proportional to its evidence. This catches hallucinations that are syntactically fluent but logically unsound — a class of failure that pattern-matching scanners structurally cannot detect.

### MEL — Modified Expected Loss

The actuarial engine. It takes raw vulnerability data from the offensive layer and translates it into financial language:

- Statistical probability of exploit in production
- Multiplied by real financial exposure: regulatory fines, breach costs, operational downtime, reputational damage
- Output: an annualized financial exposure figure and the deterministic SRS Score

Every finding maps directly to the **MITRE ATLAS** adversarial-AI framework and is audited against **ISO/IEC 42001** — so compliance teams receive a certificate their existing audit workflow already recognizes.

---

## SCOR AI vs. Existing Solutions

| Capability | Traditional AppSec (SAST/DAST) | Prompt-Only Testers | SCOR AI |
|---|:---:|:---:|:---:|
| Semantic attack detection | No | Partial | **Full** |
| Multi-turn jailbreak chains | No | Partial | **Full (MCTS)** |
| Web/Network/Cloud coverage | Yes | No | **Yes** |
| Secrets and credential scanning | Partial | No | **Yes (40+ types)** |
| Financial risk quantification | No | No | **MEL Engine** |
| Actuarial-grade output | No | No | **SRS Certificate** |
| MITRE ATLAS + ISO 42001 mapping | No | No | **Yes** |
| CI/CD pipeline blocking | Partial | No | **Native** |
| Real-time semantic drift detection | No | No | **Continuous** |
| Adaptive (learns per-target) | No | No | **S.O.V.A. MCTS** |

---

<a name="who-this-is-for"></a>

## Who This Is For

**Enterprise Security Teams and CISOs** — Generative AI rollouts are being blocked because security leaders cannot quantify the downside. SCOR AI gives CISOs a board-ready financial risk number that proves a deployment is safe and compliant — or precisely quantifies the exposure if it is not.

**Developers and Engineering Teams** — Integrate directly into your development workflow through the MCP server or CI/CD pipelines. If a prompt update drops the SRS score below your threshold, the build fails. Continuous red-teaming without needing to become a prompt-injection specialist.

**Venture Capital and Private Equity** — De-risk capital allocation at scale. Batch-score entire prospect portfolios for data leakage risk and regulatory exposure before the term sheet is signed. Continuously monitor post-investment.

**Cyber-Insurance Underwriters** — You cannot price what you cannot measure. SCOR AI provides the standardized actuarial metric the industry needs to open up the AI liability market.

---

## Continuous Integration

AI is non-deterministic. A model that passes on Monday can be compromised by Tuesday.

- **CI/CD Pipeline Blocking** — Embedded in GitHub Actions and GitLab CI. If a change drops the SRS score below threshold, the merge is blocked automatically.
- **Real-Time Drift Detection** — Catches semantic drift the second it happens, not the next time someone remembers to run a scan.
- **Live Telemetry** — Every probe, every response, every vulnerability is streamed live via WebSocket.

---

<a name="mcp-server"></a>

## MCP Server

SCOR AI ships with its own Model Context Protocol server — a **29-tool offensive security arsenal** across 7 categories, built in pure TypeScript with zero external binary dependencies.

| Category | Tools | Examples |
|---|:---:|---|
| Reconnaissance | 6 | Subdomain enumeration, DNS recon, port scanning, tech detection, WHOIS, HTTP probing |
| Web App Security | 5 | SSL/TLS audit, directory brute-force, injection detection, CORS check, header analysis |
| Auth & Secrets | 3 | Secret scanning (40+ types), JWT audit, password policy evaluation |
| Cloud & Infra | 3 | Cloud storage exposure, Dockerfile audit, IaC scanning (Terraform, K8s) |
| AI/LLM Security | 2 | Code/prompt analysis, neuro-symbolic reasoning verification |
| Reporting | 3 | Full pentest orchestration, niche reports (founder/developer/investor), compliance mapping |
| Core Analysis | 7 | SRS scoring, MITRE ATLAS mapping, ISO 42001 checking, browser-based passive audit |

Add it to your MCP configuration:

```json
{
  "mcpServers": {
    "scorai": {
      "command": "node",
      "args": ["bin/scorai-mcp.js"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

We are actively building out the MCP with additional tools for deeper AI/LLM adversarial testing, supply-chain analysis, and automated compliance reporting. This is a core part of the V4 roadmap.

---

## The Moat

**Dynamic, not static.** Competitors run rule sets that go stale the day they ship. S.O.V.A. learns and adapts against every target in real time — it plays a game, not a checklist.

**Priced, not just found.** Competitors hand you a list of bugs. We hand you a dollar-denominated liability number that a finance team, a board, and an insurer can act on.

**The data flywheel.** Every audit sharpens our offensive agents and tightens our pricing models. This is a compounding accuracy advantage that becomes harder to replicate the longer we operate.

---

## What Is Next: V4

Model V4 is in active development. It represents a significant expansion of the offensive capability surface and the actuarial precision of the MEL engine. We are building toward a platform where every enterprise checks their SCOR before they deploy AI — the same way every bank checks a FICO score before they issue a loan.

---

## Team

**Ankush Singh** — Founder & CEO. Based in Bengaluru and Hyderabad. Building SCOR AI while pursuing a B.Tech in Computer Science at Scaler School of Technology and a BS in Data Science at BITS Pilani. Previously founded Coding Desk, scaling it to 300+ clients globally. Operating philosophy: ship first, pitch second. The platform in this repository is not a concept — it is already built and running.

---

## Links

| | |
|---|---|
| **Live Demo (V0)** | [scorai-platform.vercel.app](https://scorai-platform.vercel.app) |
| **V3 Platform** | Coming soon — the full V3 model is built and will be deployed shortly. |
| **Contact** | ankushsingh21123@gmail.com |

---

<p align="center">
  <sub>SCOR AI · Security without business context is just noise.</sub><br>
  <sub>© 2026 SCOR AI. All rights reserved.</sub>
</p>
