import {
    ALTERAR_STATUS_USER_DETAILS_LOADING,
    BUSCAR_USER_DETAILS_SUCESSO,
    BUSCAR_USER_DETAILS_ERRO
  } from '../Actions/Types'

const INITIAL_STATE = {
    loading: true,
    msg: '',
    user:{},
    
}

export default (state = INITIAL_STATE, action) =>{

    switch(action.type){

        case BUSCAR_USER_DETAILS_SUCESSO :{
            return {... state, user: action.payload, loading:false, msg:''}
        }
        case BUSCAR_USER_DETAILS_ERRO:{
            return {... state, msg: action.payload, loading:false}
        }
        case ALTERAR_STATUS_USER_DETAILS_LOADING :{
            return {... state, msg: '', loading:action.payload}
        }
    }  
        return state;
}
    