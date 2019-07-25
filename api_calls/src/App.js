import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { fetchData } from './actions/actions'
import HomePage from './containers/HomePage'
import BreweryPage from './containers/BreweryPage'
import './App.css';
import styled from 'styled-components'

function App({isLoading, error, data, fetchData}) {
    const [url, setUrl] = useState('https://api.openbrewerydb.org/breweries');
    const [storedURL, setStoredURL] = useState('');
    const [id, setID] = useState(3000);
    
    useEffect(() => {
        fetchData(url)
    }, [url, fetchData])

    return (
        <div className="App">
            {isLoading && <Loading>Fetching your breweries...</Loading>}
            {error && <Error>Something was brewed wrong...try again</Error>}
            <Route exact path='/' render={props => <HomePage setUrl={setUrl} data={data} setID={setID} setStoredURL={setStoredURL}/>} />
            <Route path={`/${id}`} render={props => <BreweryPage data={data} setUrl={setUrl} storedURL={storedURL}/>} />
        </div>
    );
}

const mapStateToProps = ({isLoading, error, data}) => ({
    isLoading,
    error,
    data
})

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

const Loading = styled.h3`
    font-size: 20px;
    color: blue;
`

const Error = styled(Loading)`
    color: red
`