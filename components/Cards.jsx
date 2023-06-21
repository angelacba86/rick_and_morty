import Card from './Card';
import style from '../styles/Cards.module.css';

const Cards=(props)=> {
   const {characters, onClose}=props
   return (<div className={style.container}>
      {characters.map((char)=> {
         const {id,name,status,species,gender,origin,image}=char
         return <Card 
         key={id}
         id={id}
         name= {name}
         status={status}
         species={species}
         gender={gender}
         origin= {origin}
         image={image}
         onClose={onClose}
          />
      
      })}
   </div>);
}
export default Cards;