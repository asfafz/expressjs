
import React, { useEffect, useState } from 'react';

function Main() {


    const [username, setusername] = useState(' ');
    const [uemail, setuemail] = useState(' ');
    const [upassword, setupassword] = useState(' ');
    const [cpassword, setcpassword] = useState(' ');

    const [username_e, setusername_e] = useState(' ');
    const [uemail_e, setuemail_e] = useState(' ');
    const [upassword_e, setupassword_e] = useState(' ');
    const [cpassword_e, setcpassword_e] = useState(' ');

    const [username_c, setusername_c] = useState(' ');
    const [uemail_c, setuemail_c] = useState(' ');
    const [upassword_c, setupassword_c] = useState(' ');
    const [cpassword_c, setcpassword_c] = useState(' ');

    function validate() {
       // console.log(username + uemail + upassword + cpassword);

        if (username.length < 8) {
            setusername_e ('invalide username, minimum value must be 8 char')
            setusername_c ('red')
        } else {
            setusername_e ('')
            setusername_c ('green')
        }



    }



    return (
        <div>

            <div className='row justify-content-center'>


                <div className='col-md-5'>
                    <h1>form validaion</h1>
                    <input type='text' placeholder='User Name' className='form-control' value={username} onChange={e => { setusername(e.target.value);validate() }} style={{ borderColor: username_c }}></input>
                    <small>{username_e}</small>
                    <input type='email' placeholder='Email' className='form-control' value={uemail} onChange={(e) => { setuemail(e.target.value) }}></input>
                    <small>{uemail_e}</small>
                    <input type='password' placeholder='Type Password' className='form-control' value={upassword} onChange={(e) => { setupassword(e.target.value) }}></input>
                    <small>{upassword_e}</small>
                    <input type='password' placeholder='Confirm Password' className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }}></input>
                    <small>{cpassword_e}</small>
                    <button className='btn btn-success' onClick={validate}>Sumbit</button>


                </div>


            </div>




        </div>





    );
}

export default Main;