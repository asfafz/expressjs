import React, { useState } from 'react'

function Tolist() {
    //const tasklistcontent = []

    const [task, settask] = useState('')
    const [tasklist, settasklist] = useState([])

    function addtask() {
        settasklist([...tasklist, task]);
        task('')
    }



    const tasklistc = tasklist.map((tasks) => {
        return (
            <div>
                <p>{tasks}</p>
            </div>
        )
    })


    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-4 shadow p-3 mb-5 bg-white rounded'>
                    <h5>ToDo List</h5>
                    <input type='text' placeholder='type task' className='form-control' value={task} onChange={(e) => { settask(e.target.value) }} ></input>
                    <button className='btn btn-success' onClick={addtask}>Add</button>
                    
                    <br />
                    {tasklistc}
                </div>
            

            </div>


        </div>




    );
}

export default Tolist;