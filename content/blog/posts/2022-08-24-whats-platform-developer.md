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

Since we are often comming into orgnizations with a long history, Don't rock the boat, a mentor of mine once suggest don't make or suggest any major changes in the first three months.

This does not mean though that you cant enable small suggestions such as enabling new lint rules, though keep in mind if there
are a ton of small changes these MR's should have the rule set to warn and many small merge requests here are better for the sake of the pull/merge request viewer.

This also might be using existing project management solutions to reduce friciton for existing developers.

# Explaning Platform Engineering to New Developers

This can often be pretty hard, solutions often must be prototyped either in scratch projects outside of work repos, refactors can often take many months to deliver, with multiple iterations often requiring us to identify the most pertitent part of a suggested change.

Spike branches are often made just to deciminate the information for a suggested change.


# Interviewing Developers across the org for pain points

During interviews must understand the company culutre and what tools will actually be used and accepted across the organization before starting on work

# Proposing a new solution

It's often best to at some point document the why, what what and minimal changes to get a new featre/tooling across the goal post.

# Parallel Fields

- Software Engineer
- DevOps - Supports software engineers by managing CI/CD of applicaions
- SRE - Builds out new tooling to in 
- Platform Engeener

# Identifiying force muliplers or places where a companies are dying by a thousand cuts.


## Actual Platform and Developer Experence Issues

- No CI or not well thought out ones
- No E2E testing in CI or overlaping or tests that should be split
- No CD or automated deployment
- Precommit rules not set, flakey etc
- Not enforcing node version
- Flakey tests that should be skipped or revaluated.
- Application and infrastructure 

## Infrastucture Issues

- Orgnizations with self signed root CA's but no method's to automate renewel across infrastructure (kube nodes)

## Organizational Issues

- Not following proper async communication, questions should be asked in initial post
- meetings should have purpose incase they can be addressed ahead of time
- Not well defined tickets/acceptiance critera (which feeds into E2E)
- - Backstage - centralized documentation 

# Scratch Section

> Platform engineering teams apply software engineering principles to accelerate software delivery. 

[SRE vs. Platform Engineering](https://www.getambassador.io/resources/rise-of-cloud-native-engineering-organizations/)

---

> A constant focus on eliminating toil

Increase development valocity

---

Un paralizing a compony plagued by afraid to break things 

# Notes

https://platformengineering.org/blog/what-is-platform-engineering
https://www.getambassador.io/resources/rise-of-cloud-native-engineering-organizations/
