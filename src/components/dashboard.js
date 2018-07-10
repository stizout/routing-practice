import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditDog from './editDog';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            dogs: [],
            edit: false,
        }
    }

    componentDidMount() {
        axios.get('/dogs').then(res => {
            this.setState({dogs: res.data});
        }).catch(err => {
            console.log(err)
        })
    }

    deleteDog(id) {
        axios.delete(`/dogs/${id}`).then(res => {
            this.setState({dogs: res.data})
        }).catch(err => {
            console.log(err)
        });
    }

    showEdit() {
        this.setState({edit: !this.state.edit})
    }

    render() {
        console.log(this.state.dogs)
        return (
            <div>
                {this.state.dogs.map((dog, i) => {
                    return (
                        <div key={dog.id}>
                            {this.state.dogs.length > 0 ?
                            <div  className="dog">
                                <h1>Dog</h1>
                                <h1>{dog.name}</h1>
                                <h3>{dog.price}</h3>
                                <img src={dog.image} alt="this is a dog"/>
                                <button onClick={() => this.showEdit()}>Edit</button>
                                <button onClick={() => this.deleteDog(dog.id)}>Delete</button>
                            </div>
                            : null }
                        </div>
                    )
                })}
                {this.state.edit ?
                <EditDog id={this.state.dogs.id} />
                : null
                }
            </div>
        )
    }
}




export default Dashboard 