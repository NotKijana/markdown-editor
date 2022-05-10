import { useContext } from 'react';
import AppContext from '../context/AppContext';
import docIcon from '../assets/icon-document.svg';

function DocumentContainer(props) {
  const { minWidth768, currentFile, changeFile } = useContext(AppContext);

  /**
   * @var currentFile is a state used to know what file is in use
   * @var props.date date the file was last edited (not live) or "Document Name" if null
   * @var props.input is for the active file and allows changes to file name
  */
  return (
    <div className={`document ${props.extraClass}`}>
      <img src={docIcon} alt="Document File Icon" className='document_icon' />
      
      <div className="document_container">
  
        <p className={`small ${!minWidth768 && 'invis'}`}>
          {props.date
          ? props.date 
          :'Document Name'}
        </p>

        <p className='heading_m'>
          {props.input
            ? <input id='fileInput' onChange={e => changeFile(e.target.value)} type='text' value={currentFile}/>
            : props.filename 
          }
        </p>
      </div>

    </div>
  )
}

export default DocumentContainer