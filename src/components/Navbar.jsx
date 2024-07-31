import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">vino chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/18335256/pexels-photo-18335256/free-photo-of-orange.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
            <span>vinay</span>
            <button>logout</button>
        </div>
    </div>
  )
}
export default Navbar
