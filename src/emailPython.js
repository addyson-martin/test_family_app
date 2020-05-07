const callback=(name,email,res)=>
{
return new Promise((resolve,reject)=>
{
    // console.log("callback for otp called");
    const handler=require("child_process").spawn
    var process = handler('python3',["./python_files/mail.py",name,email] ); 
        process.stdout.on('data', (data) =>{ 
        const otp=data.toString()
        // console.log(otp)
        res.send("Otp sent successfully")       
        resolve(otp)
        })
        
})
}
module.exports=callback
