---
authorId: hannakim
categories: 
  - '2022'
  - web accessibility
  - nuxt.js
  - a11y
date: '2022-07-01'
slug: accessibility-basics
title: 'Building (or Rebuilding) a Website with Accessibility in Mind'
---

| ![AOL landing page from 1999, comprised of mostly low-resolution graphic ads and blue underlined links to different parts of the web](/img/blog/AOL-1999.png) |
|:--:|
| *Remember this beauty?* |

Websites have come a long way since HTML and CSS were the only tools available to build them. So has design sense-- companies want to express their brand's identity using the latest technologies to create dynamic content that catches and maintains their users' attention. In order to ensure everyone is able to use your website, it is important to make sure the underlying structure of each page is set up in a way that works with the different devices and tools people may be using to interact with them.

## Navigating a Modern Website with Accessibility Tools

| ![shipshape.io landing page, newly updated this past year](/img/blog/shipshape-home.png) |
|:--:|
| *How do you process the content on this landing page?* |

A visual flow that may instantly make sense for those of us with normal vision and the ability to navigate the GUI with a mouse/trackpad may lead to a vastly different navigational experience for someone without those abilities. Some folks may rely on tools like a screenreader or keyboard to be able to access the digital world. These tools rely on software engineers to create apps with proper DOM structure so their users can to get to the information they need quickly and efficiently.

## Generate the DOM Structure First

| ![shipshape.io landing page marked up with arrows starting at the header and zig-zagging across the page to each text area](/img/blog/shipshape-home.png) |

If you are not visually impaired, chances are likely that your eyes jumped to scan each header on the page, starting at the top left. You might have next read a section of body copy, if the header caught your interest. Though your focus may have been on the text, your eyes concurrently processed the two images of our mascot at work "building" apps, which are opposite each segment of copy. You could likely skim through the buttons made up of tech logos on the bottom right-hand corner of the page. 

Someone without those same abilities could have a fairly similar experience if the page is built with their experience in mind. Based on our abilities as able-bodied developers, our instinct may be to add elements as we see them on a design spec. When building with accessibility in mind, a good rule of thumb is to start by thinking of what elements should be on the page *without* any of the design. Create the scaffolding for the content, then add any styling afterwards to add in the creative touches that differentiate your page.

## Basic Considerations for A11y 

Here are a few things to pay attention to so you can jump-start accessibility for your web application.

### Order Elements in Each Section Properly:

Let's take a closer look at this section of our page:

| ![Section of shipshape.io with an image taking up the left half of the section and a header and two paragraphs making up the right half](/img/blog/image-before-header.png) |

```
<div>
  <img />
  <h1>Title</h1>
  <p>some body copy</p>
</div>
```

vs

```
<section>
  <div>
    <h1>Title</h1>
    <p>some body copy</p>
  </div>
  <div>
    <img>
  </div>
</section>

```

### Use Semantic HTML

H-tags are a good starting point for organizing into sections. There are many other semantic HTML elements
(link MDN) 

Don’t change roles? e.g. instead of div role button use a button 
This helps navigate the page, especially when primary access is keyboard 
(Organize?) KEYBOARD NAVIGATION

### Use Proper H-Tags

Web browsers, plug-ins, and assistive technologies rely on semantic HTML to direct their users to where they want to get on a page

https://usability.yale.edu/web-accessibility/articles/headings#:~:text=Benefits%20of%20Headings,-Organizing%20web%20pages&text=Making%20texts%20larger%20helps%20guide,can%20also%20benefit%20from%20headings
https://www.w3.org/WAI/tutorials/page-structure/headings/

Don’t skip headings for sizing purposes - alter your CSS to meet your design needs
e.g. using H1 then H5 because you pre-set your css styles to signify certain headers
Don’t use bold instead of a headline

If the underlying code for a pages headings is correct, screen reader users can also benefit from headings. Screen reader users can navigate a page according to its headings, listen to a list of all headings, and skip to a desired heading to begin reading at that point. Screen reader users can use headings to skip the repeated blocks of content like headers, menus, and sidebars, for example.

An anti-pattern for using h-tags is to set each header to a certain set of characteristics. This promotes using headers out of order. Consider the DOM first and use headers in the proper semantic order, and add styling afterwards if you need it to be a certain size, weight, color, etc.

```
h1 {
 font-weight: bold;
 font-size: xx-large;
}

h2 {
  font-size: medium;
}

h3 {


}
```

### Use Descriptive Language

Especially for interactive elements 

“View case” vs “download the pdf tools”
[IMAGE] - before & after of “view case” buttons
Is there an example within shipshape website?
Maybe this can be my open source work for June too — updating some view case buttons

https://web.dev/link-text/ - list of generic text [grab SS from lighthouse or get link directly from there]
bonus: designing with accessibility in mind is important to make the web more accessible to all users. this boosts SEO too - helps search engines understand what a site is about


## Tools to Help You Develop an Accessible App

Depending where you are on your journey with accessibility, it may feel like a lot of additional work to incorporate. Here are some tools that can help you break things down into more manageable steps:

### Lighthouse Chrome Extension
[Google Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) is a good starting place to get a general idea of how your current web app scores for accessibility. This developer tool is available for Chrome-based browsers as well as [Firefox](https://addons.mozilla.org/en-US/firefox/addon/google-lighthouse/). Lighthouse scans through your web app and offers a rundown of what is and isn't accessible. It can also measure your app's quality for load speed and search engine optimization. Keep in mind scoring 100% does *not* necessarily mean your site is perfectly accessible- manual tests are recommended to fix any gaps the tool may have missed.

### Color Contrast Checkers
Lighhouse will let you know about sections of your website that pass/fail color contrast. You can quickly determine at what colors and sizes for text and background color combinations work while designing with contrast checkers like 
Primary contrast should pass for different types of colorblindness? Visual ability?
Hover/etc don’t necessarily need to all pass contrast test as long as you have other cues that someone is over a link for example (e.g. by using semantic html)

### HeadingsMap Browser Extension
This is a quick way to see your headers are following the correct hierarchy with `h1` at the top of the page once, `h2` for other headings, and lower h-tags nested within the proper sections.

### Hands-on Testing Your Web App
Last but not least, try accessing your website in different ways to make sure things are working how you intended 
Navigate your page via keyboard only and your device’s built-in assistive technology to see if you get stuck in unintended scenarios, like opening a modal and getting sent back to the top of the page when you close it, or skipping over elements you can normally click on. 

Having accessibility in mind while developing helps keep the web a better experience for a greater set of users online as well as you and your engineering team. Following some basic rules while building new features means less technical debt down the line. 