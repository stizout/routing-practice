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
    render() {
        const dogs = this.state.dogs.map((dog, i) => {
            return (
                <div key={dog.id}>
                    <div  className="dog">
                        <h1>{dog.name}</h1>
                        <h3>{dog.price}</h3>
                        <img src={dog.image} alt="this is a dog"/>
                        <button onClick={() => this.deleteDog(dog.id)}>Delete</button>
                        <EditDog id={dog.id}/>
                    </div>
                </div>
                )
        })
        return (
            <div>
                {dogs}
            </div>

        )
    }
}




export default Dashboard 