---
authorId: ncrmro
categories:
  - platform
  - developer experence
date: '2022-08-24'
slug: whats-platform-developer
title: What is a platform developer 
---


# Preface

Don't rock the boat, a mentor of mine once suggest don't make or suggest any major changes in the first three months.

This does not mean though that you cant enable small suggestions such as enabling new lint rules, though keep in mind if there
are a ton of small changes these MR's should have the rule set to warn and many small merge requests here are better for the sake of the pull/merge request viewer.

# Identifiying force muliplers or places where a companies are dying by a thousand cuts.

- Not following proper async communication, questions should be asked in initial post
- meetings should have purpose incase they can be addressed ahead of time
- Not well defined tickets/acceptiance critera (which feeds into E2E)
- No CI or not well thought out ones
- No E2E testing in CI or overlaping or tests that should be split
- No CD or automated deployment
- Precommit rules not set
- Not enforcing node version
- Flakey tests that should be skipped or revaluated.
- Backstage - centralized documentation 
- Application and infrastructure 
