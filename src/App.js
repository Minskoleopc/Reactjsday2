import { useState } from 'react';
import Greet from './Greet';
import Welcome from './Welcome'
import Hello from './Hello';
import Hello2 from './Hello2';
import Welcome2 from './Welcome2';
import Props from './Props';
function App() {

    // let count = 0 ;

    let [count, setCount] = useState(0);

    let handleClick = function () {
        // count = count + 1
        // console.log(count)
        setCount(count + 1)
    }

    // let handleClick =  () => {
    //     console.log('Button is clicked')
    // }
    //let handleClick =() =>console.log('Button is clicked')
    return (
        <div>
            <button onClick={handleClick}>Count attempt</button>
            <div>No of attempt:{count}</div>
            {/* <Greet firstName = "poorva"/>
            <Greet firstName = "sarika"/>
            <Greet firstName = "amol"/>
            <Welcome/>
            <Hello/>
            <Hello2/>
            <Welcome2/> */}

            <Props name="ram" lastName="dani" />
            <Props name="sham" lastName="deshmukh" />
            <Props name="satish" lastName="dani" />

            <Greet firstName = "chinmay" lastName = "deshpande">
                <p>Hello i am learning js</p>
            </Greet>



        </div>
    )



    // return (
    //     <div>
    //         <button onClick={() =>console.log('Button is clicked')}>Count attempt</button>
    //     </div>
    // )
}

export default App