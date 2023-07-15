import React from 'react'
import { useState } from 'react'
function Hookrules() {


    const bioData = [
        { id: 0, name: 'asif', desg: 'sm' },
        { id: 1, name: 'azeem', desg: 'sm' }
    ]
    const [myarray, setmyarray] = useState(bioData)
    const clearArray = () => {
        setmyarray([])
    }
    const removeelement = (id) => {
        const newarry = myarray.filter((elem) => {
            return (
                elem.id != id
            )
        })
        setmyarray(newarry)
        //  alert(id)
    }
    return (
        <div>
            {
                myarray.map((emp) => {
                    return (
                        <h1 key={emp.id}>{emp.name}
                            <button onClick={() => removeelement(emp.id)}>Remove</button>
                        </h1>
                    )
                })

            }
            <button onClick={clearArray}>Click</button>
        </div>
    )
}

export default Hookrules