
const userData = {
    user: {
        name: '',
        email: '',
        rol: '',
        picture: ''
    }
}

function userReducer(state = userData , action){
    switch(action.type){
        case 'SIGIN':{
            return {
                ...state, 
                user: {...action.payload}
            }
        }
        case 'LOGOUT':{
            return {...state, user: userData.user}
        }
        default:
            return state;
    }
}


export default userReducer;