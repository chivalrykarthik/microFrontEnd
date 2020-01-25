import React from "react";
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import User from './User';
import "./../assets/scss/App.scss";



const Root = (props) => {
    return (
        <div className="app">
            <h1>Hello World!</h1>
            <p>Foo to the barz</p>

        </div>
    )
}

class App extends React.Component<any, any> {
    state = { name: '' };
    unsubscribe:any;
    componentDidMount() {

        if (this.props.data && this.props.data.name) {
            this.setState({ name: this.props.data.name });
        }
    }
    static getDerivedStateFromProps(newProps, prevState) {
        if (!prevState.name &&
            typeof newProps.data?.subscribeParent === "function") {
            let user = newProps.data.parentState();
            return user;
        }
        return null;
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.data?.subscribeParent &&
            typeof this.props.data?.subscribeParent === 'function') {
               this.unsubscribe =  this.props.data.subscribeParent(()=>{
                    let user = this.props.data.parentState();
                    this.setState(user)
                });
        }
    }

    componentWillUnmount(){
        if(typeof this.unsubscribe === "function"){
            this.unsubscribe();
        }
    }
    render() {
        return (
            <>
                <p>Default User:{this.state.name}</p>


                <Router>
                    <Route exact path="/" component={Root} />
                    <Route exact path="/app3" component={Root} />
                    <Route exact path="/viewUser" render={()=><User {...this.state} /> } />
                </Router>


            </>
        );
    }
}

export default App;
