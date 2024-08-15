const express =  require("express");

const app = express();

app.get("/",(req,res)=>{


    return res.json({
        "name":"Himanshu"
    });


});


app.listen(8000,()=>{

    console.log("Server is running at port number 8000");
    
});