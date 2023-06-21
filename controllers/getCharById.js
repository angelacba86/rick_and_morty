const axios = require("axios");

const getCharById=(res,id)=>{
    axios(`https://rickandmortyapi.com/api/character/:${id}`)
    .then(response=>response.data)
    .then(({data})=>{
        let char = {
        id:data.id,
        name:data.name,
        gender:data.gender,
        species:data.species,
        origin:data.origin,
        image:data.image,
        status:data.status
        }
        res
        .writeHead(200,{"Content-type":"application/json"})//writeHead es para indicar que tipo de datos envias y que esta todo ok
        .end(JSON.stringify(char))// con end() finaliza la rpta y se envia info a cliente
        //JSON.stringrify sirve para enviar el objeto en formato json.
    })
    .catch(500,{"Content-type":"text/plain"})
    
}


module.export = getCharById;