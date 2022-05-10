import { useContext } from "react";
import AppContext from "../context/AppContext";
function Header(props) {
  const {theme} = useContext(AppContext)
  return (
    <header className={`header ${theme}`}>
        <p className='heading_s'>{props.name}</p>
        { props.image && 
          <span onClick={props.onClick} >
             {props.image }
          </span>
        }
    </header>
  )
}

export default Header;