const API_KEY='fa182b67efd5fd331909b395f37627f7'
const makeIconURL = (iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedweatherData=async (city, units='metric')=>{
    try{
    //const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const response=await fetch(URL);

    if(!response.ok)
        {
            throw new Error('Failed to fetch weather data');
        }
     const data = await fetch(URL)
    .then((res)=> res.json())
    .then((data)=>data);

    const {
    weather, 
    main:{temp, feels_like, temp_min, temp_max, pressure, humidity},
    wind:{speed},
    sys:{country},
    name,
     } = data;

     const {description, icon}= weather[0];
    

     return {
        description,
        iconURL: makeIconURL(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
      };
    }
    catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null; // or throw error if you prefer
      }
    };
    


export {getFormattedweatherData};



