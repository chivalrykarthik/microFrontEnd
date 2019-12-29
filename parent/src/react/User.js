import React from 'react';
import {connect} from 'react-redux';

const User = props =>{
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Country:{props.country}</p>            
        </div>
    )
}

const mapStateToProps = state=>{
    return {
        name:state.name,
        country:state.country
    }
}

export default connect(mapStateToProps)(User);