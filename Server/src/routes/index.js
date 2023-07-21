
const router= require('express').Router();
// const express =  require('express');
// const server = express();

const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const {postFav,deleteFav} = require ('../controllers/handleFavorites');

//Middleware
// server.use(express.json())

//routes
router.use("/character/:id", getCharById)
router.use("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports= router;