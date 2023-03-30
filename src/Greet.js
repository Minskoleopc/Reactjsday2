
import React from "react";
function Greet({firstName,lastName,children}){

    //console.log(prop)

    return (
        <div>
            <h1>hello {firstName}{lastName}</h1>
            {children}
        </div>
    )
    
    

    // JSX
}

export default Greet