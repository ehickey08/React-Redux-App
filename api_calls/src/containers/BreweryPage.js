import React from 'react'
import BreweryInfo from '../components/BreweryInfo'
import { NavLink } from 'react-router-dom'

const BreweryPage = ({data, setUrl}) => {
    return(
        <>
            <NavLink to='/' onClick={() => setUrl('https://api.openbrewerydb.org/breweries')}>Return Home</NavLink>
            <BreweryInfo data={data} />
        </>
    )
}

export default BreweryPage
