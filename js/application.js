---
layout: compress
---
{% include assets/js/jquery.min.js %}
{% include assets/js/plugins.js %}
{% include assets/js/prism.js %}
{% include assets/js/custom.js %}
{% include assets/js/fancybox/jquery.fancybox.pack.js %}

{% include assets/js/fancybox/jquery.mousewheel.pack.js %}
{% include assets/js/fancybox/jquery.fancybox-buttons.js %}
{% include assets/js/fancybox/jquery.fancybox-media.js %}
{% include assets/js/fancybox/jquery.fancybox-thumbs.js %}

{% include assets/js/search.js %}
{% include assets/js/lunr.min.js %}

$(document).ready(function() {
    $(".fancybox").fancybox();
});
