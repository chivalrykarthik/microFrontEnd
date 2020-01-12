import React from 'react';
import {connect} from 'react-redux';

const User = (props:any)=>{
    return(
        <div>
            UserName:{props.name}
        </div>
    );
}

const mapStateToProps = (state)=>{
    return{
        name:state.name
    }
}
export default connect(mapStateToProps)(User);