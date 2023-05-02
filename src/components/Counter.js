import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);

    // use a callback function which is what we did (setCount(function)) when you need the previous value to determine the new state value
    // like we needed the previous count=0 to work with when adding and subtracting. when we are not using callback function i.e when the prev state value id not relied on
    // for the new state value, it's written as setCount(count + 1), this will still work but in standard practice you use callback function when the condition above is used
    function add() {
        setCount(function(prevCount){
            return prevCount + 1
        })
    }
    // use arrow function for minus
    function minus() {
        setCount(prevCount =>
            prevCount - 1
        )
    }
  return (
    <>
    <h1 className='header'>Counter</h1>
    <div className='main'>
        <div className='counter'>
            <button onClick={minus} counter-minus>-</button>
            <div className='counter-number'>
               <h1>{count}</h1>
            </div>
            <button onClick={add} counter-plus>+</button>
        </div>
    </div>
    </>
  )
}

export default Counter