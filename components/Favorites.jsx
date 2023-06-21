
import Card from './Card';
import {useSelector, useDispatch} from 'react-redux'
import { orderCards,filterCards } from '../redux/actions';
import { useState } from 'react';
 

 const Favorites =()=>{
    const myFavorites=useSelector(state=>state.myFavorites)
    const dispatch = useDispatch();
    const [aux,setAux]=useState(false)

    const handleOrder=(event)=>{
        
        dispatch(orderCards(event.target.value))
        setAux(!aux);
        
    }

    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    }

    

    return(
        <div>
            <select onChange={handleOrder}>
                <option value="order" disabled="disabled">Order By</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="filter" disabled="disabled">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknow</option>
            </select>
            {
                myFavorites?.map(({id, name, status, species, gender, origin, image, onClose})=>{
                    return(
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin}
                        image={image}
                         onClose={onClose}
                        />
                    )
         })
            }
        </div>
    )
 };


export default Favorites;