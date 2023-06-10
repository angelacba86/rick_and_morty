 import style from '../styles/Card.module.css';
 import {NavLink} from 'react-router-dom';
 //import {connect} from 'react-redux';//para conectar con el dispatch con clases
 import {useDispatch} from 'react-redux'
 import { addFav,removeFav } from '../redux/actions';
 import {useState, useEffect} from 'react';//useState para declarar estado local
 

   const Card= ({id,name,status,species,gender,origin,image, onClose,myFavorites}) => {
   const dispatch=useDispatch();//declaracion de dispatch en hooks

   const [isFav, setIsFav] = useState(false) //estado local
   
   const handleFavorite=()=>{//funcion que manejara el boton
      
         // isFav ? removeFav(id) : addFav(id,name,status,species,gender,origin,image,onClose);
         // setIsFav (!isFav)
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id))
      }else{
         setIsFav(true);
         dispatch(addFav({id,name,status,species,gender,origin,image, onClose}))
      }

      
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);
   return (
      <div className={style.card}>
         {
      isFav ? (
      <button onClick={handleFavorite}>❤️</button>
      ) : (
      <button onClick={handleFavorite}>🤍</button>
      )
         }
         { <><button onClick={()=>onClose(id)}>X</button>
         <NavLink to={`/detail/${id}`}><h2 className={style.character}>{name}</h2></NavLink>
         <img className={style.imagen} src={image} alt='' /> 
         <h3>Status:{status}</h3>
         <h3>Species:{species}</h3>
         <h3>Gender:{gender}</h3>
         <h3>Origin:{origin.name}</h3>
         </>
         }
      </div>
   );
}
//mapDispatchsToProps se declara fuera del componente y antes de la exportacion

// const mapDispatchToProps=(dispatch)=>{
//    return{
//       addFav:(character)=>dispatch(addFav(character)),
//       removeFav:(id)=>dispatch(removeFav(id))
//    }
   
// }
// const mapStateToProps=(state)=>{
//    return{
//       myFavorites: state.myFavorites //estado global
//    }
// };

export default Card
//export default connect(mapStateToProps,mapDispatchToProps)(Card) //para conectar el dispatch con el componente



