import React  from "react";
import { useState } from 'react';

function Msg2({message}){

    let [a, setCount] = useState(message);
    let handleClick = function () {
        // count = count + 1
        // console.log(count)
        setCount("Thanks for subcribe")
    }


    return  (
        <div>
            <h1>{a}</h1>
            <button onClick={handleClick}>Subcribe</button>
        </div>
        
    )


}

export default Msg2