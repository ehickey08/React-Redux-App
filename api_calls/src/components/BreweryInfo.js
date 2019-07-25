import React from 'react'

const BreweryInfo = ({data}) => {
    const {name, city, state, street, website_url, brewery_type} = data
    return (
        <div>
            {name}
            {street} {city}, {state}
            {brewery_type}
            {website_url}
        </div>
    )
}


export default (BreweryInfo)
