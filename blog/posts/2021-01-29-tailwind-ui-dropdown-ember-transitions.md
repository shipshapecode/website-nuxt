---
authorId: rwwagner90
categories:
  - ember.js
  - javascript
  - tailwindcss
date: '2021-01-29'
nextSlug: simple-docker-postgresql
nextTitle: The Simplest Possible Docker Setup For Postgresql
previousSlug: ember-data-passing-query-params-to-save
previousTitle: Ember Data | Passing query params to .save()
slug: tailwind-ui-dropdown-ember-transitions
title: Tailwind UI Dropdowns with Ember
---

[Tailwind CSS](https://tailwindcss.com/) has exploded in popularity recently,
and so has their paid set of UI components, [Tailwind UI](https://tailwindui.com/).
They have a lot of great components, most of which you can copy and paste into
your project and they will "just work" but whenever an example requires some
JavaScript, things get a little more complex.

For example, one of the Tailwind UI dropdown component examples is:

```html
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative inline-block text-left">
  <div>
    <button
      class="bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      id="options-menu"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <span class="sr-only">Open options</span>
      <!-- Heroicon name: dots-vertical -->
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
        />
      </svg>
    </button>
  </div>

  <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div
    class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
  >
    <div
      class="py-1"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
        >Account settings</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
        >Support</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
        >License</a
      >
      <form method="POST" action="#">
        <button
          type="submit"
          class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          role="menuitem"
        >
          Sign out
        </button>
      </form>
    </div>
  </div>
</div>
```

Notice this part in the middle about the enter/leave transitions:

```html
<!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
```

So not only do we need to support transitions on enter/leave, but each transition
needs to support a `from` and `to` state.

I did some digging and found a framework agnostic solution
[el-transition](https://www.npmjs.com/package/el-transition), and was about to use
it, but then I discovered an Ember specific solution, which fit my needs better,
since my app was using Ember.

The [ember-css-transitions](https://github.com/peec/ember-css-transitions) addon
seemed to fit my use case perfectly. It ships a `css-transition` modifier that
supports all the enter/leave and to/from states we needed.

The end result in Ember was something like:

```hbs
<div class="relative inline-block text-left">
  <button
    class="px-1 rounded transition-colors {{
      if (and this.isShown @showBackground) "bg-main"
    }}"
    type="button"
    {{on "click" (stop-propagation (set this "isShown" (not this.isShown)))}}
    {{on-click-outside
      (set this "isShown" false)
      eventType="mousedown"
      exceptSelector=".options-menu *"
    }}
  >
    {{yield to="trigger"}}
  </button>

  {{#if this.isShown}}
    <div
      class="options-menu absolute bg-menu mt-2 p-2 origin-top-{{
        this.position
      }} {{
        this.position
      }}-0 ring-1 ring-main rounded-md shadow-lg text-menu-text w-44 z-50"
      {{css-transition
        enterClass="transform opacity-0 scale-95"
        enterActiveClass="transition ease-out duration-100"
        enterToClass="transform opacity-100 scale-100"
        leaveClass="transform opacity-100 scale-100"
        leaveActiveClass="transition ease-in duration-75"
        leaveToClass="transform opacity-0 scale-95"
      }}
      {{on "click" (stop-propagation (set this "isShown" false))}}
    >
      {{yield to="content"}}
    </div>
  {{/if}}
</div>
```

This applies all the transitions correctly, and gets us up and running with a
Tailwind UI dropdown! 🎉 You may also have noticed the `on-click-outside` modifier
and the Ember Named Blocks we are using here. More posts to follow going into more
detail on those, but in the meantime hopefully this helps someone with transitions!
