import React, { useEffect, useState } from "react";
import "./Weather1.css";
import  Axios from "axios";
function Weather() {
  const[Weatherdata , setWeatherdata] = useState({
    main :{},
    weather :[{}]
   
  });
  useEffect(()=>{
    async function getdata(){
      const Api ="https://api.openweathermap.org/data/2.5/weather?&appid=6191a48c90b20d551f27a3628958b2be&q=Vellinezhi,India&units=metric";
      try{
        let response = await Axios.get(Api)
        setWeatherdata(response.data)
        console.log(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getdata()

  },[])
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="card">
          <h1>{Weatherdata.name}</h1>
          <h1>{`${Math.round(Weatherdata.main.temp)}`}&deg;C</h1>
         <h1>{Weatherdata.weather[0].main}</h1>
          <h6>{Weatherdata.weather[0].description}</h6>
        </div>
      </div>
    </div>
  );
}
export default Weather;
