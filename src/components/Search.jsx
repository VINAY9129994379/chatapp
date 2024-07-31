import React from 'react'

 const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user"/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/18335256/pexels-photo-18335256/free-photo-of-orange.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
       <div className="userchatInfo">
        <span>vinay</span>
       </div>
      </div>
    </div>
  )
}
export default Search
