// if else 
// element variable approaoch
//ternary based appropach 
// shortcuit

import React , {Component} from "react";

class UserGreet extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn:false  

        }
    }

    // render(){
    //     if(this.state.isLoggedIn){
    //         return <div><h1>welcome chinmay</h1></div>
    //     }
    //     else {
    //         return <div><h1>welcome user!</h1></div>
    //     }
    // }

    // elements varibales approach


    // render(){
    //     let message = undefined
    //     if(this.state.isLoggedIn){
    //         message = "Welcome chinmay !"
    //     }
    //     else {
    //         message = "Welcome user !"
    //     }
    //    return<h>{message}</h>
    // }

    // tenary approach

    // render(){
    //     return this.state.isLoggedIn? <h1>welcome chinmay!</h1>: <h1>welcome user!</h1>
    // }


      render(){
        return this.state.isLoggedIn && <h1>welcome user chinmay!</h1>
    }


     








}

export default UserGreet