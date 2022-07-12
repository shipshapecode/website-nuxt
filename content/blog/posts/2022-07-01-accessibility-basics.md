---
authorId: hannakim
categories:
  - nuxt.js
  - a11y
date: '2022-07-11'
slug: accessibility-basics
title: 'Building (or Rebuilding) a Website with Accessibility in Mind'
---

Websites have come a long way since HTML and CSS were the only tools available to build them. So has design sense-- companies want to express their brand's identity using the latest technologies to create dynamic content that catches and maintains their users' attention.

To ensure everyone is able to use your website, it is important to make sure the underlying structure of each page is set up in a way that works with the different devices and tools people may be using to interact with them.

| ![AOL landing page from 1999, comprised of mostly low-resolution graphic ads and blue underlined links to different parts of the web](/img/blog/AOL-1999.png) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                    _Remember this beauty?_                                                                    |

<br><br/>

## Navigating a Modern Website with Accessibility Tools

| ![shipshape.io landing page, newly updated this past year](/img/blog/shipshape-home.png) |
| :--------------------------------------------------------------------------------------: |
|                  _How do you process the content on this landing page?_                  |

<br/>

A visual flow that may instantly make sense for those of us with normal vision and the ability to navigate the GUI with a mouse or trackpad can be a vastly different experience for someone without those abilities.

Some folks may rely on tools like a screen reader or keyboard to be able to access the digital world. These tools rely on software engineers to create apps with proper DOM structure so their users can to get to the information they need quickly and efficiently.

## Generate the DOM Structure First

<br/>

![shipshape.io landing page marked up with arrows starting at the header and zig-zagging across the page to each text area](/img/blog/shipshape-home-arrows.png)

If you are not visually impaired, chances are likely that your eyes jumped to scan each header on the page, starting at the top left. You might have next read a section of body copy, if the header caught your interest. Though your focus may have been on the text, your eyes concurrently processed the two images of our mascot at work "building" apps, which are opposite each segment of copy. You could likely skim through the buttons made up of tech logos on the bottom right-hand corner of the page.

Someone without those same abilities could have a fairly similar experience if the page is built with their experience in mind. Based on our abilities as developers without a visual disability, our instinct may be to add elements as we see them on a design spec.

When building with accessibility in mind, a good rule of thumb is to start by thinking of what elements should be on the page _without_ any of the design in place. Create the scaffolding for the content first, then add in the creative touches that differentiate your page.

## Basic Considerations for A11y

Here are some basics to pay attention to so you can jump-start accessibility for your web application:

### Order Elements in Each Section Properly:

![Section of shipshape.io with an image taking up the left half of the section and a header and two paragraphs making up the right half](/img/blog/image-before-header-section.png)

Let's take a closer look at this section of our page. Because most languages read left to right, we start our attention on the left side of the page, which this time, is an image and might start coding like so:

```html
<img />
<h1>Title</h1>
<p>some body copy</p>
```

A header should be the leading element in its section; otherwise it can create confusion for non-GUI users. On shipshape.io, we've used [tailwindCSS](https://tailwindcss.com/docs/order) to help us style something like this easily, using the `order` utility. `order-last` forces the `div` with the header and text to come after the image, like so:

```html
<section class="flex">
  <div class="order-last">
    <h1>Title</h1>
    <p>some body copy</p>
  </div>
  <div>
    <img />
  </div>
</section>
```

### Use Proper H-Tags

Accessibility tools rely on well-organized DOM and content to direct their users to where they want to get on a page. Screen reader users are given the option to listen to a list of headings on a page so they can skip around and get to their desired section for further interaction _without_ going through every single element on the page, line by line.

An anti-pattern for using `h-tag`'s is to set each header level to a certain set of styles and sizes and using them for different text styles through the page. This promotes [using headers out of order](https://www.w3.org/WAI/tutorials/page-structure/headings/). Instead, first make sure your content is organized in proper order, then create the CSS styles to meet your design needs.

#### 🚫 Don't do this! 🚫

<img alt="Section of shipshape.io with blocks of text using 5 different styles: large-font blue header, large-font white header, small, bolded white text within a button, small regular-weight blue body text, and small regular-weight white body text" src="/img/blog/h-tag-don't.png" align="left" style="padding-right: 2rem" />


```css

h1 {
  color: blue;
  font-size: 48px;
}

h2 {
  color: white;
  font-size: 48px;
}

h3 {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

h4 {
  color: blue;
  font-size: 20px;
}

h5 {
  color: white;
  font-size: 20px;
}










```

In the example above, the intention was not to nest each section within each other, therefore we should not be using multiple levels of h-tags to style these elements of text, and instead create the right classes for each set of styles.

### Use Semantic HTML

Is your website suffering from "[divitis](https://csscreator.com/divitis)"? Look for segments of your page that can be converted to [semantic HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), which helps accessibilty tool users differentiate the parts of your page they can navigate. For example, use `<button>` instead of `<div role="button">`, which explicitly describes the element's intended interaction.

### Use Descriptive Language for Interactive Elements

Generic text like "click this" or "link 1" can negatively impact accessibility - think about how a user would be able to know what clicking "this" does, or to what page a user will be directed to by a link. You can alternatively use `aria-label` to describe the link with a short descriptor.

**Bonus:** Using language that clearly communicates what interactive elements like links and buttons do also helps boost your page's SEO rankings. This helps sesarch engines create context for how your content is organized.

## Tools to Help You Develop an Accessible App

Depending where you are on your journey with accessibility, it may feel like a lot of additional work to incorporate. Here are also some tools that can help you break things down into more manageable steps:

### Lighthouse Chrome Extension

[Google Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) is a good starting place to get a general idea of how your current web app scores for accessibility. This developer tool is available for Chrome-based browsers as well as [Firefox](https://addons.mozilla.org/en-US/firefox/addon/google-lighthouse/).

Lighthouse scans through your web app and offers a rundown of what is and isn't considered accessible. It can also measure your app's quality for load speed and search engine optimization. Keep in mind scoring 100% does _not_ necessarily mean your site is perfectly accessible. Manual tests are recommended to fix any gaps the tool may have missed.

### Color Contrast Checkers

Lighhouse will let you know about sections of your website that pass/fail color contrast. You can quickly determine at what colors and sizes of text have enough contrast with their background color by using contrast checkers like [WCAG Color contrast checker](https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf?hl=en) or [Colour Contrast Checker](https://chrome.google.com/webstore/detail/colour-contrast-checker/nmmjeclfkgjdomacpcflgdkgpphpmnfe?hl=en-GB).

Your primary text should have enough contrast to be readable by folks with different types of color blindness. Additional text states like `hover` or `active` don’t necessarily need to pass the contrast test as long as you have other cues that someone is over a link for example (i.e.: by using semantic html 😉). 

### HeadingsMap Browser Extension

[HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en) is a quick and easy way to check if your headers are following the correct hierarchy for page navigation.

### Hands-on Testing Your Web App

Last but not least, try accessing your website in different ways to make sure things are working how you intended. Try going through each of your pages using only your keyboard. Next try with your device’s built-in assistive technology. 

Some common unintended scenarios are skipping over elements you can normally click on, or opening a modal and getting sent back to the top of the page when you close it instead of where you last were.

Having accessibility in mind while developing helps keep the web a better experience for a greater set of users online as well as you and your engineering team. Following some basic rules while building new features means less technical debt to fix these important issues down the line.
