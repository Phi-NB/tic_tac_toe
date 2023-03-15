import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import CreateRoom from "./components/CreateRoom/CreateRoom";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import Game from "./components/Game/Game";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import { game } from "./config";
import { useDispatch, useSelector } from "react-redux";
import { GameClient } from "@dattenlagiday/oc_gamecenter_sdk_pkg";

// const socket = io.connect('http://localhost:5000');
const socket = io.connect(process.env.REACT_APP_SOCKET_SERVER_URL);
console.log(socket);

function App() {
  // const {user} = useSelector(state => state.user)

  const [auth, setAuth] = useState(true);
  const dispatch = useDispatch();
  // const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    const client = new GameClient(game.gameId, game.apiKey);

    client
      .initAsync()
      .then(() => {
        const userId = client.user.citizen.getSaId();
        // console.log(userId);
        if (userId) {
          setAuth(true);
          // dispatch(authDispatch(userId));
        }
      })
      .catch((err) => console.log(err));
  }, [dispatch, auth]);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/createRoom"
              element={<CreateRoom socket={socket} />}
            ></Route>
            <Route
              path="/joinRoom"
              element={<JoinRoom socket={socket} />}
            ></Route>
            <Route
              path="/game/:roomId"
              element={<Game socket={socket} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
