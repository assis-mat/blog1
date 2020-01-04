import {
  ALTERAR_STATUS_COMMENTS_POSTS_LOADING,
  BUSCAR_COMMENTS_POSTS_SUCESSO,
  BUSCAR_COMMENTS_POSTS_ERRO
} from './Types'

import {
  RELATIVE_PATH_SERVER,
} from '../Util/Contants'

import axios from 'axios'


export const alterStatusLoading = (status) => {
  return {
    type: ALTERAR_STATUS_COMMENTS_POSTS_LOADING,
    payload: status
  }
}


export const buscarCommentsPosts = (idPost) => {

  return dispatch => {

    dispatch(
      {
        type: ALTERAR_STATUS_COMMENTS_POSTS_LOADING,
        payload: true
      }
    );
    axios.get(RELATIVE_PATH_SERVER + "/posts/"+idPost+"/comments",
      {
        headers: {
          'Content-Type': 'application/json'
        }

      }
    ).then(response => {
      buscarCommentsPostsSucesso(response.data, dispatch)
    }).catch((e) => {
      console.log("Teste Log ERROR: \n" + e + "\n")
      buscarCommentsPostsErro('Não foi possível conectar com o servidor, verifique sua internet!', dispatch);
    });
  }
}

const buscarCommentsPostsSucesso = (listCallWaiting, dispatch) => {
  dispatch(
    {
      type: BUSCAR_COMMENTS_POSTS_SUCESSO,
      payload: listCallWaiting
    }
  );
}

const buscarCommentsPostsErro = (msg, dispatch) => {
  dispatch(
    {
      type:  BUSCAR_COMMENTS_POSTS_ERRO,
      payload: msg
    }
  );
}



