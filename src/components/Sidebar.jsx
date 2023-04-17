import React from "react";
import Navbar from "./Navbar"
import Searchbar from "./Searchbar"
import SidebarNotif from "./SidebarNotif";
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchbar/>
      <SidebarNotif/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
