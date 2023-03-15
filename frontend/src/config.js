import React from "react";
import Home from "./components/Home/Home.jsx";
import Game from "./components/Game/Game.jsx";
import JoinRoom from "./components/JoinRoom/JoinRoom.jsx";
import CreateRoom from "./components/CreateRoom/CreateRoom.jsx";
import io from "socket.io-client";

export const game = {
  gameId: "6410b3faa8f3955edca76c2a",
  apiKey: "7d792d40-3123-4d3d-88be-eb587ebc9c82",
};

const socket = io.connect(process.env.REACT_APP_SOCKET_SERVER_URL);

const routers = [
  {
    path: "/",
    element: <Home />,
    private: false,
  },
  {
    path: "/game/:roomId",
    element: <Game socket={socket} />,
    private: false,
  },
  {
    path: "/joinRoom",
    element: <JoinRoom socket={socket} />,
    private: false,
  },
  {
    path: "/createRoom",
    element: <CreateRoom socket={socket} />,
    private: false,
  },
];

export default routers;
