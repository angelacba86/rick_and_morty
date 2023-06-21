import { ADD_FAV, REMOVE_FAV, FILTER,ORDER } from "./actions";

const initialState={ myFavorites:[], allCharacters:[] };

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites,action.payload],
               allCharacters:[...state.myFavorites,action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites:state.myFavorites.filter(character=>character.id!==Number(action.payload))
            }
        
            case FILTER:
                const filterAllCharacter = state.allCharacters.filter(char=>char.gender===action.payload)
                return{
                    ...state,
                    myFavorites:filterAllCharacter
                }
            
            case ORDER:
                const allCharactersCopy = [...state.allCharacters];
                return{
                    ...state,
                    myFavorites:
                    action.payload==="Ascendente" 
                    ? allCharactersCopy.sort((a,b)=> a.id - b.id) 
                    : allCharactersCopy.sort((a,b)=> b.id - a.id) 
                }

        default:
            return{
                ...state
            }
            
    }

}
export default reducer;