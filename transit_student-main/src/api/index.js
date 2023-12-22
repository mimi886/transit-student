import axios from "axios";

const data=[
    {
      "id": 1,
      "regnum": "GT 238 23",
      "passengers": 0,
      "capacity": 4,
      "status": true,
      "completed": true,
      "intransit": true,
      "startlocation": {
        "lat": 5.5354304,
        "lng": -0.4419529
      },
      "currentlocation": {
        "lat": 5.5354304,
        "lng": -0.4419529
      },
      "destlocation": {
        "lat": 5.6514587,
        "lng": -0.1960533
      },
      "type": "BUS",
      "model": "Sprintex",
      "make": "Benz",
      "color": "White",
      "driver": "Ebenezer Braide",
      "rating":4,
      "destination":"Balme library",
      "photo_url":"images/profile-img.jpg",
    },
    {
      "id": 2,
      "regnum": "GT 234 23",
      "passengers": 2,
      "capacity": 4,
      "status": true,
      "completed": true,
      "intransit": true,
      "startlocation": {
        "lat": 5.576892,
        "lng": -0.11189592
      },
      "currentlocation": {
        "lat": 5.576892,
        "lng": -0.11189592
      },
      "destlocation": {
        "lat": 5.6514587,
        "lng": -0.1960533
      },
      "type": "BUS",
      "model": "Sprintex",
      "make": "Benz",
      "color": "White",
      "driver": "Ebenezer Braide",
      "rating":4,
      "destination":"Night market",
      "photo_url":"images/profile-img2.jpg",
    },
    {
      "id": 3,
      "regnum": "GT 568 23",
      "passengers": 1,
      "capacity": 4,
      "status": true,
      "completed": true,
      "intransit": true,
      "startlocation": {
        "lat": 5.7020926,
        "lng": -0.16987757
      },
      "currentlocation": {
        "lat": 5.7020926,
        "lng": -0.16987757
      },
      "destlocation": {
        "lat": 5.6514587,
        "lng": -0.1960533
      },
      "type": "BUS",
      "model": "Sprintex",
      "make": "Benz",
      "color": "White",
      "driver": "Ebenezer Braide",
      "rating":2,
      "destination":"Central cafeteria",
      "photo_url":"images/profile-img6.jpg",
    }
  ];

export const getTransitData = async()=>{
    try {
        // const response = await axios.get('http://localhost:8080/api/v1/transit',
        // {
        //     headers:{
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJicmFpZGVlYmVuQGdtYWlsLmNvbSIsImlhdCI6MTY5OTk3OTYwOH0.oD8JZEeigLwqJLYTZ1bkgKczRPYxHR4vGS3hG91zC5w"
        //     }
        // })

        // console.log(response);
        return data;
    } catch (error) { 
        console.log(error);
    }
}