import {createStore,applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";//para hacer peticiones a la api
import reducer from "./reducer";


const composeEnhacer= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose; //esta linea es para conectar con la extension del navador redux devtools

const store = createStore(
    reducer,
    composeEnhacer (applyMiddleware(thunkMiddleware))//esta linea sirve para hacer peticiones a la API
    );

    export default store;