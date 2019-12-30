import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from './User';
import reducer from './store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.css';


window.store = createStore(reducer);
const Count = props => {
    return <div>CountApp</div>
}
const Nav = props => {
    const navigateTo = url => window.history.pushState(null, null, url)
    return (
        <ul>
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/app2'>App2</Link></li>
            <li><Link to = '/user'>User</Link></li>            
        </ul>
    )
}

const App = () => {
    return (
        <Provider store={window.store} >
            <Router>
                <Nav />
                <Route exact path='/' component={Count} />
                <Route exact path='/user' component={User} />

            </Router>
        </Provider>
    )
}

export default App