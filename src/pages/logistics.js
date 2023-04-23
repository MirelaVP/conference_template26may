import React from 'react'
import Map from './map'
import '../App.css'

function Logistics() {

    const location = {
        address: '162a Avenue de la Faïencerie, L-1511, Luxembourg',
        lat: 49.62308,
        lng: 6.11223,
      } // our location object from earlier
      

    return (
        <div>
            <h2>Logistics</h2>
            <h3>Public Transportations</h3>
            <p>
                Luxembourgish public transportations are free for everyone within its border.
                If you need an up-to-date information on transportations in Luxembourg, visit <a href="https://www.mobiliteit.lu/en/">Mobilitéit webpage</a>.
            </p>
            <h3>By your own vehicle</h3>
            <p>
                Well... good luck
            </p>
            <Map location={location} zoomLevel={17} /> {/* include it here */}
        </div>
    )
}

export default Logistics;