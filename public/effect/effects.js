function o_menu(){
  document.getElementById("mySidebar").style.width = "14%";
  setTimeout(function(){ 
  let arr = Array.from(document.querySelectorAll('.changeme'));
  arr.forEach( e=> e.classList.remove('visibility')); 
  }, 350);
  
  // document.getElementById("main").style.marginLeft = "17%";
}
const setDefaults=()=>
{
  document.getElementById('pro_pic').src='../img/def.jpeg';
  document.getElementById('details-after-login').innerHTML="Welcome to the family app.Please login to continue."
  document.getElementById('mssg').innerHTML="Put your GPS to work for your , not your memory!<br>Get started with Us.";
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
const generate_event_email=()=>
{
  const dom_con=document.getElementById('wrap');
  dom_con.classList.add('blurme');
  document.getElementById('mssg').innerHTML="We use your google account to make things handy";
  document.getElementById('cntr-box').style.display='block';
  document.getElementById('btn-data').innerHTML="ACCEPT";
  
}
// const sendMail=()=>
// {
//   fetch('')
// }
