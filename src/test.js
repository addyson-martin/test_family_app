const mailSmtp=require('./emailPython')
const app=require('express')()
app.get('/hi',(req,res)=>{
    mailSmtp('adi','b518006@iiit-bh.ac.in',res)
}

)

app.listen(8000,()=>{
    console.log('listening');
     
})