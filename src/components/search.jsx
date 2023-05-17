
import './search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



export default function Search(){
    return(
        <form id="search-form" >
            <button type="submit" form="search-form" value="Submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <label style={{display:'none'}} htmlFor="gsearch">Search Google:</label>
            <input type="search" id="gsearch" name="gsearch" placeholder="Client ID" required/>
        </form>
        )
}