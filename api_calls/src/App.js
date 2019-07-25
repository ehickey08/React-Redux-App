import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchData } from './actions/actions'

import SearchForm from './components/SearchForm'
import './App.css';

function App({isLoading, error, data, fetchData}) {
    const [url, setUrl] = useState('https://api.openbrewerydb.org/breweries');
    console.log(data)
    useEffect(() => {
        fetchData(url)
    }, [url])

    return (
        <div className="App">
            <h1>Search for a brewery near you!</h1>
            <SearchForm setUrl={setUrl}/>
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
