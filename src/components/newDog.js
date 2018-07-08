import React, { Component } from 'react';
import '../App.css'
import axios from 'axios';
class NewDog extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: '',
            image: '',
        }
    }

    updateState(key, userInput) {
        this.setState({[key]: userInput})
        console.log(this.state)
    }

    handlePost() {
        axios.post('/api/dogs', this.state).then(res => {
            this.setState({
                name: '',
                price: '',
                image: '',
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Create New Dog</h1>
                <input onChange={(e) => this.updateState('name', e.target.value)}/>
                <input onChange={(e) => this.updateState('price', e.target.value)}/>
                <input onChange={(e) => this.updateState('image', e.target.value)}/>
                <button onClick={() => this.handlePost()}>Submit</button>
            </div>
        )
    }
}

export default NewDog