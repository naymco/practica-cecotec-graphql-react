import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Containers
import Admin from './containers/Admin';
import Login from './containers/Login';
import UsersList from './containers/UsersList';
import Products from './containers/Products';

const Routes = ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Admin}/>
                <Route path="/login" component={Login} />
                <Route path="/users" component={UsersList} />
                <Route path="/products" component={Products} /> 
            </Switch>
        </Router>
    );
};


export default Routes;