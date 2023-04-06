import React, { Component } from 'react'

class EventBind extends Component {

    constructor() {
        super()
        this.state = {
            message: "hello"
        }
    }

    // ClickH(){
    //     // console.log(this)

    //     this.setState({
    //         message:"Bye"
    //     })
    // }

    ClickH = () => {
        this.setState({
            message: "Bye"
        })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.ClickH.bind(this)}> ClickMe</button> */}
                {/* <button onClick={()=>this.ClickH()}> ClickMe</button> */}
                <button onClick={this.ClickH}> ClickMe</button>

            </div>

        )
    }


}

export default EventBind