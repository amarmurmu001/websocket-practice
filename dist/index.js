"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("message", (data) => {
        const parsedData = data.toString();
        console.log(`Received message: ${parsedData}`);
        if (parsedData === "ping") {
            socket.send("pong");
        }
    });
});
