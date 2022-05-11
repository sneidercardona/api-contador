import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { decrementar, incremetar } from '../../redux/actions/actions';

const Test = ()=>{

    // DESTRUCTURAR CUANDO SE ESTES USASNDO EL USESELECTOR Y DESTRUCTURAR TENIENDO EN CUENTA
    // EL MISMO NOMBRE QUE SE ESTA INVOCANDO PARA QUE NO SALGA EL POLLO REVELDE JAJAJ XD
    
   const {count} = useSelector((state)=>state);
   const dispatch = useDispatch();

   const handleIncrementar = () =>{
       dispatch(incremetar())
   }

   const handleDecrementar = () =>{
       dispatch(decrementar())
   }
    
    return(
        <div>
            <h1> hola : {count}</h1>
            <button onClick={handleIncrementar}>incremantar</button>
            <button onClick={handleDecrementar} > decrementar</button>
        </div>
    )
}

export default Test;