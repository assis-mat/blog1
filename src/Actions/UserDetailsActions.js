import {
  ALTERAR_STATUS_USER_DETAILS_LOADING,
  BUSCAR_USER_DETAILS_SUCESSO,
  BUSCAR_USER_DETAILS_ERRO
} from './Types'

import {
  RELATIVE_PATH_SERVER,
} from '../Util/Contants'

import axios from 'axios'

export const alterStatusLoading = (status) => {
  return {
    type: ALTERAR_STATUS_USER_DETAILS_LOADING,
    payload: status
  }
}


export const buscarUserDetails = (userId) => {

  return dispatch => {

    dispatch(
      {
        type: ALTERAR_STATUS_USER_DETAILS_LOADING,
        payload: true
      }
    );
    axios.get(RELATIVE_PATH_SERVER + "/users/"+userId,
      {
        headers: {
          'Content-Type': 'application/json'
        }

      }
    ).then(response => {
      buscarUserDetailsSucesso(response.data, dispatch)

    }).catch((e) => {
      console.log("Teste Log ERROR: \n" + e + "\n")
      buscarUserDetailsErro('Não foi possível conectar com o servidor, verifique sua internet!', dispatch);
    });
  }
}

const buscarUserDetailsSucesso = (user, dispatch) => {
  dispatch(
    {
      type: BUSCAR_USER_DETAILS_SUCESSO,
      payload: user
    }
  );


}


const buscarUserDetailsErro = (msg, dispatch) => {
  dispatch(
    {
      type: BUSCAR_USER_DETAILS_ERRO,
      payload: msg
    }
  );
}



