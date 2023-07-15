import { getDefaultNormalizer } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import Loadeddata from './LoadedData';
import Loading from './Loading';
const UseEffectApi = () => {
    const [mydata, setMydata] = useState([]);
    const [loading, setLoading] = useState(true)

    const getuserdata = async () => {
        try {
            setLoading(false)
            const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
            setMydata(await responce.json());
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getuserdata();
    }, []);


if(loading){
    <Loading />
}
    return (
        <>
            <Loadeddata mydata={mydata} />
        </>
    );
}
export default UseEffectApi