---
layout: post
title:  "IntelliJ JAVA_HOME not defined - importing Gradle project"
date:   2017-04-05 21:16
comments: true
author: Dariusz Jagieło
identifier: /2017/04/05/2017-04-05-intellij-java-home-not-defined.html"
tags:
- intellij
- gradle
---
<figure class="aligncenter">
    <img src="https://www.jetbrains.com/idea/features/screenshots/16/why_test_runner.png" />
</figure>

Solution for JAVA_HOME not defined yet problem while importing existing Gradle project during first setup of IntelliJ.

<!--more-->

<div>
<center>
	<a class="fancybox" rel="group" href="/images/posts/05_04_2017/1.png"><img class="fb20 post-image" src="/images/posts/05_04_2017/1.png" alt="" /></a>
</center>
</div>

If you have problem with importing Gradle project for the first time, you need to go to starting screen, select Configure -> Project Defaults -> Project Structure
and add new SDK (pointing to JDK folder on your computer)

<div>
<center>
	<a class="fancybox" rel="group" href="/images/posts/05_04_2017/2.png"><img class="fb20 post-image" src="/images/posts/05_04_2017/2.png" alt="" /></a>
  <a class="fancybox" rel="group" href="/images/posts/05_04_2017/3.png"><img class="fb20 post-image" src="/images/posts/05_04_2017/3.png" alt="" /></a>
</center>
</div>

After that you should be able to import your Gradle project.
