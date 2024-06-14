# Civ
Civ is a public planning platform which allows for async planning processing, data aggregation and proof-of-work style geo-fencing

# Checklist
- Source Code Repository ✅
- Technical Documentation ✅
- [Recorded Demo](https://www.loom.com/share/2a1e7adf899d47e59722ce3921d9f0ff)
- Presentation 6.14.2024

# Init
## Dockerized
```docker compose up```
Feel free to view the configuration in `docker-compose.yaml`
## Local
```
npm i
npm run dev
```

Should provide an application at http://localhost:3000

# Test Suite
This application uses `Cypress` for testing and was designed with mobile devices
in mind.

Open cypress to run e2e tests
```npx open cypress```

Many tests are stubbed out to demonstrate proposed LLM capabilities rather than implementing them (24 hours...)

# Users
This project is designed around citizens and planning agencies and they would have different responsibilities.
## Citizens
- Able to provide feedback on projects
- Able to use an LLM to do image alteration
## Planners
- Able to upload and maintain project descriptions
- Able to approve/deny scraped data
- Able to remove individuals from Geo-fence
- Able to generate QR codes for projects

This is a small subset of features which this app can provide

# QR Geo-Fencing
One of the biggest challenges of online forum is the potential for abuse.
To resolve this, this application requires 2 things from users:
1. PKI
2. Geo-located QR code scanning

The User's public keys can be used to decrypt QR codes which allowlists users into project conversations.

These QR codes should be made available in the public space (preferably in a safe place near a project's occurence).

A notice period of at least 2 weeks should be provided for any forum.

This solution is not implemented in this demo (hey, this is only 24 hours...)

# Notifications
A more complex application would provide resources such as calendars and maps to help guide the user to topics and projects that they care about. An LLM can also perform text search to shortcut the need for traditional coding overhead (i.e., readonly APIs).

# LLM Integrations
LLMs do search and aggregation decently and are good for explaining the timeline of events of a project among other things.

LLMs may not do political positioning and other things so well.

Chat models would be contextualized to the current data that is being viewed and focused on providing a historian's perspective on projects rather than attempting to project impact.

However, some projects will have projections and an LLM should be able to use that data in generated prompts.

I, generally, would prefer to be LLM agnostic as well (if possible).

# Data Aggregation
I'd really like to avoid being *another* civic data aggregator. There are many agencies which gather and disemminate this data in convenient ways (i.e., Socrata).

For planning, digital calendar usage could see *vast* improvement.

Agenda's are also poorly aggregated and could be a target for LLM labeling and procurement (and use in downstream RAG tasks).