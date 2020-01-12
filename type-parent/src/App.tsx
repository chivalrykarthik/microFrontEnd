import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from './User';
import reducer from './store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.css';


(window as any).store = createStore(reducer);
const Count = (props:any) => {
    return <div>CountApp</div>
}
const Nav = (props:any) => {
    const navigateTo = (url:string) =>{
		console.log('url===',url);
		return (window as any).history.pushState(null, null, url)
	}
    return (
        <ul>
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/app2'>App2</Link></li>
            <li><Link to = '/user'>User</Link></li>            
			<li><Link to = '/app3'>App3</Link></li>
			<li><Link to = '/viewUser'>View</Link></li>
			
        </ul>
    )
}


class App extends React.Component<any, any>{
  render() {
    return (
      <Provider store={(window as any).store} >
            <Router>
                <Nav />
                <Route exact path='/' component={Count} />
                <Route exact path='/user' component={User} />

            </Router>
        </Provider>
    )
  }
}

export default App;
