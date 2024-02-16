console.log('Hello World!');

var index=1;
show(index);

function plusDivs(y)
{
index=index+y;
show(index);
}

(function loop() {
  setTimeout(()=> {
    // Your logic here
  plusDivs(1);
    loop();
  }, 2800);
  })();

function show(z)
{
  var x=document.getElementsByClassName("mySlides");
if(z>x.length)
  {
  index=1;
  }
  if(z<=0)
  {
    index=x.length-1;
  }
  for(i=0;i<x.length;i++)
  {
    x[i].style.display="none";
  }
  x[index-1].style.display="block";
}