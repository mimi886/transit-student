import  React,{useState,useEffect} from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { getTransitData } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import MapUI from './components/Map/MapUI';
import { Place } from '@mui/icons-material';
import MapUID from './components/Map/MapUID';



function App() {
 const [dest, setDest] =useState('Balme library');
 const [reg, setReg] =useState('GT 234 23');
 const [isBooked,setIsBooked] =useState(false);

  const [coords, setCoords] = useState({lat:5.65064,lng:-0.1961});
  const [bounds, setBounds] = useState(null);

  const initialVehicles=[{'name':'Ebenezer','location':'Kasoa','geocode':{'lat':5.535232243533012,'lng': -0.4231446366849325}},{'name':'test','location':'Teshie','geocode':{'lat':5.5761020996577475,'lng': -0.11172370599286831},'photo_url':'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-car-icon-png-image_3989896.jpg'}]
  const [filteredVehicles,setFilteredVehicles]=useState([]);
  const [vehicles,setVehicles]=useState([]);



  const onLoad = () => {console.log("onload")};

  const onPlaceChanged = () => {
    console.log("Place Change")
  };

  // const setBooking =()=>{
  //   setIsBooked(true);
  // }

  useEffect(()=>{
    const filtered =vehicles.filter((vehicle)=> vehicle.destination === dest);
    setFilteredVehicles(filtered);

  },[dest])

  useEffect(()=>{
    const filtered =vehicles.filter((vehicle)=> vehicle.regnum === reg);
    setFilteredVehicles(filtered);
  },[isBooked])

 

  useEffect(()=>{
    getTransitData().then((data)=>{
      console.log(data)
      setVehicles(data)
    });
  },[])

  return (
   <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      {isBooked ? (<>
        <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
          <List
            vehicles={filteredVehicles.length? filteredVehicles:vehicles}   
              dest={dest}
              setDest={setDest}
              setIsBooked={setIsBooked}
              isBooked={isBooked}
           
          /> 
          </Grid>
            <Grid item xs={12} md={8}>
                  <MapUID 
                      dest={dest}
                      setDest={setDest}
                      
                  />
            </Grid>
         </Grid>
       </>):(<>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            vehicles={filteredVehicles.length? filteredVehicles:vehicles}
             // isLoading={isLoading}
              dest={dest}
              setDest={setDest}
              setIsBooked={setIsBooked}
              isBooked={isBooked}
           
          /> 
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <MapUI
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              vehicles={vehicles}
          /> 
        </Grid>
      </Grid>

       </> )}
   </>
  );
}

export default App;
