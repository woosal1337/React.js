import React from "react"
import ReactDOM from "react-dom"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"Vusal",
            age:18
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default App