interface Action{
    type:string;
    data?:any;
}

const initialValue = {
    name:"Karthik",
    country:"India"
}


const reducer = (state=initialValue,action:Action)=>{
    switch(action.type){
        case "SHOW":
            return state;
        case "UPD":
            return {...state,name:action.data.name};
        default:
            return state;
    }
}

export default reducer;