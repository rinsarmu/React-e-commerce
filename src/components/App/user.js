import React from 'react'
import './user.css'

const User = (props) => {
  return (
    <div className='userContainer'>
        <div style={{width: '50px', height:'50px'}}>
            <img src = {props.logo} alt='dd'/>
        </div>
        <div className='user'>
            <div className='userData'>
            <h1>{props.name}</h1>
            <p>Today at {props.time}</p>
            </div>


            <p>{props.comment}</p>
        </div>
        
    </div>
  )
}

export default User
