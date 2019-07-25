import React, { useState } from 'react'
import { states, types } from '../data/states'

const SearchForm = (props) => {
    const [input, setInput] = useState({city: '', state: '', type: ''});
    
    const handleChanges = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const newSearch = (e) => {
        e.preventDefault();
        let params = {}
        let url=`https://api.openbrewerydb.org/breweries?`
        for(let key in input)
            if(input[key])
                params[key] = input[key]
        for(let key in params)
            url=`${url}by_${key}=${params[key]}&`
        props.setUrl(url)
    }
    return (
        <form onSubmit={(e)=>newSearch(e)}>
            <input 
                type='text'
                name='city'
                value = {input.city}
                onChange = {handleChanges}
            />
            <select
                autoComplete="true"
                name='state'
                value = {input.state}
                onChange = {handleChanges}
            >
                {states.map(state => <option key ={state.name} value={state.name.toLowerCase()}>{state.abbreviation}</option>)}
            </select>
            <select
                autoComplete ="true"
                name='type'
                value={input.type}
                onChange = {handleChanges}
            >
                {types.map(type => <option key={type} value={type.toLowerCase()}>{type}</option>)}
            </select>
            
            <input 
                type="submit"
                onSubmit={(e)=>newSearch(e)}
            />
        </form>
    )
}

export default SearchForm
