import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import User from './User';
import './style.css';

const User = React.lazy(() => import('./User'));


const Count = (props: any) => {
    return <div>CountApp</div>
}
const Nav = (props: any) => {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/app2'>App2</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/app3'>App3</Link></li>
            <li><Link to='/viewUser'>View</Link></li>

        </ul>
    )
}
const processUserDetails = (user: any) => {
    if (user && user.name) {
        return {
            name: user.name,
            country: user.country
        }
    }
    return null;
}

class App extends React.Component<any, any>{
    state = {
        name: '',
        country: ''
    }
    static getDerivedStateFromProps(newProps: any, prevState: any) {
        if (!prevState.name &&
            typeof (newProps?.data?.subscribeParent) == "function"
        ) {
            let user = newProps.data.parentState();
            let userState = processUserDetails(user);
            return userState;
        }
        return null;
    }
    componentDidMount() {
        if (typeof this.props?.data?.subscribeParent == "function") {
            this.subscribeParent();
        }
    }
    componentDidUpdate(prevProps: any) {
        if (!prevProps.data.subscribeParent &&
            typeof this.props.data.subscribeParent == "function") {
            this.subscribeParent();

        }
    }
    subscribeParent() {
        this.props.data.subscribeParent(() => {
            let user = this.props.data.parentState();
            let userDetails = processUserDetails(user);
            if (userDetails) {
                this.setState(userDetails);
            }
        });
    }

    render() {
        return (
            <Router>
                <Nav />
                <Route exact path='/' component={Count} />
                <Route exact path='/user' render={() => {
                    return (
                        <Suspense fallback={<div>Loading ...</div>}>
                            <User {...this.state} />
                        </Suspense>
                    )

                }
                } />
            </Router>
        )
    }
}

export default App;
