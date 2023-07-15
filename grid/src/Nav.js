import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Nav() {



    return (
        <div className='row justify-content-center' id='top_header_1'>
            <div className='col-md-8'>
                <h1>Meal Menu</h1>
<ul id='menu_top'>
<li> <button className='btn btn-success'>Home</button></li>
    <li> <button className='btn btn-success'>About Us</button></li>
    <li> <button className='btn btn-success'>Products</button></li>
    <li> <button className='btn btn-success'>Contact Us</button></li>

</ul>
            </div>
        </div>
    );
}
export default Nav;
