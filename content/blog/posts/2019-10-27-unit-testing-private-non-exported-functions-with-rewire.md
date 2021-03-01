---
authorId: rwwagner90
categories: 
  - testing
date: '2019-10-27'
slug: unit-testing-private-non-exported-functions-with-rewire
title: Unit Testing Private, Non-exported Functions with Rewire
---

When a JavaScript function is exported, it is straightforward to unit test. 
We can import it directly into our test and test the functionality. For example,
we could use something like Jest to setup a simple import and unit test.

```js
// foo.js

export function foo() {
  return 'bar';
}
```

```js
// foo.spec.js

import { foo } from './foo.js'

describe('Foo', () => {
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

```js
// bar.js

function _bar() {
  return 'baz';
}
```

```js
// bar.spec.js

import Bar from './bar.js'

describe('Bar', () => {
  describe('_bar', () => {
    const _bar = Bar.__get__('_bar');
    expect(_bar()).toBe('baz');
  });
});
```

Rewire makes this setup downright magical, and saves us from needing to needlessly export things
or use other hacks, just to get a reference to the function for testing. We can now ensure functions
remain private, without all the headaches at testing time!
