import "./App.css";
import './index.css'
import GetWeather from "./services/getWeather";
import { useState,useEffect } from "react";
import WeatherLeft from "./modules/weatherLeftBox";
import WeatherRight from "./modules/weatherRightBox";
import ChangeButton from "./modules/changeButton";
import Spinner from "./modules/spinner";





function App() {




  const[isloading,setLoading]=useState(true)
// ============================useStates for information hand=======================================0
  
  const[nameValue,setNameValue]=useState('')
  const[nameTemp,setTempValue]=useState('')
  const[nameCountry,setCountryValue]=useState('')
 

  const[valueState,setStateValue]=useState('')
  const[valueStateIcon,setStateValueIcon]=useState('')
  const[valueHumidity,setHumidityValue]=useState('')
  const[valuewind,setWindValue]=useState('')
  const[feelsValue,setFeelsValue]=useState('')
  const[degresValue,setDegreValue]=useState('')
  const[pressureValue,setPressureValue]=useState('')

//=============== Get information of location and brings to ${lat} and ${lon} in getWeather Services================

  useEffect(() =>{
  
  navigator.geolocation.watchPosition((position) => {
    GetWeather(position.coords.latitude, position.coords.longitude).then((res) =>{
      setNameValue(res.data.name)
      setTempValue(res.data.main.temp)
      setCountryValue(res.data.sys.country)
      
      setStateValue(res.data.weather[0].description)
      setStateValueIcon(res.data.weather[0].icon)
      setHumidityValue(res.data.main.humidity)
      setWindValue(res.data.wind.speed)
      setFeelsValue(res.data.main.feels_like)
      setDegreValue(res.data.wind.deg)
      setPressureValue(res.data.main.pressure)
      setLoading(false)
      


      
      }).catch((error) =>{
      alert('Debes aceptar terminos')
    })
  })
  }, [])

  

//========================Handler temperatura==========================================================================
  
if(isloading){
  return(
  <Spinner className='spinner-container'/>)
}
else{

  return (
          <div className="App">
            <h1 className="header-tittle">YouWather</h1>
             
           <div className="content-box">
                <div className="left-box">
                  <div className="content-box-left">
                  <WeatherLeft  temp={nameTemp} name={nameValue} country={nameCountry}/>
                  </div>
                  
                  <div className="content-temp-box">
                  <ChangeButton weather={nameTemp} icon={valueStateIcon}/>
                  </div>

                </div>
                
                <div className="right-box">
                  <WeatherRight feels={feelsValue}  state={valueState} humidity={valueHumidity}
                   wind={valuewind} deg={degresValue} pressure={pressureValue} />               
                               
                 </div>    
    
           </div>
 
    
    </div>
  );
}
}
export default App;
