function o_menu(){
  document.getElementById("mySidebar").style.width = "14%";
  setTimeout(function(){ 
  let arr = Array.from(document.querySelectorAll('.changeme'));
  arr.forEach( e=> e.classList.remove('visibility')); 
  }, 350);
  
  // document.getElementById("main").style.marginLeft = "17%";
}

function c_menu() {
  let arr = Array.from(document.querySelectorAll('.changeme'));
  arr.forEach( e=> e.classList.add('visibility'));
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}
function createSignOut()
{
  document.getElementById("signOut-btn").style.display="block";
}
function blurEffect(val)
{
  const dom_con=document.getElementById(val);
  dom_con.classList.remove('blurme');
  document.getElementById('cntr-box').style.display='none';
}