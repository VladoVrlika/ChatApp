import React, { useState, useEffect } from "react";
import Messages from "./components/Messages";
import Input from "./components/Input";
import { getRandomName, generateRandomColor } from "./services/randomName";
import './App.css';
import headerIcon from './headerIcon.svg'

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: getRandomName(),
    color: generateRandomColor(),
  });
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    const droneObj = new window.Scaledrone(
      'jt3nTeOdAYP4h6HA',
      {
        data: member,
      }
    );
    setDrone(droneObj);

    droneObj.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const newMember = { ...member };
      newMember.id = droneObj.clientId;
      setMember(newMember);
    });

    const room = droneObj.subscribe("observable-room");

    room.on("data", (data, member) => {
      const time = new Date();
      setMessages((prevMessages) => [...prevMessages, { member, text: data, time}]);
    });
    return () => {
      droneObj.close();
    };
  }, []);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <>
      <div className="App">
        <div className="App-header">
          <h1>ChatOps</h1>
          <img src={headerIcon} width={60}/>
        </div>
        <Messages messages={messages} currentMember={member} />
        <Input onSendMessage={onSendMessage} />
      </div>
    </>
  );
  }

  export default App;