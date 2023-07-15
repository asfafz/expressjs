import React, { useState, useEffect } from 'react';


function GetData() {
    const [users, setUsers] = useState([])

    const getuserdata = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        setUsers(await resp.json());
    }
    useEffect(() => {
        getuserdata();
    }, []);
    return (<>
        <h1>this is to get data from gid webs service</h1>

        {
            users.map((elem)=>{

                <li>elem.id</li>
            })
        }

    </>
    );
}

export default GetData;


