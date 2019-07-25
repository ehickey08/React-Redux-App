import React from 'react'
import BreweryInfo from '../components/BreweryInfo'
import {NavLinker} from '../components/Brewery'
import styled from 'styled-components'
const BreweryPage = ({data, setUrl, storedURL}) => {
    console.log(storedURL)
    return(
        <>
            <NavLinkerd to='/' onClick={() => setUrl(storedURL)}>Return Home</NavLinkerd>
            <BreweryInfo data={data} />
        </>
    )
}

export default BreweryPage

const NavLinkerd = styled(NavLinker)`
    color: #9b264c;
    text-decoration: underline;
`