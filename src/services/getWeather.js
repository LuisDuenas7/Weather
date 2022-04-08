import axios from 'axios'



const GetWeather = async (lat,lon) => {
    
    
    

const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aa77239c156d49e90b568a1df080b1b7&units=metric`

const request= await axios.get(URL)



return request
}



export default GetWeather;