import {useState} from 'react';
function App() {

   // let count = 0 ;

    let [count , setCount ]= useState(0);

    let handleClick = function () {
        // count = count + 1
        // console.log(count)
        setCount(count+1)
    }

    // let handleClick =  () => {
    //     console.log('Button is clicked')
    // }
    //let handleClick =() =>console.log('Button is clicked')
    return (
        <div>
            <button onClick={handleClick}>Count attempt</button>
            <div>No of attempt:{count}</div>
        </div>
    )



    // return (
    //     <div>
    //         <button onClick={() =>console.log('Button is clicked')}>Count attempt</button>
    //     </div>
    // )
}

export default App