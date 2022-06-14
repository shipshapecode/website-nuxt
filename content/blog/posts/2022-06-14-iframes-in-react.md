---
authorId: r0bc4ry
categories:
- react
- javascript
date: '2022-06-14'
slug: dynamic-iframes-in-react
title: 'Dynamic Iframes in React'
---

## Background Info

On a recent client project, I was asked to create a login modal utilizing an `<iframe>` inside a modal pointing at the app's existing login page. For a number of tech reasons, this solution made sense vs. just creating a conventional login form component inside the modal. The main concern was keeping the experience as seamless as possible and to avoid looking like an iframe inside the modal.

## The Setup

So I set out creating a basic modal and adding the iframe. This component was meant to be page agnostic, so I wanted to leave the call-to-action to open the modal flexible. To achieve this, I surrounded any `children` of the component in an invisible button. With this, any page this component would sit on could utilize any button, link, image, etc. to open the modal.

**SCSS**

```scss
.transparentButton {
  all: unset;
}
```

**JavaScript**

```javascript
import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./my-component.module.scss";

const MyComponent = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className={styles.transparentButton}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {children}
      </button>
      
      <Modal isOpen={modalOpen}>
        <iframe 
          src="/login" 
          frameBorder="0" 
          height={} 
          width={} 
          scrolling="no" 
        />
      </Modal>
    </div>
  );
};

export default MyComponent;
```

And this completed the basic setup - a component that could take a call-to-action, open a modal, and load our existing login page within an iframe.

## Dynamically Handling Iframe Height

But what about the width and height of the iframe? Because the underlying login page could change in the future, I wanted this to be handled dynamically. This would avoid needing to update the modal every time a content or style change happened on the login page. Luckily the width is easy, it's always 100% - but the height was a little more difficult. My solution was to utilize a `ResizeObserver` on the `<main>` element of the login page inside the `onLoad` event of the iframe. This method would require no changes to the login page and would notify my component of height changes with events without using any polling.

```javascript
import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./my-component.module.scss";

const MyComponent = ({ children }) => {
  const [iframeHeight, setIframeHeight] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className={styles.transparentButton}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {children}
      </button>

      <Modal isOpen={modalOpen}>
        <iframe
          src="/login"
          frameBorder="0"
          height={iframeHeight}
          width="100%"
          scrolling="no"
          onLoad={event => {
            const { contentWindow } = event.target;
            const main = contentWindow.document.body.querySelector("main");

            // Because the login form has a dynamic height, observe any size changes and update the iframe height
            const resizeObserver = new ResizeObserver(entries => {
              entries.forEach(entry => {
                setIframeHeight(entry.contentRect.height);
              });
            });

            resizeObserver.observe(main);

            // When the iframe is hiden (i.e. modal is closed), remove any listeners
            const onVisibilityChange = () => {
              resizeObserver.disconnect();
              contentWindow.addEventListener("visibilitychange", onVisibilityChange);
            };

            // Add listener for when iframe is hiden (i.e. modal is closed)
            contentWindow.addEventListener("visibilitychange", onVisibilityChange);
          }}
        />
      </Modal>
    </div>
  );
};

export default MyComponent;
```

## Iframe Communication

So now our modal opens, loads our page, and dynamically sets the height of the iframe to keep it a seamless experience to the user. But how does our component know once the user has logged in? This is where `postMessage()` comes in handy! It will require a small update to our login page, but we'll simply add a statement to post back to the parent page on login and catch that message inside our component.

**Parent Page**

```javascript
// Within our parent page source code, we'll need to add the following line
window.parent.postMessage("onLogin", window.location.origin);
```

**MyComponent**

```javascript
import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./my-component.module.scss";

const MyComponent = ({ children }) => {
  const [iframeHeight, setIframeHeight] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const onLogin = () => {
    setModalOpen(false);
    // TODO Update parent page with authenticated user data
  };

  // Listen for `onLogin` message from login page
  useEffect(() => {
    const onMessage = event => {
      if (event.data === "onLogin") onLogin();
    };

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <div>
      <button
        className={styles.transparentButton}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {children}
      </button>

      <Modal isOpen={modalOpen}>
        <iframe
          src="/login"
          frameBorder="0"
          height={iframeHeight}
          width="100%"
          scrolling="no"
          onLoad={event => {
            const { contentWindow } = event.target;
            const main = contentWindow.document.body.querySelector("main");

            // Because the login form has a dynamic height, observe any size changes and update the iframe height
            const resizeObserver = new ResizeObserver(entries => {
              entries.forEach(entry => {
                setIframeHeight(entry.contentRect.height);
              });
            });

            resizeObserver.observe(main);

            // When the iframe is hiden (i.e. modal is closed), remove any listeners
            const onVisibilityChange = () => {
              resizeObserver.disconnect();
              contentWindow.addEventListener("visibilitychange", onVisibilityChange);
            };

            // Add listener for when iframe is hiden (i.e. modal is closed)
            contentWindow.addEventListener("visibilitychange", onVisibilityChange);
          }}
        />
      </Modal>
    </div>
  );
};

export default MyComponent;
```

And that's it! We now have a page agnostic login modal that utilizes the app's existing login page. Now this component could be used by any developer, on any page, without outside dependencies.

## Future Updates

There are a couple features missing here that should be taken into consideration before launching to production. Namely, while the iframe is loading what should be shown to the user and what should happen if the iframe has an error while loading? But luckily, with this setup both of those are pretty trivial and mostly come down to UI/UX. A simple `isLoading` state could be used to show/hide a loader and the iframe's built-in `onError` event could be used to handle any loading issues.

As always, thanks for reading, and I hope this helps you out!
