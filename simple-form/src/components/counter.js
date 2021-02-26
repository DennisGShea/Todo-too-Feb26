import React,  { useState } from 'react'

function Counter() {  
    const  [count, setCount] = useState(0)
    return (
    <>
    <h2>You clicked the button 0 times</h2>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <button onClick={() => setCount(count = 0)}>Reset</button>
    <button onClick={() => setCount(count - 1)}>-1</button>
    </>
    )
    }

export default Counter