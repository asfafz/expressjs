import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
function Header() {

    const [username, setusername] = useState('')
    const [pasword, setpassword] = useState('')
    const history = useHistory()


    function login() {

        var users = JSON.parse(localStorage.getItem('users'))
        var i = 0
        for (var user of users) {

            if (user.username == username && user.password == pasword) {
                i++
            }
       }



        if (i == 1) {
            history.push('/dashboard')
        }
    }




    return (

        <div className='row' id='header1'>
            <div className='col-md-4'>
                <h4> Facebook</h4>
            </div>
            <div className='col-md-8'>
                <input type='text' value={username} onChange={(e) => { setusername(e.target.value) }} />
                <input type='password' value={pasword} onChange={(e) => { setpassword(e.target.value) }} />
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}

export default Header;
