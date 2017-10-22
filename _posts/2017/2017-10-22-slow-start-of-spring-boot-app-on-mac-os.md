---
layout: post
title:  "Slow Spring Boot application start on macOS"
date:   2017-10-22 12:00
comments: true
author: Dariusz Jagieło
identifier: /2017/10/22/2017-10-22-slow-start-of-spring-boot-app-on-mac-os.html"
tags:
- springBoot
- macos
---
<figure class="aligncenter">
    <a href="slow-start-of-spring-boot-app-on-mac-os.html"><img style="height: 280px; width: 407px;" src="/images/posts/22_10_2017/snail.png" /></a>
</figure>

Some time ago, I realized that Spring Boot applications on my Macbook Pro (i7, 16GB RAM) start really slow - basic ones, just after generation in <a href="https://start.spring.io/">Spring Initializr</a>, about 12 sec. I tested the same application on my Windows PC (i7, 16GBRAM) and the result was about 1,5 sec. What made such a big difference? It turned out that it's known problem with DNS.

<!--more-->
<div class="more"></div>
### The problem
I found this <a href="https://youtrack.jetbrains.com/issue/IDEA-161967">ISSUE</a> on Intellij bugtracker. There is a problem with DNS server, especially with resolving IP address of your Mac's HOSTNAME. It causes host resolution hangs until it times out.

### The solution
Solution is pretty simple, you need to check your /etc/hosts file. Make sure that your HOSTNAME points to 127.0.0.1, e.g.:
<pre>
<code class="language-bash">
127.0.0.1 localhost Dariuszs-MacBook-Pro.local
</code>
</pre>

To get your HOSTNAME simply run this command

<pre>
<code class="language-bash">
➜  ~ hostname
Dariuszs-MacBook-Pro.local
</code>
</pre>

After introducing this simple fix now I'm waiting only about 2 secs for application startup.
