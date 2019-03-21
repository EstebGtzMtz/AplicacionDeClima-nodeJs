const axios = require('axios');

const getWeather = async (lat,lng) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appId=2c78b306a06a11817c07d129071c8f33`)
    return respuesta.data.main.temp;
}

module.exports={
    getWeather
}