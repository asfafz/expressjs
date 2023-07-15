import React, { useEffect,useState } from 'react';

const Testtodo = () => {
    const [dataitem, setdataitem] = useState("");
    const [items, setitems] = useState([]);

    const savedata = () => {
        setitems([...items, dataitem])
        console.log(items)
    }
    const emptydata = () => {
        setitems([])
       
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);

    return (<>
        <div>
            <input type="text" value={dataitem} onChange={(e) => { setdataitem(e.target.value) }}></input> &nbsp;
            <buton class="btn btn-success" onClick={savedata}>Add</buton> &nbsp;
            <buton class="btn btn-success" onClick={emptydata}>Empty Data</buton>
        </div>
       {
            items.map((ar) => {
                return (<h1>{ar}</h1>)
            }
            )
        }
    </>
    );
}

export default Testtodo;
