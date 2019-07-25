import React, { useState, useEffect } from 'react'

const Search = ({setUrl}) => {
    const [input, setInput] = useState('');
    useEffect(() => {
        setUrl(`https://api.openbrewerydb.org/breweries/autocomplete?query=${input}`)
    }, [input, setUrl]);
    
    return (
        <input 
            text='text'
            name='search'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
    )
}

export default Search
