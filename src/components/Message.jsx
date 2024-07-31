import React from 'react'

 const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/18335256/pexels-photo-18335256/free-photo-of-orange.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {<img src="https://images.pexels.com/photos/18335256/pexels-photo-18335256/free-photo-of-orange.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>}
      </div>


    </div>
  )
}
 export default Message
