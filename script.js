var slike = document.getElementById('slike')

slike.innerHTML = `<img src='slike/galerija/${0}.jpg'>`;
var i = 1;
setInterval(function(){
  slike.innerHTML = `<img src='slike/galerija/${i}.jpg'>`;
  i++;
  if ( i == 8) {
    i = 0;
  }
},2000)
