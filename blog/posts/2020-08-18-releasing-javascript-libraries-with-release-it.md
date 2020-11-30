---
authorId: rwwagner90
categories: 
  - javascript
date: '2020-08-18'
nextSlug: miragejs-graphql-tools
nextTitle: 'Simplify using MirageJS with GraphQL'
previousSlug: simple-docker-postgresql
previousTitle: The Simplest Possible Docker Setup For Postgresql
slug: releasing-javascript-libraries-with-release-it
title: Releasing JavaScript Libraries with release-it
---

We maintain many open source projects at Ship Shape, and are constantly looking for better ways to handle processes like testing and linting, CI,
code coverage metrics, live previews etc., but one of the most ubiquitous needs across all of our packages is a consistent release pipeline. 
Until recently, we didn't have a real set standard. We would use `npm version` and `npm publish` directly in some places, we would manually
push tags with `git push --tags`, and we were doing every step of the release pretty manually.

Once we discovered [release-it](https://github.com/release-it/release-it), we were able to finally have a standard way of doing all the manual release bits in one easy command.
It allows us to bump the package version, generate a changelog, commit, tag, push commits, push tags, release on GitHub and release on npm all with a nice step-by-step CLI command.

![Running release-it on ember-shepherd to show changelog generation and version bumping](/img/blog/releasing-javascript-libraries-with-release-it/release-it.png)

To simplify the setup process even further, we have been using [create-rwjblue-release-it-setup](https://github.com/rwjblue/create-rwjblue-release-it-setup) by the incomparable [@rwjblue](https://twitter.com/rwjblue). Which does the following:

* Adds `release-it` config to package.json
* Installs required dependencies
* Adds a CHANGELOG.md
* Adds a RELEASE.md
* Updates your repository's labels with rwjblue's "go to" defaults

This gets us up and running with `release-it` in a single command:

```bash
# in a yarn repo
yarn create rwjblue-release-it-setup

# in an npm repo
npm init rwjblue-release-it-setup
```

We are then up and running with `release-it` and are ready to release our packages! There are a lot of config options for `release-it`, if you have more custom needs, but
this should handle the basic case. Enjoy releasing your packages!
