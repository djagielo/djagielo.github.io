---
layout: post
title:  "How to debug 'NetworkError: Failed to execute 'send' on 'XMLHttpRequest'' in Karma tests"
date:   2017-10-12 21:00
comments: true
author: Dariusz Jagieło
identifier: /2017/10/10/2017-10-10-failed-to-execute-send-on-xhr.html"
tags:
- karma
- bugs
- angular
---
<figure class="aligncenter">
    <a href="images/posts/10_10_2017/1.png" data-lightbox="post"><img src="images/posts/10_10_2017/1.png" /></a>
</figure>

Running tests that fail without any useful information may be very frustrating. I faced this problem with Karma tests for Angular 4 application. I made few changes in my code and then got message: 'Uncaught NetworkError: Failed to execute 'send' on 'XMLHttpRequest' with no explanation what's wrong. It seems to be a Karma/Angular/CLI bug and for more details you need to use a bit hacky command to run tests.

<!--more-->
<div class="more"></div>

#### Solution
Solution (workaround is a better word) is simple - you need to turn off sourcemaps. You won't be able to debug tests in the browser, but it should give you more explanatory message about the problem. To run tests without sourcemaps, use this command:

<pre>
<code class="language-bash">
ng test --sourcemaps=false
</code>
</pre>

<figure class="aligncenter">
    <a href="images/posts/10_10_2017/2.png" data-lightbox="post"><img src="images/posts/10_10_2017/2.png" /></a>
</figure>

After fixing a problem you can use your usual command for tests. This small hack saved me a lot of time. Hope it'll get fixed soon!.
