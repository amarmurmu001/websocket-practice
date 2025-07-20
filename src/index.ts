import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});
wss.on("connection",(socket)=>{
    console.log("New client connected");

    socket.on("message",(data)=>{

        const parsedData = data.toString();

        console.log(`Received message: ${parsedData}`);
        
        socket.send(parsedData);

    })
})