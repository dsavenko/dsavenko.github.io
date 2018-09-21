---
layout: post
categories: blog
title: "Project: Integrity Maven Plugin"
catch: Maven plugin, which helps to ensure build integrity in case of a large multi-module project with branchy structure.
readon: Read more.
type: project
---

[Integrity Maven plugin](https://github.com/xored/integrity-maven-plugin) helps you to ensure build integrity in case of a large multi-module project with branchy structure.

For such a project it's easy to forget to add the `pom.xml` file for a new module, or add a new module to the list
of nested modules of the parent module. Especially when you can run the project without Maven, e.g. when it's
an Eclipse RCP application, which is built by Maven/Tycho on CI server, but developers run it from the workspace in
Eclipse.

Things get worse when many people with a wide range in experience and responsibilities contribute to the project
(some of them might not know about Maven at all), or when the fact that a module is missing is not so easy to notice
(e.g. a missing Eclipse plugin typically doesn't break the build).

This plugin scans project directory structure in attempt to find missed (not included to the build) modules.
If it finds any missed modules, it marks the build as failed.

For additional information, please take a look at [the plugin site](http://xored.github.io/integrity-maven-plugin).
