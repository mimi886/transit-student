import React from 'react'
import {APIProvider, Map,AdvancedMarker, Pin, infoWindow, Marker } from '@vis.gl/react-google-maps'

const MapUI = ({setCoordinates, setBounds, coords, vehicles}) => {

  const position=  {"lat": 5.5354304,
  "lng": -0.4419529}
//5.650642069600332, -0.19616539474957959
  return (
    <APIProvider apiKey='AIzaSyAhvMrD6A-uJ_z-FJHnNYNDKExJ7HnePCQ'>
    <div
      style={{
        height: '85vh', width: '100%',
      }}
    >
       <Map 
          zoom={9}
          center={coords}
          mapId='6885d9832bfe8021'> 
          <AdvancedMarker position={coords}>
          </AdvancedMarker>
          {vehicles?vehicles.map((vehicle,i)=>(
            <>

             <Marker position={vehicle.geocode}/>
             <Marker position={position} />

             </>
            
           ))
            
            :(<></>)
          }
        </Map>

    </div>
    </APIProvider>
  )
}

export default MapUI