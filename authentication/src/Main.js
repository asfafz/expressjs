


import React, { useState } from 'react';
function Main() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

function validate()
{
    if(username=='asif' && password =='asif')
    {
        alert('success')
    }else{
        alert('Failed')
    }
}
    return (
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <h3>Login Form</h3>
                <form onSubmit={validate}>
                    <input type='text' placeholder='User Name' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}></input>
                    <input type='password' placeholder='Type Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                    <button className='btn btn-success' >Login</button>
                </form>
            </div></div>
    );
} export default Main;