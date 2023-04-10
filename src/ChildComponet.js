import React from "react";

const ChildComponet = function(props){
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )

}
export  default ChildComponet