import React from 'react';
import {connect} from 'react-redux';
type IProps = {
name:string;
country:string;
}
type IState = IProps;
const User = (props:IProps) =>{
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Country:{props.country}</p>            
        </div>
    )
}

const mapStateToProps = (state:IState)=>{
    return {
        name:state.name,
        country:state.country
    }
}
const User1 = ()=>{
    return(<div>User</div>)
}
export default connect(mapStateToProps)(User);
//export default User;