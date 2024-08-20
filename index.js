const express =  require("express");
const fs = require("fs");
const app = express();

app.get("/",(req,res)=>{

for (let index = 0; index < 5; index++) {
    fs.appendFileSync("./logs.txt",`Hi ${index}\n`);
    
}
 return res.send("Hi file has been updated")

});

app.get("/read",(req,res)=>{

   var a = fs.readFileSync("./logs.txt","utf-8");
   console.log(a);
   
     return res.send(a)
    
    });
    


app.listen(8000,()=>{

    console.log("Server is running at port number 8000");
    
});