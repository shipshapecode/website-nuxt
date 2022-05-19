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

One of the biggest improvements to my experience in the terminal was from switching from `bash` to 
[fish](https://fishshell.com/). Fish upgrades your terminal with features like autosuggestions, that
remember commands you have run before and try to auto complete them for you, and automatically
generates auto completes for other utilities by parsing their man pages, neat!

# Starship

[Starship](https://starship.rs/)

# MonoLisa

Yes, this font costs money, and yes it is worth spending money on. There are a lot of nice free fonts
out there, and I personally used Input before, but there is just something special about MonoLisa
that cannot be put into words.

# Hyper

The built in terminal on Mac is decent, and has been getting some updates, but it usually lags
behind in terms of features. `iTerm` is another popular option, and new players to the space 
like `Warp` promise all kinds of new and exciting features.

However, my current gold standard for terminals is Hyper. I have been using it for many years
and it was built by the folks at Vercel, who you may have heard of.


# asdf

If you have worked on multiple different projects, throughout your career, odds are you have encountered a
need to switch `node`, `ruby` etc versions based on the project. There are several independent tools that
exist for managing versions of these tools like [nvm]() and [rvm]() but I have recently been opting more
for an all-in-one solution [asdf]().

`asdf` supports auto switching versions of tools as you change directories in your terminal, so if you 
create a `.tool-versions` file and specify the versions there, you can magically use the correct
versions for every project, as soon as you `cd` into that directory! 🎉