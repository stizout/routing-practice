import React, { Component } from 'react';
import '../App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        axios.post('/dogs', this.state).then(res => {
            this.setState({
                name: '',
                price: '',
                image: '',
            });
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1>Create New Dog</h1>
                Name: <input onChange={(e) => this.updateState('name', e.target.value)}/>
                Price: <input onChange={(e) => this.updateState('price', e.target.value)}/>
                Image: <input onChange={(e) => this.updateState('image', e.target.value)}/>
                <Link to='/dogs'><button onClick={() => this.handlePost()}>Submit</button></Link>
            </div>
        )
    }
}

export default NewDog