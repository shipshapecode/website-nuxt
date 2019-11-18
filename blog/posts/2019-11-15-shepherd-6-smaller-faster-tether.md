---
authorId: chuckcarpenter
categories: 
  - shepherd.js
  - app tour
  - site tour
  - tether.js
date: '2019-11-15'
nextSlug: unit-testing-private-non-exported-functions-with-rewire
nextTitle: Unit Testing Private, Non-exported Functions with Rewire
previousSlug: ember-data-passing-query-params-to-save
previousTitle: Ember Data | Passing query params to .save()
slug: shepherd-6-smaller-faster-tether
title: 'Shepherd 6.0: One Dependency, Smaller Bundle, and New Look!'
---

## Return to Tether

As Robert wrote about in a previous [post](/blog/shepherd-popper-to-tether/), we moved back to the original element attachment and positioning library Shepherd.js shipped with. This was with the intent of not only controlling the overal bundle size (which I'll discuss next), but also about being able to control those dependencies over time. Since Ship Shape is now maintaining the [Tether](https://github.com/shipshapecode/tether) code base, we have a chance to ensure that it stays lean and performant for it's users, which are also ourselves for the future of Shepherd.

## Smaller Size

Getting back to the point on overall size. For implementors of Shepherd, we find it important to make sure we're able to ship a library that adds only what is needed to provide the Tour API and allow engineers to create rich experiences with small impact on their application's performance. We think we've done quite a bit by reducing the overall bundle size down to `~15kb (min + gzip)` and removing any other dependecies other than Tether.

## Website Update

![Image of Latest Shepherd Website](/img/blog/shepherd6-site4.png)

Since we've continued to build on improving the library, we decided to work with the team at [make&model](https://www.makemodel.co) to create branding to help Shepherd be memorable and unique. This now combines the demo site and branding to help show the many benefits of the library and highlight companies already using it. 

We hope this latest release provides a speedy, low impact, and easy to use way to bring application tours to your users! Feedback is appreciated, as always.
