import SearchBar from "./SearchBar";
import {NavLink} from "react-router-dom"

const Nav=({onSearch})=>{
return(
    <>
        <SearchBar onSearch={onSearch} />
        <NavLink to={"/home"}><button>Home</button></NavLink>
        <NavLink to={"/about"}><button>About</button></NavLink>
        <NavLink to={""}><button>Form</button></NavLink>
        <NavLink to={"/favorites"}><button>Favorites</button></NavLink>
    </>
)
}
export default Nav;