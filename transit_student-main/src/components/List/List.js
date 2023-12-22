import React,{ useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import VehicleDetails from '../VehiceDetails/VehicleDetails'


const List = ({vehicles,dest,setDest,setIsBooked,isBooked}) => {
 
    const [elRefs,setElRefs] =useState([])

    useEffect(() => {
      setElRefs((refs) => Array(vehicles.length).fill().map((_, i) => refs[i] || createRef()));
      console.log(vehicles)
    }, [vehicles]);

  return (
    <>
    {isBooked? (<> 
      <div sx={{
        adding: '25px',display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <Grid container spacing={3} 
        sx={{
            height: '75vh', overflow: 'auto',
        }}>
           
           {vehicles?.map((vehicle,i)=>(
                    <Grid ref={elRefs[i]} key={i} item xs={12}>
                        <VehicleDetails vehicle={vehicle}
                            dest={vehicle.destination}
                            setDest={setDest}
                            setIsBooked={setIsBooked}/>
                    </Grid>
                ))
              }
         
        </Grid>
        </div>
    </>):
    (<>
      <div sx={{
        adding: '25px',display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
        <Typography variant="h6" sx={{margin:2,}}>
            Available Vehicles
        </Typography>
        <FormControl sx={{margin: 2, minWidth: 300, marginBottom: '30px'}}>
            <InputLabel id="type">Destination</InputLabel>
            <Select id="type"  value={dest} onChange={(e) => setDest(e.target.value)} >
              <MenuItem value="Central cafeteria">Central cafeteria</MenuItem>
              <MenuItem value="Night market">Night market </MenuItem>
              <MenuItem value="Balme library">Balme library</MenuItem>
            </Select>
          </FormControl>
          {/* <FormControl  sx={{margin: 2, minWidth: 120, marginBottom: '30px'}}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value="3" >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl> */}
        <Grid container spacing={3} 
        sx={{
            height: '75vh', overflow: 'auto',
        }}>
                {vehicles?.map((vehicle,i)=>(
                    <Grid ref={elRefs[i]} key={i} item xs={12}>
                        <VehicleDetails vehicle={vehicle}
                        dest={vehicle.destination}
                        setDest={setDest}
                        setIsBooked={setIsBooked}
                        isBooked={isBooked} />
                    </Grid>
                ))
                }
        </Grid>
    </div>
      </>)}
      </>
  )
}

export default List