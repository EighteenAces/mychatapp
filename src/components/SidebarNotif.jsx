import React from "react";
import Bell from '../img/bell.png';
import Telephone from '../img/telephone.png';
import ContactList from '../img/contacts.png';
import ChatIcon from '../img/chat.png';
import { useState } from "react";

const SidebarNotif = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  const showNotification = ({ senderName }) => {
    return (
      <span className="notification">{`${senderName} has sent you a message.`}</span>
    )
  }

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="notificationBox">
      <div className="notifWrapper">
        <div className="notifIcon">
          <img src={ChatIcon} alt="" />
          <img src={Telephone} alt="" />
          <img src={ContactList} alt="" />
          <div className="icon" onClick={() => setOpen(!open)}>
            <div className="iconNotify">
              <img src={Bell} className="iconImg" alt="" />
              <span class="badge">1</span>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="notifications">
          {notifications.map((n) => showNotification(n))}
          <button className="nButton" onClick={handleRead}>Mark as read</button>
        </div>
      )}
    </div>
  );
}

export default SidebarNotif;