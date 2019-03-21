const axios = require('axios');

const getLugarLatLng = async add => {
    
    const encondeURL = encodeURI(add);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeURL}`,
        headers: {'X-RapidAPI-Key': '4eb63584ffmsha5dbda1b8520a42p17cd44jsn9237cd2f28b6'}
    });
    
    const respuesta = await instance.get();

    if(respuesta.data.Results.length === 0){
        throw new Error (`No hay resultados para ${add}`);
    }

    const data = respuesta.data.Results[0];
    const dir  = data.name;
    const lat  = data.lat;
    const lng  = data.lon;

    return {
            dir,
            lat,
            lng
    }
}

module.exports = {
    getLugarLatLng
}
