import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
const Brewery = ({brewery, setID, setUrl}) => {
    
    return (
        <div style={{padding: '5px'}}>
            <NavLinker 
                to={`/${brewery.id}`} 
                onClick={() => {
                    setID(brewery.id)
                    setUrl(`https://api.openbrewerydb.org/breweries/${brewery.id}`)
                }
            }
            >
            {brewery.name}
            </NavLinker>
        </div>
    )
}

export default Brewery

export const NavLinker = styled(NavLink)`
    color: white;
    font-size: 20px;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`