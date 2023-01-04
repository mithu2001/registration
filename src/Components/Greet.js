import React from 'react'

function Greet(props) {
  return (
    <div className='container card p-3 mt-3 register-container text-center'>
        
        <h2>Thank you {props.username} for Joining Us</h2>
        <h2>Verification Sent to your email: {props.useremail}</h2>
    </div>
  )
}

export default Greet