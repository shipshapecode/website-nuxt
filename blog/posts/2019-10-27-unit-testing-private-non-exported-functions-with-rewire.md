---
authorId: rwwagner90
categories: 
  - testing
date: '2019-10-27'
nextSlug: shepherd-popper-to-tether
nextTitle: 'There and Back Again - Popper to Tether'
previousSlug: ember-data-passing-query-params-to-save
previousTitle: Ember Data | Passing query params to .save()
slug: unit-testing-private-non-exported-functions-with-rewire
title: Unit Testing Private, Non-exported Functions with Rewire
---

When a JavaScript function is exported, it is straightforward to unit test. 
We can import it directly into our test and test the functionality. For example,
we could use something like Jest to setup a simple import and unit test.

## Exported

```js
// exported.js

export function foo() {
  return 'bar';
}
```

```js
// exported.spec.js

import { foo } from './exported.js'

describe('Exported', () => {
  describe('foo', () => {
    expect(foo()).toBe('bar');
  });
});
```

How would we test functions that we do not expose via `export` though?

There is a great tool, [rewire](https://www.npmjs.com/package/rewire), that allows getting references 
to functions that are not explicitly exported. Assuming you are using Babel, we can use 
[babel-plugin-rewire](https://github.com/speedskater/babel-plugin-rewire) to make the setup more simple.

```bash
  npm install babel-plugin-rewire --save-dev
```

Then we need to add it to our plugins for testing, in our `babel.config.js`.

```js
...
plugins: [
  'babel-plugin-rewire',
  ...
]
...
```

We can then import the whole file, and get references to the non-exported functions, using
`__get__`.

## Private / Non-exported

```js
// private.js

function _foo() {
  return 'bar';
}
```

```js
// private.spec.js

import Private from './private.js'

describe('Private', () => {
  describe('_foo', () => {
    const _foo = Private.__get__('_foo');
    expect(_foo()).toBe('bar');
  });
});
```

Rewire makes this setup downright magical, and saves us from needing to needlessly export things
or use other hacks, just to get a reference to the function for testing. We can now ensure functions
remain private, without all the headaches at testing time!
