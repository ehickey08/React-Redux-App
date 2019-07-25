import React from 'react'
import {NavLink} from 'react-router-dom'

const Brewery = ({brewery, setID, setUrl}) => {
    
    return (
        <div>
            <NavLink 
                to={`/${brewery.id}`} 
                onClick={() => {
                    setID(brewery.id)
                    setUrl(`https://api.openbrewerydb.org/breweries/${brewery.id}`)
                }
            }
            >
            {brewery.name}
            </NavLink>
        </div>
    )
}

export default Brewery
