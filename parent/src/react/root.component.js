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
            <li><a onClick={() => navigateTo('/')} >Home</a></li>
            <li><a onClick={() => navigateTo('/app2')} >App2</a></li>
            <li><a onClick={() => navigateTo('/user')} >User</a></li>
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