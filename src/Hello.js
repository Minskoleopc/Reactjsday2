import React from "react";

let Hello = function () {
    return (
        <div className="one">
            <h1>Hello World</h1>
        </div>
    )


    // return React.createElement(
    //     'div',
    //     {className:"one"},
    //     React.createElement('h1', null, "Hello World")
    // )
}

export default Hello