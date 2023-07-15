import React, { useState } from 'react';
function Main() {



const [inputvalue, setinputvalue]=useState('');

function display (val)
{
setinputvalue(inputvalue+val);
}
function clearval()
{
setinputvalue('');
}
function evaluateval()
{
    setinputvalue(eval(inputvalue));
}


    return (
        <div className='row justify-content-center'>

            <div className='col-md-5'>
                




            <table class='table '>


                    <tr>
                        <td colSpan='3'>
                            <input type='text'  class="form-control" value={inputvalue}></input></td>
                        <td><button class="btn btn-primary" onClick={clearval}>C</button></td>
                    </tr>
                    <tr>
                    <td><button class="btn btn-primary" onClick={()=>{display('1')}}>1</button></td>
                    <td><button class="btn btn-primary" onClick={()=>{display('2')}}>2</button></td>
                    <td> <button class="btn btn-primary" onClick={()=>{display('4')}}>3</button></td>
                    <td> <button class="btn btn-primary" onClick={()=>{display('/')}}>/</button></td>

                    </tr>

                    <tr>
                    <td>   <button class="btn btn-primary" onClick={()=>{display('4')}}>4</button></td>
                    <td>  <button class="btn btn-primary" onClick={()=>{display('5')}}>5</button></td>
                    <td>  <button class="btn btn-primary" onClick={()=>{display('6')}}>6</button></td>
                    <td>  <button class="btn btn-primary" onClick={()=>{display('-')}}>-</button></td>

                    </tr>
                    <tr>
                    <td>  <button class="btn btn-primary" onClick={()=>{display('7')}}>7</button></td>
                    <td>  <button class="btn btn-primary" onClick={()=>{display('8')}}>8</button></td>
                    <td>  <button class="btn btn-primary" onClick={()=>{display('9')}}>9</button></td>
                    <td> <button class="btn btn-primary" onClick={()=>{display('+')}}>+</button></td>

                    </tr>
                    <tr>
                    <td>  <button class="btn btn-primary" onClick={()=>{display('-')}}>.</button></td>
                    <td>  <button class="btn btn-primary" onClick={()=>{display('0')}}>0</button></td>
                    <td>  <button class="btn btn-primary" onClick={evaluateval}>=</button></td>
                    <td> <button class="btn btn-primary" onClick={()=>{display('*')}}>*</button></td>

                    </tr>

                </table>
            </div>

        </div>
    );

}

export default Main;

