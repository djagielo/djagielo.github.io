---
layout: post
title:  "How to install xrdp on Lubuntu server edition"
date:   2014-12-25 17:00:00
comments: true
author: Dariusz Jagieło
identifier: /2014/12/25/install-xrdp-ubuntu.html
tags:
- ubuntu
- xrdp
- lubuntu
---

Couple days ago I started to use my old PC as a home server. It has not good configuration but for home purposes it's good enough(core i5, 16GB DDR3, 1TB HDD, Gigabit Ethernet). I'm going to install there some VMs for tests of my University project and also to try some technologies that are new for me: Jenkins and Docker.

<!-- more -->

I've chosen Ubuntu Server 14.04.1 LTS for operating system, VirtualBox for VMS. To use VirtualBox in convenient way i needed to install graphical environment, it was LXDE:
<br />

{% highlight java %}
sudo apt-get update
sudo apt-get install --no-install-recommends lubuntu-desktop


{% endhighlight %}


Parameter --no-install-recommends means that it won't install for example Libre Office and other stuff.

Next we need to install xrdp

<pre>
<code class="bash">
sudo apt-get install xrdp
</code></pre>

Now you can try connect to your remote desktop but there will be gray screen.

<div>
<center>
	<a class="fancybox" rel="group" href="/images/posts/26_12_2014/2.PNG"><img class="fb20" src="/images/posts/26_12_2014/2.PNG" alt="" /></a>
	<a class="fancybox" rel="group" href="/images/posts/26_12_2014/3.PNG"><img class="fb20" src="/images/posts/26_12_2014/3.PNG" alt="" /></a>
</center>
</div>

Xrdp by default uses command 'startx', we need to change it to startlxde

<pre><code class="bash">
sudo vim /etc/xrdp/startwm.sh
</code></pre>

<br />

Comment line '/etc/X11/Xsession':

<pre><code class="bash">
#'/etc/X11/Xsession'
</code></pre>

And add line:

<pre><code class="bash">
. /usr/bin/startlxde
</code></pre>

After this operations your file should look like:

<pre><code class="bash">
#!/bin/sh

if [ -r /etc/default/locale ]; then
  . /etc/default/locale
  export LANG LANGUAGE
fi

#. /etc/X11/Xsession
. /usr/bin/startlxde
</code></pre>

If you still see gray screen check you probably have not startlxde installed:

  <a class="fancybox" rel="group" href="/images/posts/26_12_2014/5.PNG"><img class="center" src="/images/posts/26_12_2014/5.PNG" alt="" /></a>

and if you don't have, install using command:

<pre><code class="bash">
sudo apt-get install lxde-common
</code></pre>


And now it should work :)

  <a class="fancybox" href="/images/posts/26_12_2014/6.PNG" title="Orange" rel="group">
        <img class="center fb50" src="/images/posts/26_12_2014/6.PNG" alt="Orange">
  </a>
