---
authorId: rwwagner90
categories:
  - devtools
date: '2022-05-19'
slug: five-tips-to-improve-your-terminal-experience
title: 5 Tips to Improve Your Terminal Experience
---

We've come a long way from the stereotypical terminals seen in the movies with
the default black backgrounds with green text on them, and developers furiously
slinging commands from memory all on an eight inch screen.

There are now lots of great options for improving both the style and functionality
of your terminal, to provide you with the best development experience possible.

# Fish

[![ASCII art depicting a fish](/img/blog/five-tips-to-improve-your-terminal-experience/fish.png)](https://fishshell.com/)

One of the biggest improvements to my experience in the terminal was from switching from `bash` to
[fish](https://fishshell.com/). Fish upgrades your terminal with features like autosuggestions, that
remember commands you have run before and try to auto complete them for you, and automatically
generates auto completes for other utilities by parsing their man pages, neat!

# Starship

<a href="https://starship.rs/">
  <video muted="muted" autoplay="autoplay" loop="loop" playsinline="" class="demo-video">
    <source src="/video/demo.webm" type="video/webm"> 
    <source src="/video/demo.mp4" type="video/mp4">
  </video>
</a>

<br/>

[Starship](https://starship.rs/) is a cross-shell prompt that is blazing-fast, and infinitely customizable.
It is built in Rust, which gives it best-in-class speed and safety, to make your prompt as quick and reliable
as possible. Out of the box it shows you things like what git branch you are on, what version of node, Rust, etc
you are using, how long commands took to run, and so much more!

# MonoLisa

[![Demo showing the look and feel of the MonoLisa font](/img/blog/five-tips-to-improve-your-terminal-experience/monolisa.png)](https://www.monolisa.dev/)

Yes, this font costs money, and yes it is worth spending money on. There are a lot of nice free fonts
out there, and I personally used [Input](https://input.djr.com/) before, but there is just something special about [MonoLisa](https://www.monolisa.dev/)
that cannot be put into words.

# Hyper

The built in terminal on Mac is decent, and has been getting some updates, but it usually lags
behind in terms of features. [iTerm](https://iterm2.com/) is another popular option, and new players to the space
like [Warp](https://www.warp.dev/) promise all kinds of new and exciting features.

However, my current gold standard for terminals is [Hyper](https://hyper.is/). I have been using it for many years
and it was built by the folks at [Vercel](https://vercel.com/), who you may have heard of.

# asdf

[![A terminal window showing the current node and ruby versions installed via asdf](/img/blog/five-tips-to-improve-your-terminal-experience/asdf.png)](https://asdf-vm.com/)

If you have worked on multiple different projects, throughout your career, odds are you have encountered a
need to switch `node`, `ruby`, etc. versions depending on the project. There are several independent tools that
exist for managing versions of these tools like [nvm](https://github.com/nvm-sh/nvm) and [rvm](https://rvm.io/)
but I have recently been opting more for an all-in-one solution [asdf](https://asdf-vm.com/).

`asdf` supports auto switching versions of tools as you change directories in your terminal, so if you
create a `.tool-versions` file and specify the versions there, you can magically use the correct
versions for every project, as soon as you `cd` into that directory! 🎉
