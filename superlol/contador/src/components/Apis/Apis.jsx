import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { obtenerPersonajes,obtenerEpisodio} from "../../redux/actions/actions";
import s from '../Apis/Apis.module.css'



const Apis = () =>{

    const {personajes,episodio} = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleObtenerPersonajes = ()=>{
        dispatch(obtenerPersonajes());

    }

    
    const handleEpisodio = () => {
        dispatch(obtenerEpisodio())
    }
    

    return (
        <div className={s.stilo}>
            <button onClick={handleObtenerPersonajes}> personajes </button>
            {
                personajes?.map((element) => (
                    <div className={s.card}>
                        <span>
                            {element.name}
                        </span>
                        <img src={element.image} alt={element.name} className={s.fotos} />
                    </div>
                ))
            }
            <br />

            <button onClick= {handleEpisodio} className={s.epi}>Episodio</button>
            {
                episodio?.map((elemento)=>(
                    <div>
                        <span className={s.epi}>
                            {elemento.name}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Apis;