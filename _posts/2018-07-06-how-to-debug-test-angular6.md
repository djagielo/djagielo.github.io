---
layout: post
title:  "Angular 6 - How to debug '[object ErrorEvent] thrown' in Karma tests? What about ng test --single-run?"
date:   2018-07-05 21:00
comments: true
author: Dariusz Jagieło
identifier: /2018/07/05/2018-07-06-how-to-debug-object-errorevent-angular6.html"
tags:
- karma
- bugs
- angular
---
<figure class="aligncenter">
    <a href="failed-to-execute-send-on-xhr.html"><img src="/images/posts/10_10_2017/1.png" /></a>
</figure>

I was writing about the similiar problem in case of Angular v4 in the post named **How to debug 'NetworkError: Failed to execute 'send' on 'XMLHttpRequest'' in Karma tests**.
With Angular v6 error message is little different but still does not provide useful message. With Angular v6 a solution of this problems is also slightly different.

<!--more-->
<div class="more"></div>

#### Solution
The Solution is quite simple - the same I was writing about couple of months ago. We need to turn off source maps flag. Before, it could be done by adding **_--sourcemaps=false_** parameter, but now we need to use:
<pre>
<code class="language-bash">
ng test --sourceMap=false
</code>
</pre>

Next thing that surprised me was absence of CLI parameter **_--singleRun_**. Now we should use:

<pre>
<code class="language-bash">
ng test --watch=false
</code>
</pre>
