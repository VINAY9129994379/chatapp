import React from 'react'
 const Login = () => {
  return (
    <div className="formcontainer">
        <div className="Wrapper">
            <span className="logo">vino chat</span>
            <span className="title">register</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                
                <button>sign in</button>

                </form>
                <p>you don't have an acount? register</p>
        </div>
    </div>
  )
}
export default Login
