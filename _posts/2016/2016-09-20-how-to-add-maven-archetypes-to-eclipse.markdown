---
layout: post
title:  "How to add maven archetypes"
date:   2016-09-20 22:30
comments: true
author: Dariusz Jagieło
identifier: /2016/09/20/2016-09-20-how-to-add-maven-archetypes-to-eclipse.html"
tags:
- eclipse
- maven
---

<figure class="aligncenter">
    <img src="/images/posts/20_09_2016/maven.png" />
</figure>

If you have fresh install of Eclipse and try to create project from maven archetypes you will only see short list of them. We need to add archetypes from public repository.

<!--more-->

<div>
<center>
	<a class="fancybox" rel="group" href="/images/posts/20_09_2016/1.png"><img class="fb20 post-image" src="/images/posts/20_09_2016/1.png" alt="" /></a>
</center>
</div>

To install more archetypes you need to click 'Configure' from the screen above
and then 'Add Remote Catalog'. You can also get to this screen following the path
Windows -> Preferences -> Maven -> Archetypes.

Now you need to add catalog from file and give description:

<pre><code class="language-bash">
http://repo1.maven.org/maven2/archetype-catalog.xml
</code></pre>

<div>
<center>
	<a class="fancybox" rel="group" href="/images/posts/20_09_2016/2.png"><img class="fb20 post-image" src="/images/posts/20_09_2016/2.png" alt="" /></a>
</center>
</div>


Then click 'Verify' and you should see:

<div>
<center>
	<a class="fancybox" rel="group" href="/images/posts/20_09_2016/4.png"><img class="fb20 post-image" src="/images/posts/20_09_2016/4.png" alt="" /></a>
</center>
</div>


Now when trying to create new project you will have many different archetypes available.

<div>
<center>
	<a class="fancybox" rel="group" href="/images/posts/20_09_2016/3.png"><img class="fb20 post-image" src="/images/posts/20_09_2016/3.png" alt="" /></a>
</center>
</div>
