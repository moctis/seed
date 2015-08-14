$eed.append=function(html) { document.body.insertAdjacentHTML("beforeend", html); return this; };

$eed
  .append('Hello World<br/>')
  .append('Hello, Moctis<br/>')
  .append('Hello, Benze<br/>');
