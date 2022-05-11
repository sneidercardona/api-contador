import { DECREMENTAR, INCREMENTAR, OBTENER_PERSONAJES,EPISODIO} from "../actions-type/actions-type";
import store from "../store/store"

const initiaState ={
    pesonajes : [],
    episodio: [],
    count : 0,
}

const reducer = (state=initiaState,action) => {
    switch(action.type){
        case INCREMENTAR:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENTAR:
            if(state.count <= 0)return state
            else return {
                ...state,
                count: state.count - 1

            }
        case OBTENER_PERSONAJES:
            return {
                ...state,
                personajes: action.payload,
                
                
            }
            case EPISODIO:
                return {
                    ...state,
                    episodio: action.payload,
                }

        default:
            return state;
    }

}
export default reducer;