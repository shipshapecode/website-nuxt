---
authorId: rwwagner90
categories: 
  - app tour
  - shepherd.js
  - site tour
date: '2019-10-22'
nextSlug: exporting-typescript-imports
nextTitle: 'Exporting Imported TypeScript Types'
previousSlug: ember-data-passing-query-params-to-save
previousTitle: Ember Data | Passing query params to .save()
slug: shepherd-popper-to-tether
title: 'There and Back Again - Popper to Tether'
---

[Shepherd.js](https://shepherdjs.dev/) has gone through many iterations, 
since we started refactoring it for v2. We initially switched from 
[Tether](https://github.com/shipshapecode/tether) to [Popper](https://popper.js.org/), on the 
advice of the Tether maintainers who said they did not have time to maintain Tether
and that Popper was a better option for now. We then doubled down and switched
to [Tippy.js](https://atomiks.github.io/tippyjs/) which is built on top of Popper, and 
provides animations and extra features. Ultimately, we ended up with a really bloated bundle, 
with lots of dependencies, and we decided to "trim the fat".

We removed `lodash`, `object-assign-deep`, and other various dependencies, in favor
of shipping small util methods we wrote internally, and got down to Tippy being
our only dependency. We then decided we did not need the extra functionality that
Tippy offered, and we refactored back to using just Popper, which removed a pretty
sizable chunk from our bundle.

We were inspired to keep saving more though, since Popper has become a pretty in depth
framework, and might be more than we needed. This led us to try to create our
own positioning functionality, and explore other libs, and we ultimately had an
idea, why not try Tether again? For those who don't know, Shepherd was initially
built on top of Tether, and we figured if it worked then, it would probably work
now, so we gave it a shot.

To our delight, Tether worked almost identically to Popper, and we liked the idea
of bringing Shepherd back to its roots, so we took the plunge and converted everything
back. In the process we also acquired Tether from HubSpot and have begun refactoring it
to use Rollup, adding tests, and modernizing it as best we can. Tether is now the only
dependency for Shepherd, which allows us to control all the code we are shipping and
reuse common utils between the two. It also has the added benefit of reducing our bundle
size from `~35-40kb (min + gzip)` with Tippy + Popper, to `~15kb (min + gzip)` with Tether.

Shepherd v6 will be out soon, and will include this huge bundle savings, and will use 
Tether instead of Popper. It will also include various other tweaks, new features, and
enhancements, that we are super excited to share with you! We hope to continue to improve
both Shepherd and Tether and bring them back to being industry standard choices for app
tours and positioning elements together.

***Need help with custom application tours? We've integrated Shepherd into several applications. 
Get help from the Shepherd experts! [Contact us](https://shipshape.io/contact/). 
We would love to work with you!***


