import React from 'react';

const User = (props:any)=>{
    return(
        <div>
            UserName:{props.name}
            <br />
            UserName:{props.name}
        </div>
    );
}
User.defaultProps = {
    name:"Testing"
}
export default User;