---
layout: post
title: Don't use GitHub
catch: You probably like GitHub. We all do. But does your fondness go
readon: too far?
categories: blog
---

OK, use it. But only as your in-house Git servers' mirror, or for throwaways with no real value. And only use it as Git hosting, don't touch wiki, PRs or issue tracking. 

Why?

Because of **the Presumption of defectiveness**:

> Any service found in the Internet is likely broken or will vanish soon.

This way of thinking can keep you out of trouble.

For instance, why use GitHub wiki, if you can write your docs in Markdown or Asciidoc and commit them as files? GitHub manages cross-file links well and shows files just like Wiki pages. What else do you need? 

Linus bestowed Git upon us so we can keep many copies of our work and never lose it and endure no delays perfecting it. But we’ve forsaken this amazing gift and started using GitHub for everything, relying on it. GitHub became the cornerstone for many projects, not unlike CVS and SVN servers in the past. It's even worse now, because there was no _single_ CVS or SVN server for the whole industry.

But retaliation will come. This [happened][codespaces] [before][murder], this will happen again. You think GitHub is much stronger, than CodeSpaces? You can't know. CodeSpaces had prospered for 7 years before the sudden instant demise. GitHub is only 8.

![I accidentally all your data. Is that bad?](/assets/img/i-accidentally-all-your-data.png)

You, management people! Who owns your assets, you or GitHub? The code is distributed across developers and CI machines? OK, but what about issues, pull requests, tech docs, tutorials, etc? Aren’t those your assets, too?

You, the Free Software people, and you, the Open Source people! Your prophets [warned][stallman] you [repeatedly][linus], but you wouldn’t listen. How could you let GitHub become the single point of failure for many projects of yours?

Let me reiterate: **_any service found in the Internet is likely broken or will vanish soon_**. GitHub will disappear. It did disappear [at least once for one country][github], causing significant trouble to the negligent. This is not going to be the only case.

Some day we will pay for our carelessness and laziness, and the sooner the day comes the better, as later damage may be tremendous[^tv-example][^parse-example].

So, my point should be clear. Please, don't use GitHub. And no, switching to Bitbucket won't help.

**Upd:** one more stunning example is recent [S3 outage][s3-outage]. GitHub was affected, but this was much much worse than just GitHub. I'm seriously considering creating a website for gathering information about major breakdowns and mocking about it :)

[codespaces]: https://web.archive.org/web/20140618165208/http://www.codespaces.com/ "Code Spaces : Is Down!"
{:target="_blank"}

[murder]: http://www.infoworld.com/article/2608076/data-center/murder-in-the-amazon-cloud.html "Murder in the Amazon cloud"
{:target="_blank"}

[stallman]: https://lists.gnu.org/archive/html/discuss-gnustep/2015-12/msg00168.html "Please, no GitHub"
{:target="_blank"}

[linus]: https://www.wired.com/2012/05/torvalds_github/ "Linus Torvalds Invented Git, But He Pulls No Patches With GitHub"
{:target="_blank"}

[github]: https://techcrunch.com/2014/12/03/github-russia/ "Russia Blacklists, Blocks GitHub Over Pages That Refer To Suicide"
{:target="_blank"}

[s3-outage]: https://www.theregister.co.uk/2017/03/01/aws_s3_outage/ "AWS's S3 outage was so bad Amazon couldn't get into its own dashboard to warn the world"
{:target="_blank"}

[^tv-example]: [The case with Telize.com][telize] is a spectacular example when extreme violation of the presumption of defectiveness led to huge troubles. In short, the software of set-top boxes of some manufacturer relied on a free public service to get the user’s location. It even expected the service to be always available and _always return valid responses!_ When the service had gone offline, thousands of customers were unable to watch TV.

[telize]: http://www.cambus.net/decommissioning-a-free-public-api/ "Decommissioning a free public API"
{:target="_blank"}

[^parse-example]: [@glorphindale] pointed out another example: [Facebook closing Parse][parse]. Those who thought someone else can handle their most valuable assets (servers, databases, etc) have been taught a good lesson.

[@glorphindale]: https://mobile.twitter.com/glorphindale "Firelancer with social skills of a nervous badger."
{:target="_blank"}

[parse]: https://techcrunch.com/2016/01/28/facebook-shutters-its-parse-developer-platform/ "Facebook Shutters Its Parse Developer Platform"
{:target="_blank"}
