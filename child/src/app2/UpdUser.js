import React from 'react';
import {connect} from 'react-redux';
const User = props=>{
	 const handleChange = (e) => {
	 console.log(e)
        props.upd(e.target.value);
    }
	return(
			<>
				<label>Name</label><input type = 'text' value = {props.name}  onChange={handleChange} />
				<label>Country</label><input type = 'text' value = {props.country}  onChange={handleChange} />
			</>
		
	)
}
const mapStateToProps = state=>{
	return{
		name:state.name,
		country:state.country
	}
}
const mapsDispatchToProps = dispatch=>{
	return {
		upd:(value)=>{
			let action = {};
			action.data = {name:value};
			action.type = "UPD";
			dispatch(action);			
		}
	}
}
export default connect(mapStateToProps,mapsDispatchToProps)(User);