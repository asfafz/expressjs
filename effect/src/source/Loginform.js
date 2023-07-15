import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
const Loginform = () => {


    const [emailid, setEmailid] = useState("")
    const [pass, setPass] = useState("")
    const [allusers, setAllusers] = useState([])


    const sumbitform = (e) => {
        e.preventDefault();
        const users = { email: emailid, password: pass }
        console.log(pass)
        setAllusers([...allusers, users])
        console.log(allusers);
    }

    return (
        <>
            <h1>this is test</h1>
            <form onSubmit={sumbitform}>
                <label htmlFor="emailid">Email Id</label>
                <input id="emailid" name="emailid" type="text" value={emailid} onChange={(e) => setEmailid(e.target.value)}></input>
                <label htmlFor="passid">Password</label>
                <input id="passid" name="passid" type="password" onChange={(e) => setPass(e.target.value)} value={pass}></input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Loginform