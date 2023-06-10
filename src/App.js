import './styles/App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { useLocation } from 'react-router-dom';



function App() {
   const [characters, setCharacters]=useState([]);
   const {pathname}=useLocation();
  
   const onSearch=(id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id)=>{
     const charactersFilter= characters.filter(char => char.id !== parseInt(id));
     setCharacters(charactersFilter);
   };

   return (
      <div className='App'>
        {pathname !== "/" && <Nav onSearch={onSearch}/>}<br></br>
         
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="*" element={<Error/>}></Route>
            <Route path="/" element={<Form/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
