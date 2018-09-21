---
layout: post
title: Static site from scratch
catch: Would you like to laugh at me, because I'm so pigheaded, that just didn't want to use WordPress and gave myself a lot of trouble? 
readon: Go ahead
categories: blog
type: blog
---

I was gonna make my own site, with CV and projects. No blog. Why it ended up with a blog (and without a CV) is a different story, I'll tell it later. By the way, for the same reasons I couldn't just use WordPress (I didn't realise it back then, just wanted everything to be simple, and what is simpler than static pages?). But enough philosophy for today! 

### Appearance

By far the hardest part is design. A professional developer has few options here:

1. [ignore it](http://www.cs.princeton.edu/~bwk/) --- works best for [unix beards](http://www.usenix.org.uk/content/unix_beards.html)
2. make by himself (surely, a professional developer can learn HTML and CSS!)
3. use an existing template

I’ve done some pages by myself at the university, and remember the results quite well. So, I’ve chosen the third option. I wanted a clear and minimalistic theme, partly in attempt to follow the fashion (probably set by unix beards) and partly because I wouldn't be able to accomodate a more elaborate template for mу needs. 

There are a lot of templates [here](http://themeforest.net), including many “minimalistic” ones. They all... strange. I just don't get it, when people call “minimalistic” pages like [this](http://www.bluthemes.com/themes/breeze/) or [that](http://www.subsolardesigns.com/impacto/index.html). 

I’ve spent a week before realising a simple idea:

> For minimalism, ask minimalists.
 
Armed with this wisdom, I started searching on geekish blog engine sites. Here is a couple of places, where you can find a theme (sometimes for free), which doesn’t cause the desire to turn off images and disable JavaScript:

* [Ghost Marketplace](http://marketplace.ghost.org)
* [Jekyll Themes](http://jekyllthemes.org)
* [Jekyll Sites](https://github.com/jekyll/jekyll/wiki/Sites)

I’ve found a theme I like (kind of). I still needed to do a lot of tuning (this job continues, and I have a feeling, that it will never end). Some sites to help with tuning:

* [Google Fonts](https://www.google.com/fonts) --- for fonts
* [Adobe Kuler](https://kuler.adobe.com) --- for colours 

### Engine and hosting

Of course, static pages ought to be generated dynamically. The answer is [Jekyll](http://jekyllrb.com). There are other generators, but who cares --- Jekyll is great! As for hosting, there are [few options](http://jekyllrb.com/docs/deployment-methods/), the most reasonable ones:

1. [Github Pages](https://pages.github.com) --- the easiest way, but it kills the fun. I use Jekyll to feel the ultimate power, not to be told, which plugins I can use (none).
2. [Amazon S3](http://aws.amazon.com/s3/) --- the best creation of Amazon (after Amazon), and my choice. Not an option, if you’re a [Richard Stallman](http://stallman.org/amazon.html).

Here is a good article: “[Static website on S3, CloudFront and Route 53, the right way!](http://www.michaelgallego.fr/blog/2013/08/27/static-website-on-s3-cloudfront-and-route-53-the-right-way/)”. One thing, which is missing:

    s3cmd sync --delete-removed _site/ s3://BUCKET/

This command synchronises site with S3 bucket, and that’s all I need ("s3_website" failed to build on my Macbook). By the way, at first I tried to use my registrar’s DNS instead of Route 53. But performance tests showed, that DNS request takes about half of the total loading time. It spoiled my mood, so I decided, that 50c/month is affordable. 

### Comments

[A Blog Without Comments Is Not a Blog](http://blog.codinghorror.com/a-blog-without-comments-is-not-a-blog/) (actually, I've never fully read this post, because the message is obvious to me, and it is boring to read about obvious things).

I wanted an open source solution, but it turned out, that there are not many options:

1. [Discourse](http://www.discourse.org) --- I tried it, it is great (and almost ready)! But I hit a couple of problems. Hope they'll fix them soon.
2. [Juvia](https://github.com/phusion/juvia) --- I doesn’t like how it looks
3. [Jekyll Static Comments](https://github.com/mpalmer/jekyll-static-comments) --- looks like this thing is made by static site zealots. It implies rebuilding the site for each comment manually. A strong contender for “Kludge of the Year” award.
4. Plethora of PHP scripts, each of which is disgusting

So, I decided to keep down my appetite (for a while) and use [Disqus](http://disqus.com). But if I choose to migrate to a standalone solution at some point, I will use [Digital Ocean](https://www.digitalocean.com) to host it. They lack Amazon’s infrastructure, but they keep things simple, their droplets are very fast and, most importantly, much cheaper, than Amazon's EC2. How can a startup beat allmighty Amazon in both price **and** performance?!

The end. This post is meant to show the big picture of what to do, and give hints to where to find the details. Hope, it helps. 
