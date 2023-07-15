import React from 'react';

const Loadeddata = ({mydata}) => {
    return (
       
            
            <h1>{mydata.map((elem) => {
                return (
                    <>
                        <li>{elem.id} - {elem.body}</li>
                    </>
                )
            })}</h1>
       
    );
}

export default Loadeddata;
