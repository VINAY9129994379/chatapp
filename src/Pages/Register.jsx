import React from 'react'
import Add from '../img/avatar.png'
 const Register = () => {

  
  return (
    <div className="formcontainer">
        <div className="Wrapper">
            <span className="logo">vino chat</span>
            <span className="title">register</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src={Add} alt="" width={50} height={50}/>
                    <span>Add an avatar</span>

                </label>
                <button>sign up</button>

                </form>
                <p>you do have an acount? login</p>
        </div>
    </div>
  )
}
export default Register
