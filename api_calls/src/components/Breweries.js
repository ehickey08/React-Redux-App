import React from 'react'
import Brewery from './Brewery'
const Breweries = ({breweries, setID, setUrl}) => {
    return (
        <div>
            {breweries.length>0 && breweries.map(brewery => 
                <Brewery 
                    key={brewery.id} 
                    brewery={brewery} 
                    setID={setID} 
                    setUrl={setUrl}
                />
            )}
        </div>
    )
}

export default Breweries
