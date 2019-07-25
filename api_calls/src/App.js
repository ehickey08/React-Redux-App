import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchData } from './actions/actions'
import './App.css';

function App({isLoading, error, data, fetchData}) {
    console.log(isLoading, error, data)
    const [url, setUrl] = useState('https://jobs.github.com/positions.json?page=1&search=code');
    useEffect(() => {
        fetchData(url)
    }, [url])
    return (
        <div className="App">
        
        
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
