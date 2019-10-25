---
authorId: rwwagner90
categories: 
  - typescript
date: '2019-08-06'
nextSlug: shepherd-4-a11y-ie11-preact
nextTitle: 'Shepherd 4.0: a11y, IE 11 support, and Preact Components'
previousSlug: shepherd-popper-to-tether
previousTitle: 'There and Back Again - Popper to Tether'
slug: exporting-typescript-imports
title: 'Exporting Imported TypeScript Types'
---

Over the last few months we have been working hard on [Shepherd.js 4.0](../shepherd-4-a11y-ie11-preact). 
During that time, one of the changes was adding type definitions for our classes, so those using 
TypeScript could benefit from them. We logically kept our types in separate files, i.e. the types 
for `tour.jsx` lived in `tour.d.ts` etc. This was great, and we thought was working as intended, 
but while working on [angular-shepherd](https://github.com/shipshapecode/angular-shepherd), which uses 
TypeScript, I noticed `tourObject: Shepherd.Tour = null;` was throwing errors like: 
`'Shepherd' only refers to a type, but is being used as a namespace here.`.

This left me stumped, so I opened up our original `Shepherd` type definition to poke around.

```ts
import Tour from './tour';
import Evented from './evented';
import Step from './step';

declare abstract class Shepherd extends Evented {
  static Tour: { new(options?: Tour.TourOptions): Tour };
  static Step: { new(tour: Tour, options: Step.StepOptions): Step };
  static Evented: { new(): Evented };
}

export default Shepherd;
```

After poking around a bit, it seemed the issue was we were only exporting a class here, and
not a namespace, so I thought "great, I can just add the namespace!", but when I tried I hit
a wall on how to import the types from separate files, and export under one namespace. 

After hours of making very little progress, I reached out to [James C. Davis](https://twitter.com/jamscdavis), our resident 
TypeScript expert, for help. He enlightened me on how to import and re-export a type, 
which there seem to be very few examples of online, so I wanted to quickly show how it is done.

```ts
import _Evented from './evented';
import _Step from './step';
import _Tour from './tour';

declare class Shepherd extends _Evented {
  activeTour?: _Tour;
}

declare namespace Shepherd {
  export import Step = _Step;
  export import Tour = _Tour;
}

export default Shepherd;
```

It turns out you can use `export import` to export an imported type again. Who knew! I hope this
can save anyone struggling with the same problem hours of troubleshooting! 🙂
