import React from 'react';
type IProps = {
name:string;
country:string;
}

const User = (props:IProps) =>{
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Country:{props.country}</p>            
        </div>
    )
}


export default User;