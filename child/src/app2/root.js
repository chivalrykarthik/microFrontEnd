import React from 'react';
import {Provider} from 'react-redux';
import User from './UpdUser';
const Home = props =>{
    return (
		<Provider store = {window.store} >
			<div>Sample out put from second app</div>
			<div>Name:{props.data.name}</div>
			<User />
		</Provider>
	)
};



export default Home;