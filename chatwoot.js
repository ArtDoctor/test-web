(function(d,t) {
  var BASE_URL="https://chatwoot-lg40wo88gkgkk8gc4cg88gc4.yza.yazero.io";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken: config.TOKEN,
      baseUrl: BASE_URL
    })
  }
})(document,"script");
