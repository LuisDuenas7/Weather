

const WeatherRight= ({state,humidity,wind,feels,deg,pressure})=>{
  return(
  
  
  <div className="content-box-right">
      
       <h1 className="details">Weather Details</h1>
      
      <h2 className="details2">{state} </h2>
      <h2 className="details2">Feels Like : {feels} C°</h2>
      <h2 className="details2">Pressure: {pressure} hPa</h2>
      <h2 className="details2">Humidity : {humidity} %</h2>
      <h2 className="details2">Wind Speed :{wind} m/s</h2>
      <h2 className="details2">Wind Direction :{deg} °</h2>

  </div>


  )
}


export default WeatherRight