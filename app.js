const argv = require('./config/yargs').argv;
const place = require('./place/place');
const weather = require('./weather/weather');

//place.getLugarLatLng(argv.direccion)
  //.then(console.log);

/* weather.getWeather(31.780001, 35.220001)
    .then(data => console.log(data))
    .catch(console.log());*/

const getInfo = async direccion => {

  try {
    const lugar = await place.getLugarLatLng(direccion);
    const clima = await weather.getWeather(lugar.lat, lugar.lng);
  
    return `El clima de ${lugar.dir} es de ${clima} grados Kelvin` 
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`
  }
}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log); 