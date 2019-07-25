import React from 'react'
import Search from '../components/Search'
import SearchForm from '../components/SearchForm'
import Breweries from '../components/Breweries'

const HomePage = ({setUrl, data, setID, setStoredURL}) => {
    return(
        <>
            <h1>Search for a brewery near you!</h1>
            <Search setUrl={setUrl} setStoredURL={setStoredURL} />
            <SearchForm setUrl={setUrl} setStoredURL={setStoredURL}/>
            <Breweries breweries={data} setID={setID} setUrl={setUrl}  />
        </>
        )
}

export default HomePage
