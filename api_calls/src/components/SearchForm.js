import React, { useState } from 'react'
import { states, types } from '../data/states'
import { Form, Input, FormTitle } from './Search'
import styled from 'styled-components'

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
        props.setStoredURL(url)
        setInput({city: '', state: '', type: ''})
    }
    return (
        <Form onSubmit={(e)=>newSearch(e)}>
            <div>
                <FormTitle>Or search by city, state, and/or type of brewery:</FormTitle>
            </div>
            <div>
            <Label>City: </Label>
            <Input 
                type='text'
                name='city'
                value = {input.city}
                onChange = {handleChanges}
            />
            </div>
            <div>
            <Label>State:</Label>
            <Select
                as='select'
                autoComplete="true"
                name='state'
                value = {input.state}
                onChange = {handleChanges}
            >
                {states.map(state => <option key ={state.name} value={state.name.toLowerCase()}>{state.abbreviation}</option>)}
            </Select>
            </div>
            <div>
            <Label>Type:</Label>
            <Select
                as="select"
                autoComplete ="true"
                name='type'
                value={input.type}
                onChange = {handleChanges}
            >
                {types.map(type => <option key={type} value={type.toLowerCase()}>{type}</option>)}
            </Select>
            </div>
            <InputButton 
                type="submit"
                onSubmit={(e)=>newSearch(e)}
            />
        </Form>
    )
}

export default SearchForm

const Select = styled(Input)`
    text-align-last: center;
`

const Label = styled.label`
    float: left;
    width: 200px;
    margin-top: 15px;
`

const InputButton = styled(Input)`
    background: papayawhip;
    color: palevioletred;

    &:hover{
        background: palevioletred;
        color: papayawhip;
    }
`