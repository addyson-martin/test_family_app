const callback=(name,email,res)=>
{
    console.log("callback for otp called");
    
    const handler=require("child_process").spawn
    var process = handler('python3',["./python_files/mail.py",name,email] ); 
        process.stdout.on('data', (data) =>{ 
        console.log(data.toString())
        res.send("Otp sent successfully")
        return data.toString()
        
    } ) 
} 
// callback('aditya','b518006@iiit-bh.ac.in')
module.exports=callback
