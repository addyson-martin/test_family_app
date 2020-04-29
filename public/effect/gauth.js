function onSignIn(googleUser) {
    console.log("herere");
    createSignOut();
    var profile = googleUser.getBasicProfile();
    const info_req={
      'ID':profile.getId(),
      'NAME':profile.getName(),
      'PROFILE_PIC':profile.getImageUrl(),
      'EMAIL':profile.getEmail()
      // 'token':googleUser.getAuthResponse().id_token
    }
    
    ret_params(info_req)
  }

  const signOut=()=> {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("Your SignOut was Successful ;))");
    });
    document.getElementById("signOut-btn").style.display="none";
    setDefaults();
    
  }
const ret_params=(info_req) =>
{
  fetch(`/credentials?name=${info_req.NAME}&email=${info_req.EMAIL}&pic=${info_req.PROFILE_PIC}`).then((res)=>{
    res.json().then((buffer)=>
    {
      console.log(buffer)
      document.getElementById('details-after-login').innerHTML=buffer.name;
      document.getElementById('pro_pic').src=buffer.pic;
    })
  })
  generate_event_email();
}