import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchData } from './actions/actions'
import { Route, NavLink } from 'react-router-dom'
import HomePage from './containers/HomePage'
import BreweryPage from './containers/BreweryPage'
import './App.css';

function App({isLoading, error, data, fetchData}) {
    const [url, setUrl] = useState('https://api.openbrewerydb.org/breweries');
    const [id, setID] = useState(3000);
    
    useEffect(() => {
        fetchData(url)
    }, [url, fetchData])

    return (
        <div className="App">
            {isLoading && <h3>Fetching your breweries...</h3>}
            {error && <h4>Something was brewed wrong...try again</h4>}
            <Route exact path='/' render={props => <HomePage setUrl={setUrl} data={data} setID={setID} />} />
            <Route path={`/${id}`} render={props => <BreweryPage data={data} setUrl={setUrl}/>} />
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
