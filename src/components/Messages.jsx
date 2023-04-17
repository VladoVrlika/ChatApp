import React from "react";
import { useEffect,useRef } from "react";
import { formatTime } from "../services/formatTime";

function Messages(props) {
  const messagesEnd = useRef();

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
  }, [props]);

  const renderEachMessage = (message) => {
    const { member, text, time } = message;
    const { currentMember } = props;
    const messageFromMember = member.id === currentMember.id;
    const classNameMessage = messageFromMember
      ? "Messages-message currentMember"
      : "Messages-message";
   
    const randomId = () => {
      return Math.floor(Math.random() * 90) + currentMember;
    };

    return (
      <li key={randomId()} className={classNameMessage}>
        <div className="Message-content">
          <div className="username" >{member.clientData.username}</div>
          <div className="text" style={{ backgroundColor: member.clientData.color} }>{text}</div>
          <div className="time">
            {formatTime(time)}
          </div>
        </div>
      </li>
    );
  };

  const { messages } = props;

  return (
    <ul className="Messages-list">
      {messages.map((m) => renderEachMessage(m))}
      <div ref={messagesEnd} />
    </ul>
  );
}

export default Messages;
