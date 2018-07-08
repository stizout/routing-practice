import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Landing from './components/landing';
import Dashboard from './components/dashboard';
import NewDog from './components/newDog';
import EditDog from './components/editDog';

export default (
    <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path="/dogs" component={Dashboard}/>
        <Route path="/new" component={NewDog}/>
        <Route path="/edit" component={EditDog}/>
    </Switch>
)