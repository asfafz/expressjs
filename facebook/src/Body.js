

import React, { useState } from 'react'

function Body() {


    const [fullname, setfullname] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')

    function registerme(event) {
        event.preventDefault()
        

        // console.log(users)

        var users = JSON.parse(localStorage.getItem("users") || "[]")

        var newuser = {

            username: fullname,
            password: password,
            email: email
        }
        console.log(newuser)

         users.push(newuser)
        localStorage.setItem('users', JSON.stringify(users))
       


    }




    return (



        <div className='row' >
            <div className='col-md-6 justify-content-center'>
                <img src='https://www.hrmexam.com/wp-content/uploads/2019/06/2-730x410.jpg' ></img>
            </div>
            <div className='col-md-6 justify-content-center'>
                <div id='reg'>
                    <form onSubmit={registerme}       >
                        <label>Username</label>
                        <input type='text' className='form-control' value={fullname} onChange={(e) => { setfullname(e.target.value) }} />
                        <label>Password</label>
                        <input type='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <label>Email</label>
                        <input type='text' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <button className='btn btn-success'>Register</button>
                    </form>
                </div>
            </div>
        </div>




















































    );
}
export default Body;
