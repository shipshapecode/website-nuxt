---
authorId: r0bc4ry
categories:
- react
- javascript
date: '2022-03-02'
slug: wait-for-page-load-in-react
title: 'Wait for Page Load in React'
---

## What’s the Issue?

I was recently working on a client's landing page that included a large animation on page load. This was implemented as
a CSS animation that would play immediately once the page had rendered. The problem was this animation began very
jittery as the frame rate of the page dropped significantly while the rest of the page continued loading. The remainder
of the page was doing a number of needed async requests and loading a sizable amount of media at the same time,
including a couple looping video files, consuming a decent amount of computer resources while attempting to play the CSS
animation. Obviously, not an ideal first impression on page load.

## My First Attempt

In this case, the CSS animation had no delay and was applied directly to the base styles of the element, so my first
idea was to move the styles for the animation to their own class then dynamically add this new animation class to the
element with `useEffect`. By passing an empty array of dependencies to `useEffect`, the function would only run once
when the component had mounted and rendered - ensuring the component itself was ready to animate. I used a simple state,
set to false by default, to dynamically add the class to the element.

**SCSS**

```scss
.myAnimation {
  animation-name: myAnimation;
  animation-duration: 5s;
}
```

**JavaScript**

```javascript
import { useEffect, useState } from "react";
import classNames from "classnames";

const MyComponent = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    setPlayAnimation(true);
  }, []);

  return (
    <div className={classNames("myComponentClass", { "myAnimation": playAnimation })}/>
  );
};

export default MyComponent;
```

This change delayed the start of the animation by around ~75 milliseconds in my case, and while this slightly improved
the issue, some of the animation was still overlapping with the resource intensive page load. So while better, the
beginning of animation was still plagued by a low frame rate.

## The Solution

To delay the animation further, and ensure no overlap with the rest of the page loading, I decided to fully wait for the
window `load` event before starting the animation. This would wait for all dependent resources (such as stylesheets and
images) to be loaded before my animation started. While this would delay the animation further, it would happen while
the user was waiting for the page to load anyway and would guarantee a smooth animation.

To accomplish this I beefed up the `useEffect` with a `window.addEventListener` and a simple `onPageLoad` function to
set the animation state. Because `useEffect` is called after component render, we need to double-check the window `load`
event has not already fired. To do this I added an if statement before the event listener, checking the readyState of
the document. I also added a return function for the `useEffect`, cleaning up the even listener if the component was
ever unmounted.

**SCSS**

```scss
.myAnimation {
  animation-name: myAnimation;
  animation-duration: 5s;
}
```

**JavaScript**

```javascript
import { useEffect, useState } from "react";
import classNames from "classnames";

const MyComponent = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className={classNames("myComponentClass", { "myAnimation": playAnimation })}/>
  );
};

export default MyComponent;
```

And #BOOM - works like a charm! The `onPageLoad` function waits for the full page load, and then the animation starts
smooth as butter. The important thing to remember with this solution is to clean up the event listener and check the
document readyState; without that check, it is possible our animation would never run if the component was mounted after
the window `load` event had already fired. Hopefully, my work here helps you out! And, as always, feel free to reach out
if you have any comments or questions. Thanks for reading!

