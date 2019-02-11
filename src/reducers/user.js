
const user = {
    name: '',
    email: '',
    rol: '',
    picture: ''
};

function userReducer(state = user, action){
    switch(action.type){
        case 'SIGIN':{
            return {
                ...state, 
                user: {...action.payload}
            }
        }
        case 'LOGOUT':{
            return {...state, user}
        }
        default:
            return state;
    }
}


export default userReducer;