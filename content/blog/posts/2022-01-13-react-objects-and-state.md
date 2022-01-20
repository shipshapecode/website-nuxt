---
authorId: hannakim
categories:
  - javascript
  - react
date: '2022-01-13'
slug: react-objects-and-state
title: 'Handling Objects in React Component State'
---

## Understanding Primitive and Non-Primitive Data Types

Objects are a useful way to store data when you have a set of related values that you will be accessing or updating together within a given component. To understand how they are used in React, taking a deeper dive into its data type can be helpful.

A [primitive data type](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), like a number or string, holds a value and therefore is inherently immutable.

```js
let greeting = 'hello'
let hello = 'hello'
greeting === hello

// Returns true
// These 2 variables hold the same primitive data as values. If a variable is reassigned, it would take on a different value.
```

Objects are non-primitive data and have a value as well as an identity. When an object is assigned to a variable, that variable acts as a reference point to the object's identity. Each object is unique, even if their properties might be identical.

```js
const greeting = { text: 'hello' }
const hello = { text: 'hello' }
greeting === hello

// Returns false
```

While primitives can’t change value without changing reference, objects can change value and **still hold onto its identity**. So two seemingly similar objects are actually two entirely distinct entities to JS.

![The boxes, aka objects, may look the same but are considered unique](/img/blog/cookie-boxes.jpeg)

You can think of an object as a box and its properties as anything you put inside the box. You might put 10 chocolate chip cookies into each box, but they’re still distinct boxes from one another.

## Three Ways to Update Objects with `useState`

[Data in state should be treated as immutable](https://beta.reactjs.org/learn/updating-objects-in-state) - the values should not be mutated directly, but instead be replaced with a new one. The corresponding `set` method is then called with a new object in order for the change to occur.

This may not seem immediately obvious with objects, since properties of an object *can* technically be updated. However, when you try to handle the change this way with React, it might not update your UI as you’d expect.

```js
const [user, setUser] = useState({ name: '' })
const handleChange = (e) => {
   e.preventDefault()
   user.name = e.target.value
}

return (
  <>
    <label>
      Name: <input type="text" value={user.name} onChange={handleChange} />
    <label>
    <p>{user.name}</p>
  </>
)
```

This is because re-renders in React are triggered whenever a change in state is detected. React’s virtual dom looks for a new reference and checks if it is the same as the old one. In this scenario, a re-render is **not** triggered because while the value of the object changes, its identity is still the same.

You have several options to properly update data stored as objects in React state. Your implementation will depend on the complexity of the component you are creating.

### Create and Pass a New Object

```js
 // Instead try:
   const input = {}
   input.name = e.target.value
   setUser(input)

 // Or:
   setUser({ name: e.target.value })
```

Both these solutions create a brand new object that is being passed to replace the current state, instead of directly mutating the existing state. Directly manipulating `user.name` does not work because it does not trigger a re-render.

### Use the Spread Operator

You’re likely using an object because you have multiple pieces of data you want to store and use within state. In the below example, you may only want to manipulate one input at a time in a re-render. The spread operator facilitates this by unpacking existing properties of an object. Any consequent values are updated.

```js
const [user, setUser] = useState({ name: ‘’, age: 0 })
const handleInputChange = (e, prop) => {
  setUser({
    ...user,
    [prop]: e.target.value
  })
}

return (
  <>
    <label>
      Name:
      <input
        value={person.name}
        onChange={(e) => handleInputChange(e, 'name')}
      />
    </label>
    <label>
      Age:
      <input
        value={person.age}
        onChange={(e) => handleInputChange(e, ‘age’)}
      />
    </label>
    <p>
      {user.name}: {user.age}
    </p>
  </>
)
```

### Use a Library

If you find yourself using multiple objects or in your state, it may be worth it to install a library like [immer](https://github.com/immerjs/use-immer). Immer provides a proxy object, referred to as a `draft`, so while your code appears similar to a direct mutation of state, a copy is created under the hood when an update when immer is used.

#### Why Won’t Object.assign() Update State?

The `Object.assign()` method takes 2 arguments - a `target` and at least one `source` and returns the `target` after copying the `source`s’ properties. [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) won’t trigger a re-render unless the `target` provided is a brand new object. When the `target` is the original object, it still has the same identity, similar to updating a property directly. At this point, the syntax gets clunkier too, so it is likely easier to read without this additional method.

```js
// This would not update state
setUser(Object.assign(user, userName))

// You’d still need a reference to a new object for this to update
setUser(Object.assign({}, user, userName))
```

## So When Should an Object Be Used in State?

Following basic programming principles, break down state into “atoms” and use simpler values (primitives) when possible.

When values in a component are unrelated, it’s also helpful to separate instances of useState to visually signal your intentions. A user altering their name or age probably will not affect one another and therefore it makes more sense to be stored in 2 separate instances of `useState`. This helps simplify the component logic so that it is easier to read the overall logic as well.

```js
const [name, setName] = useState(‘’)
const [age, setAge] = useState(0)

return (
  <>
    <label>
      Name:
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
    <label>
      Age:
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </label>
    <p>
      {name}: {age}
    </p>
  </>
);
```

When you have [three or more values](https://thoughtspile.github.io/2021/10/11/usestate-object-vs-multiple/) you need to keep track of, your app can yield better runtime performance with a single object state than numerous instances useState. This approach may be better for something like a form with many inputs. When you have something like a controlled form component with many inputs that will all get saved or updated to one API, it may make visual sense to store these data in one object since they will reuse the same logic.

However, keep in mind that the runtime is still largely efficient, so if there is no problem, it may not be worth optimizing for this. When you have multiple state setters called one after the other in a single synchronous method, React will process them in one tick and run only one re-render.

As you can see, there are numerous ways to solve one problem - the tricky part can be to figure out what makes the most sense for your application. [Contact the Ship Shape team](https://shipshape.io/contact/) to help you find the best solution for your next project.
