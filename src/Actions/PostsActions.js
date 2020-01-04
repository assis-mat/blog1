import {
  ALTERAR_STATUS_POSTS_LOADING,
  SALVAR_POST,
  BUSCAR_POSTS_SUCESSO,
  BUSCAR_POSTS_ERRO,
  BUSCAR_USER_SUCESSO,
  BUSCAR_USER_ERRO,

  
} from './Types'

import {
  RELATIVE_PATH_SERVER,
} from '../Util/Contants'

import axios from 'axios'

salvarPost

export const salvarPost = (post) => {
  return {
    type: SALVAR_POST,
    payload: post
  }
}

export const alterStatusLoading = (status) => {
  return {
    type: ALTERAR_STATUS_LIST_LOADING,
    payload: status
  }
}


export const buscarPosts = () => {

  return dispatch => {

    dispatch(
      {
        type: ALTERAR_STATUS_POSTS_LOADING,
        payload: true
      }
    );
    axios.get(RELATIVE_PATH_SERVER + "/posts",
      {
        headers: {
          'Content-Type': 'application/json'
        }

      }
    ).then(response => {
      buscarPostsSucesso(response.data, dispatch)

      axios.get(RELATIVE_PATH_SERVER + "/users",
        {
          headers: {
            'Content-Type': 'application/json'
          }
  
        }
      ).then(response => {

        buscarUserSucesso(response.data, dispatch)

      }).catch((e) => {
        buscarUsersErro('Não foi possível conectar com o servidor, verifique sua internet!', dispatch);
      });
    }).catch((e) => {

      buscarPostsErro('Não foi possível conectar com o servidor, verifique sua internet!', dispatch);
    });
  }
}

const buscarPostsSucesso = (list, dispatch) => {
  dispatch(
    {
      type: BUSCAR_POSTS_SUCESSO,
      payload: list
    }
  );
}


const buscarPostsErro = (msg, dispatch) => {
  dispatch(
    {
      type: BUSCAR_POSTS_ERRO,
      payload: msg
    }
  );
}

const buscarUserSucesso = (list, dispatch) => {
  dispatch(
    {
      type: BUSCAR_USER_SUCESSO,
      payload: list
    }
  );


}


const buscarUsersErro = (msg, dispatch) => {
  dispatch(
    {
      type: BUSCAR_USER_ERRO,
      payload: msg
    }
  );
}

