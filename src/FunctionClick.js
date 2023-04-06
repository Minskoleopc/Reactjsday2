import React from "react";

function FunctionClick() {
    function clickH() {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickH}>Click me 2</button>
        </div>
    )
}
export default FunctionClick