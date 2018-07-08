import React, { Component } from 'react';
import '../App.css'

class EditDog extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: '',
            image: '',
        }
    }



    render() {
        return (
            <div>
                <h1>Edit Dog</h1>
                <input />
                <input />
                <input />
                <button>Submit</button>
            </div>
        )
    }
}

export default EditDog