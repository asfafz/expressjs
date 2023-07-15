import React, { useState } from 'react'

function Navbar() {

    const [ status, setstatus ] = useState(0)
    const [ nwidth, setnwidth ] = useState('')



    function opennavbar()
    {
        //alert('hi');
        
        if (status == 0) {

            setnwidth('500px');
            setstatus(1);

        } else {
            setnwidth('0px');
            setstatus(0);
        }

    }


    return (
        <div>
            <h1>hi</h1>


            <div className='Maindiv' style={{width:nwidth}}>
                <button className='btn btn-primary' onClick={opennavbar}>=</button>

                <ul>
                    <li>About us</li>
                    <li>Products</li>
                    <li>Contact us</li>
                </ul></div>

        </div>
    );
}

export default Navbar;