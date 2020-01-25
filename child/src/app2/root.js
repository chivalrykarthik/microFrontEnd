import React,{useEffect,useState} from 'react';
import { Provider } from 'react-redux';
import User from './UpdUser';

const Home = props => {
	let [user,setUser] = useState({});
	useEffect(()=>{
		console.log("Inside Effect hook:")		
		let subscribe = props.data.subscribeParent(()=>{
			let newUser = props.data.parentState();
			if(newUser.name){
				setUser(newUser);
			}
		});
		return subscribe;
	},[props.data.subscribeParent]);
	useEffect(()=>{
		if(props.data && typeof props.data.parentState == "function"){
			let newUser = props.data.parentState();
			setUser(newUser);
		}
	},[])
	
	return (
		<>
			<div>Sample out put from second app</div>
			<div>Name:{user.name}</div>
			<User {...user} />
		</>
	)
};


export default Home;