import React from 'react'

export default function Register(props) {
  return (
    <div className='container card p-3 mt-3 register-container'>
        <form onSubmit={props.submit}>
            <h1 className='text-center'>Registration Form</h1>
            <div className='form-group'>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' required className='form-control'/>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email </label>
                <input type="email" name='email' required className='form-control'/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password </label>
                <input type="password" name='password' required className='form-control'/>
            </div><br />
            <button type='submit' className='btn btn-primary mt-2px'>Register</button>
        </form>

    </div>
  )
}

