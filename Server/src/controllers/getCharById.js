const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=> response.data)
//     .then((data)=> {
//         const character = {
//         id:data.id,
//         name:data.name,
//         gender:data.gender,
//         species:data.species,
//         origin:data.origin?.name,
//         image:data.image,
//         status:data.status
//         }
        
//         res.writeHead(200,{"Content-type": "application/json"})//writeHead es para indicar que tipo de datos envias y que esta todo ok
//         res.end(JSON.stringify(character))// con end() finaliza la rpta y se envia info a cliente
//         //JSON.stringrify sirve para enviar el objeto en formato json.
//     })
//     .catch((error)=> {
//         res.writeHead(500, {"Content-type": "text/plain"})
//         res.end(error.message)
//     })
// }



const getCharById = (req, res) => {
  
    const {id} = req.params;

    axios(URL + id)
    .then((response)=> response.data)
    .then((data)=>{
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin?.name,
      image: data.image,
      status: data.status,
    };
     character.name
    ? res.status(200).json(character)
    : res.status(404).send("Not found");
    })
    .catch((error) => {
     res.status(500).json({message: error.message});
    })
};

module.exports = getCharById;
