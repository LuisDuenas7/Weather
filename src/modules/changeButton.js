import { useState } from 'react';

const ChangeButton = ({weather,icon}) => {

  const [celsious, setCelsious] = useState(0)
  
  return (
    <div className='temp-position'>
        <img className="img-icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='Img'/>
      <h2 className='temp_value'> {celsious ?  weather.toFixed(1) :  weather.toFixed(0) * 9/5 + 32} {celsious ? '°C' : '°F'}</h2>  
      <button  onClick={() => setCelsious(!celsious)}>Change to {celsious? '°F' : '°C'}</button>
    </div>
  );
}

export default ChangeButton
