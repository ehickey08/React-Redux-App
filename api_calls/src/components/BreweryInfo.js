import React from 'react'
import styled from 'styled-components'
import { BreweriesDiv } from './Breweries'

const BreweryInfo = ({data}) => {
    const {name, city, state, street, website_url, brewery_type} = data
    return (
        <BreweryDiv>
            <h3>{name}</h3>
            <h4>{street} {city}, {state}</h4>
            <h4><span>Brewery Type: </span>{brewery_type}</h4>
            <a href={`${website_url}`}>{website_url}</a>
        </BreweryDiv>
    )
}


export default (BreweryInfo)

const BreweryDiv = styled(BreweriesDiv)`
    margin: 20px auto;

    h3{
        color: white;
    }

    h4{
        color: white;

        span{
            font-weight: 400;
        }
    }

    a{
        color: white;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`