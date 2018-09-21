---
layout: post
title: Readiness Threshold
catch: Have you ever wondered, how to make your bug fixing duties a tad funnier?
readon: I've got a recipe
categories: blog
type: blog
---

### Joy of bug fixing

Have you ever met a programmer, who when asked “What would you like to do?” would answer “Fix bugs”? I haven’t. Everyone wants to develop new features, ideally---new projects from scratch. 

There is a teeny-tiny problem with it. Most programmers support big projects with zillions of man-hours already spent on. On such projects, your job is to deal with bugs all week (consider yourself lucky, if you can reproduce them). Releases are usually contain a couple of new features (10% of the time spent on) and hundreds of bug fixes (90% of the time spent on). Even if there is a unique opportunity to join a fresh project, be sure: given that the scale is sufficient, work on it will turn into what I described above six months later. 

Therefore, most programmers are not satisfied with their work. What to do? I don’t know, where to get new projects for everyone. But I know, how to work on old projects with pleasure. I’ve been using this technique for a long time, and I’m not the only one, who uses it. So, I can say for sure, that it works (though, perhaps, not for everyone). Possible side effect is code quality increase.

### Welcome to the threshold

We should start with the question “What is a product?”. Take, for instance, a major version of a project your team has been working on for some time. Obviously, it is a product. But why? Why no one called it a product a month ago, when there were two less features and two hundred more bugs? It still has bugs, and some features had to be moved to subsequent releases. Did it become a product solely because the deadline is reached? No, there was no product a month ago anyway. There have to be something else…

Let’s call it *readiness threshold*. It is a boundary, which separates a non-product from a product. They both may have bugs and lack features, but a product is *ready*, while a non-product is not. 

It may be an extremely difficult task to determine the threshold for a big product: which features to include and which ones to skip, which bugs must be fixed and which ones are tolerable. I think, many commercial failures attribute to missed readiness thresholds. But things get much easier for small products. Let’s say, we are to write a stopwatch app. It shows time, has two buttons (Start/Stop and Lap/Reset) and a list of lap times. We need to make the UI, implement the buttons logic, fix all of the bugs---and that’s it!

OK, suppose, we’ve finished. But *how* did we make it? Nine times out of ten such programs are written like this:

1. we put two buttons and a label on the form;
2. we create a timer, which updates the label, and make the Start/Stop button to start/stop it;
3. we start to code the Lap/Reset button and realise, that we need to store the time somewhere---we update the timer;
4. we updated the UI with a list of laps;
5. then we realise, that we need to show the time of the current lap---we add a new label, update the timer and all the buttons;
6. we rearrange all the UI elements so that they look better;
7. we updated the Lap/Reset button so, that on reset it clears the list of laps as well as the time;
8. we make some more updates here and there and---hey presto, the product is ready!

Steps between the beginning and the end are not significant for us, so they are somewhat chaotic. We keep in mind an image of the final product and press towards it, adjusting our efforts in the process. But intermediate states are just... bugs, features, lines of code. We don’t consciously apply any readiness criteria to them. 

If a product is so huge, that it is impossible to even vaguely imagine its ready state, we split it into pieces (macro features, subsystems, modules). But those pieces are no smaller, than it is necessary to estimate their ready state. 

> The principle remains the same: only something complex is considered a product. 

This would be OK, if products were not what we value the most. But they are! People don’t want to fix bugs not because it is boring (investigation and elimination of some bugs bring a lot of pleasure), but because a single bug fix makes imperceptible contribution to a complex product---there are hundreds of them there! Everyone wants their work to be valuable, but few people consider small results valuable. This leads to frustration, which in turn leads to drop in performance and quality. 

> How to make small things well and with pleasure? You need to consider them full products!

Let’s consider a product not only a complete program, but also:

* an algorithm;
* a class;
* a feature;
* a method/function;
* a fixed bug;
* a unit test;
* a javadoc;
* a build script;
* etc.

Whatever we do, we make products. And we don’t stop until they’re ready. 

