import React, { useState,useRef } from 'react';

function Controlledform() {

    const luckyname = useRef(null);
    const [updateval, SetUpdateval] = useState();

    const submitform = (e) => {
        e.preventDefault();
        SetUpdateval(luckyname.current.value)
    }

    return (
        <>
            <div className="row g-3 align-items-center">

                <div class="col-auto">
                    <form onSubmit={submitform}>
                        <input type="text" id="inputPassword6" className="form-control" ref={luckyname}></input>
                        <button className="btn btn-success" >Submit</button>
                    </form>
                </div>
<p>{updateval}</p>
            </div>
        </>
    )
}

export default Controlledform
