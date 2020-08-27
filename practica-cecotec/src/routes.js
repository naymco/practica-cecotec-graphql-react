import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Containers
import App from './containers/App';
import Register from './containers/Register';

const Routes = ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
};


export default Routes;