import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Login from "./components/Login";
import MessageList from "./components/MessageList";
import NotificationStack from "./components/NotificationStack";
import DirectMessageQueue from "./components/DirectMessageQueue";
import "./index.css";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <>
          <MessageList />
          <NotificationStack />
          <DirectMessageQueue />
        </>
      )}
    </div>
  );
}

export default App;
