import { WebSocketServer } from "ws";
import {prisma}  from "@repo/db/client"
console.log("my time is now")
const server = new WebSocketServer({
    port : 5000
})


server.on("connection"  , async(socket)=>{
    
    await prisma.user.create({
        data : {
            username : Math.random().toString() , 
            password : Math.random().toString()
        }
    })

    socket.send("Hi there you are connected to the web socket server")
})