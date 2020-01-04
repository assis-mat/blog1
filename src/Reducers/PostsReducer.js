import {
    ALTERAR_STATUS_POSTS_LOADING,
    SALVAR_POST,
    BUSCAR_POSTS_SUCESSO,
    BUSCAR_POSTS_ERRO,
    BUSCAR_USER_SUCESSO,
    BUSCAR_USER_ERRO,
  } from '../Actions/Types'

const INITIAL_STATE = {
    loading: true,
    msg: '',
    listPosts:[],
    listUsers:[],
    post:"",
    
}

export default (state = INITIAL_STATE, action) =>{

    switch(action.type){

        case BUSCAR_POSTS_SUCESSO :{
            return {... state, listPosts: action.payload, loading:false, msg:''}
        }
        case BUSCAR_POSTS_ERRO:{
            return {... state, msg: action.payload, loading:false}
        }
        case BUSCAR_USER_SUCESSO :{
            return {... state, listUsers: action.payload, loading:false, msg:''}
        }
        case BUSCAR_USER_ERRO:{
            return {... state, msg: action.payload, loading:false}
        }
        case SALVAR_POST :{
            return {... state, post:action.payload}
        }

        case ALTERAR_STATUS_POSTS_LOADING :{
            return {... state, msg: '', loading:action.payload}
        }
        
    }  
        return state;
}
    