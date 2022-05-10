import { useState, useRef, useContext } from 'react';
import AppContext from '../context/AppContext';
import saveIcon from '../assets/icon-save.svg';
import DocumentContainer from '../components/DocumentContainer';
import SideBar from './Sidebar';

function Navigation() {
  const { setDeletePopup, minWidth768 } = useContext(AppContext);
  const [ sideBar, setSetBar ] = useState(false);
  
  // Ref for burger html input
  const burgerInput = useRef();

  // Checks to see if sidebar is open or closed
  // Event will be the burger checkbox input
  const checkSideBar = (event) => {
    if(event.target.checked) {
      // Sidebar will be visible
      setSetBar(true)
    } else {
      // Sidebar will NOT be visible
      setSetBar(false);
    }
  }

  return (
    <nav className={`navigation  ${!minWidth768 && 'mobile'}`}>
      {sideBar && <SideBar />}
      <div className="nav_container">
        <input type="checkbox" onChange={e => checkSideBar(e)} id="burgerInput" ref={ burgerInput } />
  
        <label id="burger" className={`burger  ${!minWidth768 && 'mobile'}`} htmlFor='burgerInput' >
          <div className={`topping`} id='one'></div>
          <div className={`topping`} id='two'></div>
          <div className={`topping`} id='three'></div>
        </label>
      </div>

      {!sideBar
      && <p className={`title  ${!minWidth768 && 'invis'}`}>MARKDOWN</p>
      }
      
      <div className="nav_file">
        {(!sideBar || minWidth768)
        && <DocumentContainer input={true} />
        }
      </div>

      <div className="nav_options">
        <svg onClick={() => setDeletePopup(true)} id='trashIcon' width="18" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"/></svg>
      
        <button className={`button document_button  ${!minWidth768 && 'mobile'}`}>
          <img src={saveIcon} id='saveIcon' className={!minWidth768 && 'mobile'} alt="Save File Icon" />
          <p className={`heading_m txt-white  ${!minWidth768 && 'invis'}`}>Save Changes</p>
        </button>
      </div>
    </nav>
  )
}

export default Navigation