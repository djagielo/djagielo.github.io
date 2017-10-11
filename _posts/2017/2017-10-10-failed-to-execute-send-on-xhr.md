---
layout: post
title:  "How to debug Uncaught NetworkError: Failed to execute 'send' on 'XMLHttpRequest' in Karma tests"
date:   2017-10-10 21:00
comments: true
author: Dariusz Jagieło
identifier: /2017/10/10/2017-10-10-failed-to-execute-send-on-xhr.html"
tags:
- karma
- bugs
- angular
---
<figure class="aligncenter">
    <img src="images/posts/10_10_2017/1.PNG" />
</figure>

Running tests that fail without any useful information may be very frustrating. I've faced this problem with Karma tests for Angular 4 application. I've made few changes and I got message like 'Uncaught NetworkError: Failed to execute 'send' on 'XMLHttpRequest' with no explanation what is wrong. It seems to be a bug and for more details you need to tweak command that runs tests.

<!--more-->

It turns out that if you use
