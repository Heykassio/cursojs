import * as types from '../types';

const INITIAL_STATE = {
  botaoClicado: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      return state;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      return state;
    }
    default:
      return state;
  }
}
