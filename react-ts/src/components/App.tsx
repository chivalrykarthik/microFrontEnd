import React from "react";
import { Provider } from 'react-redux';
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
    state = {name:''};
    componentDidMount(){
        if(this.props.data && this.props.data.name){
            this.setState({name:this.props.data.name});
        }
    }
    render() {
        return (
            <>
                <p>Default User:{this.state.name}</p>
                <Provider store= {(window as any).store}>
                
                    <Router>
                        <Route exact path="/" component={Root} />
                        <Route exact path="/app3" component={Root} />
                        <Route exact path="/viewUser" component={User} />
                    </Router>
                </Provider>

            </>
        );
    }
}

export default App;
