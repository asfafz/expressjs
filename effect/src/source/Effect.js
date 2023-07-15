import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';

const Effct = () => {
    const [count, setCount] = useState(0)
    const [winwidth, setWinwidth] = useState(window.innerWidth)

    const actualwidth = () => {

        setWinwidth(window.innerWidth)
    }

    useEffect(() => {
        if (count > 1) { document.title = `${count}` }
        window.addEventListener('resize', actualwidth)

        return()=>{
            window.removeEventListener('resize',actualwidth)
        }
    });

    return (
        <>
            <h1>Counter {count}</h1>
            <h2>window width: {winwidth}</h2>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
        </>
    )
}
export default Effct;

