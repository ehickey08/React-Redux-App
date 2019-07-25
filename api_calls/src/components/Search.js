import React, { useState } from 'react'
import styled from 'styled-components'

const Search = ({setUrl, setStoredURL}) => {
    const [input, setInput] = useState('');

    const changeURL = (e) =>{
        e.preventDefault();
        setInput(e.target.value)
        let url = `https://api.openbrewerydb.org/breweries/autocomplete?query=${e.target.value}`
        setUrl(url)
        setStoredURL(url)
    }
    
    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <div>
                <FormTitle>Search by name...</FormTitle>
            </div>
            <Input 
                autoFocus
                text='text'
                name='search'
                value={input}
                onChange={(e) => changeURL(e)}
            />
        </Form>
    )
}

export default Search

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 600px;
    margin: 0 auto;
`

export const Input = styled.input`
    background-color: #f1f1f1;
    border: none;
    color: black;
    font-size: 1em;
    padding: 10px 0px; 
    text-transform: uppercase;
    font-weight: 500;
    width: 300px;
    border-radius: 10px;
    margin: 10px auto;
    text-align: center;
    outline: none;
    &:focus{
        background-color: papayawhip;
        color: palevioletred;
    }
    
`

export const FormTitle = styled.h3`
    text-decoration:underline;
`