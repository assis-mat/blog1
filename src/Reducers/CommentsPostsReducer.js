import {
    ALTERAR_STATUS_COMMENTS_POSTS_LOADING,
    BUSCAR_COMMENTS_POSTS_SUCESSO,
    BUSCAR_COMMENTS_POSTS_ERRO
  } from '../Actions/Types'

const INITIAL_STATE = {
    loading: true,
    msg: '',
    listComments:[]
    
}

export default (state = INITIAL_STATE, action) =>{

    switch(action.type){

        case BUSCAR_COMMENTS_POSTS_SUCESSO :{
            return {... state, listComments: action.payload, loading:false, msg:''}
        }
        case BUSCAR_COMMENTS_POSTS_ERRO:{
            return {... state, msg: action.payload, loading:false}
        }
       
        case ALTERAR_STATUS_COMMENTS_POSTS_LOADING :{
            return {... state, msg: '', loading:action.payload}
        }
        
    }  
        return state;
}
    