import React from 'react'
import { Box,Typography,Button,Card,CardMedia, CardContent, CardActions, Chip, Rating } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const VehicleDetails = ({vehicle,dest,setDest,setIsBooked,isBooked}) => {


  return (
    <Card sx={{ display:'flex'}} elevation={6}>
   
       
        <CardMedia 
            style={{height:150,borderRadius:150, width:150,margin:20}}
            image={vehicle.photo_url? vehicle.photo_url:'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            title={vehicle.name}
        /> 
      
        <CardContent>
            <Typography gutterBottom variant='h5'>{vehicle.make} {vehicle.model} </Typography>
            <Box display="flex" justifyContent="space-between" my={2}>
                <Typography>{vehicle.regnum}</Typography>
                <Typography>{vehicle.destination}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Seats</Typography>
          <Typography gutterBottom variant="subtitle1">
            {vehicle.passengers} / {vehicle.capacity}
          </Typography>
          
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={vehicle.rating}
        />
        </Box>
        {isBooked? (<></>):(
            <><Box display="flex" justifyContent="end" my={2}>
            <Button variant="contained" onClick={()=>  {setDest(dest);
              setIsBooked(true)}}  endIcon={<SendIcon />}>
              Book Ride
            </Button>
          </Box></>
          )}
        </CardContent>
    </Card>
  )
}

export default VehicleDetails