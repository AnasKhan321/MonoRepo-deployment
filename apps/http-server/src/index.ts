import express from "express"
import {prisma}  from "@repo/db/client"


const app = express() ; 
app.use(express.json() ) ; 



app.get("/"  , (req,res)=>{
    res.json({success : true , data  : "the time is now "})
})


app.post("/signup"  , async(req,res)=>{
    try {
        
        const username = req.body.username ; 
        const password = req.body.password ; 

        const userid = await prisma.user.create({
            data : {
                username : username , 
                password : password
            }
        })

        res.json({success : true , userid : userid.id})
        
    } catch (error) {
        res.json({success : false})
    }
})

app.listen(3000)  ; 