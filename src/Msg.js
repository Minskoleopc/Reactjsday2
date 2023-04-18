import React , {Component} from 'react'

class Msg extends Component {

    constructor(props){

        // {
            //message:"welcome"
        // }

        super(props)
        this.state = {
            message:props.message
        }

    }
    changeMessage(){
        
        // this.state.message = "Thank you for subcribe"
        // console.log(this.state.message)

        this.setState({
            message:"Thank for Subcribing..."
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subcribe</button>
            </div>
            
        )
    }

}

export default Msg