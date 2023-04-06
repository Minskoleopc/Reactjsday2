import React , {Component} from 'react'

class ClassClick extends Component {

    onClickHandler(){
        console.log('button is clicked')
    }


    render(){
        return (
            <div>
                <button onClick={this.onClickHandler}>Click me</button>
            </div>

        )

    }
}

export default  ClassClick