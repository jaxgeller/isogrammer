### turn your google analytics code from something like this


```html
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UIDHERE', 'auto');
  ga('send', 'pageview');

</script>
```



### to this


```html
<script>
  (function(b,r,a,v,e,u,x){b['GoogleAnalyticsObject']=e;b[e]=b[e]||function(){
  (b[e].q=b[e].q||[]).push(arguments)},b[r].l=1*new Date();u= r.createElement(a),
  x= r.getElementsByTagName(a)[0];u.async=1;u.src=v ;x.parentNode.insertBefore(u,x)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UIDHERE', 'auto');
  ga('send', 'pageview');

</script>
```


# It's a nice touch.