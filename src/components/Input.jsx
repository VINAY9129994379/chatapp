import React from 'react'

 const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="type something....."/>
      <div className="send">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/tools-equipment-construction/clip-icon.svg" alt=""/>
        <input type="file"style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src="https://uxwing.com/photo-icon/" alt=""/>

        </label>
        <button>send</button>
      </div>
    </div>
  )
}
export default Input
