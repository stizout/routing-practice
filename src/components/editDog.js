import React, { Component } from 'react';
import '../App.css'
import axios from 'axios';

class EditDog extends Component {
    constructor() {
        super();
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state = {
            name: '',
            price: '',
            image: '',
            edit: false,
        }
    }

    handleUserInput(key, userInput) {
        this.setState({[key]: userInput})
        console.log(this.state)
    }

    handleUpdate(id) {
        axios.put(`/dogs/${id}`, {...this.state}).then(res => {
            this.setState({
                name: '',
                price: '',
                image: '',
            })
        })
    }

    showEdit() {
        this.setState({edit: !this.state.edit})
    }


    render() {
        return (
            <div>
                <button onClick={() => this.showEdit()}>Edit</button>
                {this.state.edit ?
                <div>
                <h1>Edit Dog</h1>
                    <input placeholder="Name" onChange={(e) => this.handleUserInput('name', e.target.value)}/>
                    <input placeholder="Price" onChange={(e) => this.handleUserInput('price', e.target.value)}/>
                    <input placeholder="image" onChange={(e) => this.handleUserInput('image', e.target.value)}/>
                    <button onClick={() => this.handleUpdate(this.props.id)}>Submit</button>
                </div>

                : null }
            </div>
        )
    }
}

export default EditDog