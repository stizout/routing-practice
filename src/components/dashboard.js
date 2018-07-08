import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            dogs: [],
        }
    }

    componentDidMount() {
        axios.get('/dogs').then(res => {
            this.setState({dogs: res.dogs});
        });
    };

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.dogs.map((dog, i) => {
                    return (
                        <div key={i} className="dog">
                            <h1>Dog</h1>
                            <h1>{dog.name}</h1>
                            <h3>{dog.age}</h3>
                            <img src={dog.image} alt="this is a dog"/>
                            <Link to="/edit"><button>Edit</button></Link>

                        </div>
                    )
                })}
            </div>
        )
    }
}




export default Dashboard 