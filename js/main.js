document.addEventListener('DOMContentLoaded', function(){
  let today= new Date();
  let h= today.getHours();
  let m= today.getMinutes();
  let s= today.getSeconds();
  document.getElementsByClassName("hour").innerHTML= h;
  document.getElementsByClassName("min").innerHTML= m;
  document.getElementsByClassName("second").innerHTML= s;
}, false);

function checkTime(i){
  if(i <10){
    i= "0"+i;
  }
  return i;
}