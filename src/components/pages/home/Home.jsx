import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className="homeWrapper">
        <div className="homeContents">
           <h2 className="homeTitle">Make your party fun!</h2>
           <p className="homeDetails">Create your own custom playlist today.</p>
           <button className="homeBtn">Create playlist</button>
        </div>
    </div>
  )
}
export default Home