import React from 'react';
const User = props => {
	const handleChange = (e) => {
		console.log(e)
		props.upd(e.target.value);
	}
	return (
		<>
			<label>Name</label><input type='text' value={props.name || ""} onChange={handleChange} />
			<label>Country</label><input type='text' value={props.country || ""} onChange={handleChange} />
		</>

	)
}
export default User;