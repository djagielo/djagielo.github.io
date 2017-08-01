---
layout: post
title:  "No 64bit systems on list in VirtualBox on Windows 8.1 host"
date:   2015-01-10 17:00:00
comments: true
author: Dariusz Jagieło
identifier: /2015/01/10/no-64bit-system-in-virtualbox.html
tags:
- virtualbox
---
<figure class="aligncenter">
    <img src="https://cdn.worldvectorlogo.com/logos/virtualbox.svg" />
</figure>

Today I had problem on my Windows 8.1 laptop with VirtualBox, I wanted to create linux virtual machine in virtualbox and there were only 32bit systems on the list.
<!--more-->
<br />So I googled the problem and found blog post: <a href="http://www.fixedbyvonnie.com/2014/11/virtualbox-showing-32-bit-guest-versions-64-bit-host-os/">http://www.fixedbyvonnie.com/2014/11/virtualbox-showing-32-bit-guest-versions-64-bit-host-os/</a>

This is the summary of the post available in link above.<br />
Make sure:
<ul>
    <li>Your Host OS is 64-bits</li>
    <li>Intel Virtualization Technology and VT-d are both enabled in the BIOS</li>
    <li>The Hyper-V platform is disabled in your Windows Feature list.</li>
</ul>
