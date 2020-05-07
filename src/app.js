const express = require('express')
const path=require('path')
const mailSmtp=require('./emailPython')
//we  use view engine for templating ... required for tempalting parsed data
const hbs=require('hbs')
pathToStatic=path.join(__dirname,'../public');
pathToViews=path.join(__dirname,'../templates/views')
app=express()
port=process.env.PORT||3000
app.use(express.static(pathToStatic))
app.set('view engine','hbs')
app.set('views',pathToViews)
const cred={
    name:null,
    mail:null,
    pic:null
}

app.get('/credentials',(req,res)=>
    {
        console.log(req.query);
        const obj={
            name:req.query.name,
            email:req.query.email,
            pic:req.query.pic
        }
        
        res.send(obj);
        cred.mail=req.query.email
        cred.name=req.query.name
        cred.pic=req.query.pic
    })
app.get('/continueToEmail',(req,res)=>
{
    console.log(cred);
    if(!cred.mail){
        res.send('signin first')
    }
    else{
    res.render('auth.hbs',
    {
        name:cred.name,
        email:cred.mail,
        pic_url:cred.pic
    })
    }
    
})
app.get('/location_page',(req,res)=>
{
    res.send("this is a location pages")
})

app.get('/sendmail',async (req,res)=>{
    const otp= await mailSmtp(cred.name,cred.mail,res)
    console.log(otp);
    
}
)
app.get("/chatroom",(req,res)=>
{
    console.log(req.url);
    res.send("hi wlcm to chatroom");
    
})

app.listen(port,()=>
{
    console.log('Server running on port '+port)
})
//  console.log(pathToStatic);
 
