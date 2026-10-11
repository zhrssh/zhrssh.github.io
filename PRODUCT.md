# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners and operations managers of digital marketing, creative, and web development agencies with roughly 10–50 people, several active clients, and a stack of tools that don't talk to each other. They usually arrive from direct outreach and are deciding whether a discovery call is worth 45 minutes. B2B service firms beyond agencies (consultancies, studios) are a secondary audience.

## Product Purpose

The portfolio and service site of Zherish Galvin Mayordo, an AI automation specialist. It exists to win paid engagements automating agency client operations: the work that takes a newly signed client through onboarding, delivery, and reporting. Success means a qualified agency books a discovery call.

## Positioning

Instead of adding another tool to the agency's stack, Zherish connects the tools it already uses into reliable workflows. AI handles unstructured work (emails, documents, requests), and deterministic automation handles the rest. Workflows are built to fail loudly, never quietly. This is a specialist in client operations, not a generic AI consultant or chatbot builder.

The agency niche is a hypothesis being validated (a 30-day plan starting October 2026). The positioning should be able to widen to B2B service firms if the results point there.

## Operating Context

- Agencies run client onboarding, project setup, task coordination across PM/CRM/email/forms tools, and recurring status reporting, often by hand.
- Visitors evaluate quickly, often on a phone, after a cold message.
- The conversion path is a 45-minute discovery call booked through Calendly. A contact form, email, WhatsApp, and Viber are also available.

## Capabilities and Constraints

- Three offers, in client-lifecycle order: Automated Client Onboarding (the entry offer, "Start here"), Client Delivery Orchestration, and Reporting & Operations Monitoring (with ongoing monitoring and support).
- **No prices on the site.** The pilot prices are untested.
- Stack behind the work: n8n, Python, LLM APIs, PostgreSQL, APIs and webhooks.
- Terminology follows `CONTEXT.md`: **agency** is the buyer; **agency client** is the agency's customer; **client operations** is the signed-to-reported lifecycle. Copy addresses the agency as "you" and "your client" to avoid ambiguity.
- Site: Astro static site on GitHub Pages; content in Markdown collections; site metadata in `src/config.ts`.

## Brand Commitments

- Name: Zherish Galvin Mayordo. Based in the Philippines; serves English-speaking agencies internationally.
- Voice: plain, direct, second person. Name concrete outcomes. No hype or AI buzzwords, and no claims beyond what has been proven. It should sound like a calm engineer, not a salesperson.

## Evidence on Hand

- **The only real client result:** Solace of Christ Church, where a ProPresenter lyrics formatter saves 10+ minutes per song (`src/content/projects/propresenter-lyrics-formatter-2.md`, with a before/after image in `src/assets/projects/propresenter-lyrics-formatter-2/`).
- **Personal or demo builds, not client work:** spa booking, Telegram assistant, Messenger RAG chatbot. Several more are archived.
- **Credentials:** BS Computer Engineering; two co-authored ML papers (IEEE TENCON 2024; Diagnostika 2024); certificates from IBM, DeepLearning.AI/Stanford, and Cisco.
- **Absent, and must not be fabricated:** testimonials, client logos, agency clients, agency case studies, savings figures for agencies, and pricing. The agency onboarding demo (synthetic data) is planned but not built.

## Product Principles

1. Speak to one buyer: agency operators. Everything else is secondary.
2. Show proof before promises; never pad it with invented evidence.
3. Reliability is the differentiator: lead with what happens when things go wrong.
4. Make the next step a single, low-friction action: book a call.
5. Keep the positioning cheap to widen; the niche is still being validated.