**Made a public method?** Does it have a clear purpose and its own value, or you made it just because it is needed somewhere else? Can it be static? Yes? Are you sure, that it belongs to this class? One of the parameters is `List`? May be, use `Collection` instead? Does it return `Map<String, List<Object>>`? May be, return an object of some class instead, or even split the method into two? Does it throw exceptions? Is user capable to handle all of them? What about invalid arguments? Will it handle 2Gb input data well?

**Fixed a bug?** Have you found out the reason, or just eliminated NPE by checking for `null`? Have you checked all the places where the buggy code is used---may be, some other code relies on the bug? Caught exception? May be, add it to the method’s contract instead? Or wrap it and re-throw? Have you checked if there is similar logic somewhere else? Why are there two places with the similar logic?

**Wrote a class?** Does it have a clear purpose and its own value, or you just extracted some code from some other class, because it became “too big”? What are its dependencies? What is its [thread safety degree](https://www.ibm.com/developerworks/library/j-jtp09263/)? Have you written the docs? Are they clear and concise? No? May be, this is because the class is not self-dependent and/or overloaded with functionality? Which interfaces does your class implement? What about `Closeable`, `Cloneable`, `Serializable`, `Comparable`? Have you overridden `hashCode()` and `equals()`, or this class doesn’t need it? 

**Fixed a misprint in Web UI?** Is everything OK with typography? Is there hyphen instead of dash anywhere? Are non breaking spaces put where necessary? Have you verified, that the UI looks OK with different zoom levels and browser window sizes?

Do you think about such things, when you’re doing your work? No? Then it’s the time to start, since this helps to avoid problems and boost your mood. 

> You don’t just write code. You aspire to the readiness threshold of small products!

### Do not cross the threshold!

There are examples, when things, which seem obviously not ready (plenty of bugs, lack of features, no usability), took over the world or became industry standards. Why did this happen? Simply because these products were in fact ready. Behind a lot of problems, their creators were able to see, that the threshold is reached, and it is pointless or even harmful to go further. 

The same is true for small products.

**Need to write bignum arithmetics?** When started, you realise, that it would be easy to support arbitrary radix, not just 10. Going to do so? Do you need it now? No, but it may be useful in future? Well, just implement it when you need it---after all, it is easy. You may not need it at all. However, if you add it now, you will have to support it all the time, write unit tests, make additional verifications in the code, etc. 

**Made a public method with clear purpose and its own value, which you don’t need right now?** But this logic is so obvious and so simple to implement---it’s just meant to be here! Really? Tony Hoare was thinking like this when he invented null references. Now, he calls it his [billion dollar mistake](http://qconlondon.com/london-2009/presentation/Null+References:+The+Billion+Dollar+Mistake).

**Made a thread-safe class for string concatenation?** Oops, someone [already did it](http://docs.oracle.com/javase/1.5.0/docs/api/java/lang/StringBuffer.html). Be prepared to make a non-thread-safe version and explain, that it should be used instead, to the whole world. 

**In the stopwatch:** stored lap records in database, made them retrievable by the time range and duration, allowed users to set background picture and sound to play on pressing Lap button? Great! It’s a pity, that the best case is that no one will know about it. But everyone will wonder, why your app is five times larger and loads three times slower, than the competitors. The worst case is that your app will freeze for 200ms on pressing Lap button and, therefore, will be completely useless.

### Can you be more specific?

So, what is a product, how to determine readiness threshold? If I knew, I’d lead the Forbes list, build my own city on Mars and hire Elon Musk to manage it. This question belongs to the creative part of programming. Usually you can only try to predict the answer, and see later, if your guess was right. 

> Just stop writing code, fixing bugs, creating frameworks, refactoring, writing docs, etc.---and start **making products.**

Consider each boring task or minor bug as a product. Turn your work into constant balancing around the readiness threshold. Stop thinking about it as a routine, which does not make you closer to the global goal, and start to admire the flow of complete, self-contained solutions, which you generate every day. 

What’s more, stop dreaming about the time, when they trust you to start doing a new project. They won’t, until you prove, that you are capable to consistently deliver micro-products. Or until one of your micro-products become big and independent (thanks to your vigorous pushing).

> How many products have you made this week?

P.S. Here is my friend Alexey's [answer](https://localstorm.wordpress.com/2014/07/01/visibility-and-your-career/) to this article. Definitely worth reading!
