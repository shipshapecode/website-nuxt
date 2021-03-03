---
authorId: r0bc4ry
categories:
  - javascript
  - webstorm
date: '2021-03-05'
slug: webstorm-tips-for-javascript-developers
title: WebStorm Tips for JavaScript Developers
---

I’ve been using IntelliJ’s suite of developer tools for nearly 10 years and love how approachable they make complex development tasks. WebStorm’s features tend to fill gaps in my workflow and help boost my productivity. From source control to debugging, WebStorm is a complex piece of software with an immense amount of features - so I wanted to help shed some of the complexity for you and share some of the features I use most often. This definitely isn’t meant to be an exhaustive list, but does include the essentials I use that I hope can help you with your own development.

## Searching and finding files

A task we all do constantly, WebStorm makes finding what you're looking for simple. A quick double tap of ⇧ will search everywhere in your project for a file, class, action, and even through the WebStorm settings. If you already know the name of the file you’re looking for, Ctrl+Shift+N (⇧⌘O) will open a search window specifically by filename.

![Search](/img/blog/webstorm-tips-for-javascript-developers/image4.png)

Another useful way to search, is within a specific directory. This is great if you’re using a monorepo or if you’re working within a route and/or component and just want to search in that specific section of the app. To do this, simply select a directory in your project view sidebar and then use Ctrl+⇧+F (⇧⌘F) to open a window filtered to search within the selected directory.

Find and replace are two other essential tools developers use daily and WebStorm includes support for some advanced features such as case sensitivity and regex. Using a regex can make your life much easier when trying to capture and preserve certain unique phrases in a find and replace (such as changing a function name but keeping unique params for each). When using regex, capture groups can then be referenced in your replace string with $1, $2, etc. to map the captured text to your new string.

## Source code navigation

WebStorm makes reading through existing code a breeze. Just use Ctrl+Click (⌘+Click) on a variable or function name to easily trace its definition. This is great for debugging, especially when traversing libraries or other code you might not be familiar with, as you can follow the code path right from where you’re reading.

![Source code navigation](/img/blog/webstorm-tips-for-javascript-developers/image6.gif)

## Code reformat and optimize imports

I can be a bit of a perfectionist when it comes to my code formatting, especially when working within larger teams. Luckily WebStorm makes it easy to keep code formatted with automatic reformatting. You can do this by either selecting Code | Reformat Code or pressing Ctrl+Alt+L (⌥⌘L). This feature is also customizable through the Code Style settings or with a .editorconfig file to match the code formatting style your team is using.

Another tool that I often utilize is automatic optimizing of imports. This can be done with either Code | Optimize Imports or Ctrl+Alt+O (⌥⌘O). This feature will remove any unused imports, merge multiple imports from the same file, and sort imported members by name. Another very useful hack to keeping code more readable and maintainable.

## Prettier

Speaking of code reformatting, my suggestion is to just use Prettier. Prettier is an opinionated code formatter so you, and your team, don’t have to argue about single vs. double quotes and can just focus your project. The best part is WebStorm has integrated support for Prettier that can be triggered on code reformat and/or on save. To add Prettier support, simply install it to your project with npm install --save-dev --save-exact prettier and then enable it in WebStorm via Preferences | Languages & Frameworks | JavaScript | Prettier. While it might not be for everyone, Prettier allows me to focus more on the project and forget about formatting.

![Prettier](/img/blog/webstorm-tips-for-javascript-developers/image1.gif)

## Running scripts from package.json

If you’re working on a project and don’t remember what to run to start your project or not sure how to to set up your WebStorm run configuration? Just open your package.json and click the green arrow(s) next a script and WebStorm will automatically create a run configuration for you. This makes setting up your configurations, running, debugging, and stopping your app from the top right of WebStorm easy. No need to worry about configuration as WebStorm handles it for you.

![Run](/img/blog/webstorm-tips-for-javascript-developers/image2.png)

## Viewing git diff, changed files, and rollback

I think WebStorm’s git handling is one place it really shines. While I still mostly use terminal for commits, pushing, and pulling - things like viewing diff history, merging, and showing changes  are vastly easier inside WebStorm. Allowing you to do things like compare file changes without the need to open to a pull request.

Viewing all the currently changed files in your project is as simple as changing the dropdown in the Project sidebar from “Project” to “All Changed Files”. This is great for seeing if you left debug code in other files that you don’t want to commit, especially when a lot of files have been changed.

![git](/img/blog/webstorm-tips-for-javascript-developers/image3.png)

Another great tool is Show Diff, which allows you to compare your local file changes to the original version. It is available by right clicking on a changed file and then Git | Show Diff. Another similar tool is Git | Show History showing a more in depth view of your git file changes over time - which you can even use to compare against your local file. The final git history tool I use regularly is Git | Show History for Selection which is very similar to Show History, but allows you to view changes to a particular section of code; great if you’re running into an issue stemming from a change inside a specific block.

And finally, my final essential git tool is Git | Rollback. For those times you want to reset changes you’ve made to a file without resetting all changes to your local, just right click a file and roll it back.

## Refactor function and variable names

When working on code there’s sure to be times you’d like to rename a variable or function. And while find/replace can usually handle this, sometimes your names overlap with each other and find/replace can become messy. Luckily WebStorm provides an easy way to refractor a name by right clicking on it and then selecting Refactor | Rename… which will let you change the name of your variable/function and all references to it intelligently.

## Scratch files

If you’re ever working on something that you didn’t want to save or copy/pasting temporary data, scratch files are a simple addition to your workflow. Scratch files are temporary files that maintain language formatting but aren’t saved (unless you want them to be), allowing you to maintain some snippets while you work. This is great for comparing JSON data or simply moving code around. To create a scratch file using either File | New | Scratch File or the hotkey Ctrl+Alt+Shift+Insert (⇧⌘N) and then pick your filetype or simply plain text for no formatting.

![Scratch files](/img/blog/webstorm-tips-for-javascript-developers/image5.png)

## Multi-cursor editing

What IDE would be complete without muli-cursor editing in 2021? Using Alt+Click (⌥+Click) you can create multiple cursors to allow for quick editing of multiple locations simultaneously.

## Conclusion

And that’s it! WebStorm is an incredibly powerful IDE and this list barely scratches the surface of what it’s capable of. Hopefully you learned something you didn’t know and these tips can help speed up your development cycle. The best thing I’ve found is if you find yourself repeatedly running into any annoying situation, just Google “WebStorm + [your issue here]” and there’s probably a solution waiting for you.

