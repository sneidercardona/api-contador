import { DECREMENTAR, EPISODIO, INCREMENTAR, OBTENER_PERSONAJES, } from "../actions-type/actions-type"

const incremetar = ()=>{
    
    return {
        type:INCREMENTAR
    }
}

const decrementar = () =>{

    return {
        type: DECREMENTAR,
    }
}


const obtenerPersonajes = () => {
    
    
    return (dispatch) => {
        
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => dispatch({
            type:OBTENER_PERSONAJES,
            payload:data.results,
        }))
    }
}

const obtenerEpisodio = () => {
    return (dispatch) => {
        fetch("https://rickandmortyapi.com/api/episode")
        .then(response => response.json())
        .then(data => dispatch ({
            type:EPISODIO,
            payload:data.results,
        }))
    }
}

export {
    incremetar,
    decrementar,
    obtenerPersonajes,
    obtenerEpisodio
}

