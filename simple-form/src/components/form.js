import React from 'react'


class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
                dogName: '',
                breed: '',
                age: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
handleChange(event) { 
    this.setState({ [event.target.name]:event.target.value })

}
        render() {
            const { dogName, breed, age } = this.state
            return(  )  // ???????
                <>
                <h1> {dogName}</h1>
                    <form>
                        <label for="dogName">
                        Dog Name:
                        <input 
                        name="dogName" 
                        type="text"
                        value={dogName}
                        onChange={this.handleChange}
                        />
                        </label>
                        <br/>

                        <label for="breed">
                        Dog Name:
                        <input 
                        name="dogName" 
                        type="text"
                        value={dogName}
                        onChange={this.handleChange}
                        />
                        </label>
                        <br/>
                        <label for="age">
                        Dog Name:
                        <input 
                        name="age" 
                        type="number"
                        value={age}
                        onChange={this.handleChange}
                        />
                    </form>
                </>

            )            
        }
}            


export default Form