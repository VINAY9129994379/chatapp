import React from 'react'
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from './Messages';
import Input from './Input';
 const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>rahul</span>
        <div className="chatIcons">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/male-user-add-icon.svg" alt=""/>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/video-play-icon.svg" alt=""/>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/ellipsis-h-icon.png"  alt=""/>
        </div>
      </div>
      <Messages/>
      <Input />

    </div>
  )
}
export default Chat
