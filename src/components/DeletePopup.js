import { useContext } from "react";
import AppContext from "../context/AppContext";

function DeletePopup() {
  const { deletePopup, setDeletePopup, theme } = useContext(AppContext);

  /**
   * If @var deletePopup is true then popup will be visible
   * if @function setDeletePopup is used to close the popup on click
   * Delete button does nothing as of now
  */
  return (
    deletePopup &&
      <div id='popup'>
        <div id="popup_bg" onClick={() => setDeletePopup(false)}></div>
        <div id='popup_box' className={theme}>
            <h4 className='header_s'>Delete this document?</h4>
            <p id='popup_text'>Are you sure you want to delete 'welcome.md' document and its contents? 
            This action cannot be reversed.
            </p>
            <button id='popup_button' className="button_lrg">
                Confirm & Delete
            </button>
        </div>
      </div>
  )
}

export default DeletePopup;