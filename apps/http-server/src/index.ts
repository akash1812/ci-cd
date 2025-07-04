import express from 'express';
import { client } from '@repo/db/client';

const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("hello")
})

app.post('/', async (req,res)=>{
    await client.user.create({
        data: {
            username: req.body.username,
            password: req.body.password
        }
    })
    res.status(200).json({
        message: "User created successfully"
    })

})

app.listen(3002, ()=>{
    console.log("Server is running on port 3002");
    
})