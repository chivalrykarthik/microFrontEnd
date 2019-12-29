import React from "react"
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import './style.css';

const Count = props =>{
    return <div>CountApp</div>
}
const Nav = props => {
    const navigateTo = url => window.history.pushState(null, null, url)
    return (
        <ul>
            <li><a onClick = {()=>navigateTo('/')} >Home</a></li>
            <li><a onClick = {()=>navigateTo('/app2')} >App2</a></li>
        </ul>
    )
}
const App = ()=>{
    return(
        <Router>
            <Nav />
            <Route exact path = '/' component = {Count} />

            
        </Router>
    )
}

export default App