import React, { Component } from 'react'
import ChildComponet from './ChildComponet'
class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: "parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(word) {
        alert(`Hello  i am called from ${word}`)
    }

    render() {
        return (
            <div>
                <ChildComponet greetHandler={this.greetParent} />
            </div>
        )

    }
}
export default ParentComponent