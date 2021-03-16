import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelectBox = this.handleSelectBox.bind(this)
    }

    handleChange(event) {

        const {name, value, type, checked} = event.target

        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})

    }

    handleSubmit(event) {
        let finalRes = `
        Name: ${this.state.firstName}
        Surname: ${this.state.lastName}
        Age: ${this.state.age}
        Gender: ${this.state.gender}
        Destination: ${this.state.destination}
        `

        alert(finalRes)
        event.preventDefault();
    }

    handleSelectBox(event) {
        const destinationVal = event.target.value

        this.setState({
            destination: destinationVal
        })
    }

    handleCheckBox(event) {
        const restrictionVal = event.target.value

        this.setState({
            dietaryRestrictions: "coffee"
        })
    }

    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange}/><br/>
                    <input placeholder="Last Name" name="lastName" onChange={this.handleChange}/><br/>
                    <input type="number" placeholder="Age" name="age" onChange={this.handleChange}/><br/>

                    <div onChange={this.handleChange}>
                        <input type="radio" value="Male" name="gender"/> Male
                        <input type="radio" value="Female" name="gender"/> Female
                        <input type="radio" value="Other" name="gender"/> Other
                    </div>

                    <select onChange={this.handleSelectBox}>
                        <option type="selectbox" name="destination" value="Istanbul" selected>Istanbul</option>
                        <option type="selectbox" name="destination" value="Tokyo">Tokyo</option>
                        <option type="selectbox" name="destination" value="Baku">Baku</option>
                    </select>

                    <div onChange={this.handleChange}>
                        <label>
                            Vegeterian
                            <input type="checkbox"
                                   name="dietaryRestrictions"
                                   value="Vegeterian"/>
                        </label>

                        <label>
                            Kosher
                            <input type="checkbox"
                                   name="dietaryRestrictions"
                                   value="Kosher"/>
                        </label>

                        <label>
                            Lactose Free
                            <input type="checkbox"
                                   name="dietaryRestrictions"
                                   value="Lactose Free"/>
                        </label>
                    </div>

                    <button onClick={this.handleSubmit}>Submit</button>
                </form>

                <hr/>
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions:
                    {this.state.dietaryRestrictions}
                </p>
            </main>
        )
    }
}

export default App
