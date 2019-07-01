import { LISTA_CONVERSA_USUARIO, ENVIA_MENSAGEM_SUCESSO } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LISTA_CONVERSA_USUARIO:
            return action.payload
        default:
            return state;
    }
}