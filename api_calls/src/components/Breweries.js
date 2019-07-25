import React from 'react'
import Brewery from './Brewery'
import styled from 'styled-components'

const Breweries = ({breweries, setID, setUrl}) => {
    return (
        <>
        {breweries.length>0 && <BreweriesDiv>
            <p>Click a name for more information!</p>
             {breweries.map(brewery => 
                <Brewery 
                    key={brewery.id} 
                    brewery={brewery} 
                    setID={setID} 
                    setUrl={setUrl}
                />
            )}
        </BreweriesDiv>}
        </>
    )
}

export default Breweries

const BreweriesDiv = styled.div`
    background: #1e784f;
    border-radius: 10px;
    padding: 20px 0;
    width: 600px;
    margin: 0 auto;

    p{
        margin: 10px;
        color: #f5c7d6;
        font-size: 24px;
        font-weight: 600;
    }
    
`