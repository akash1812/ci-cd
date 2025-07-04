import { WebSocketServer } from "ws";
import { client } from '@repo/db/client';

const ws = new WebSocketServer({
    port: 3001
});

ws.on("connection", async (socket)=>{
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    
    socket.send("Hey!!! You're on ws server");
})