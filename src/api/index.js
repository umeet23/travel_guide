import axios from 'axios';

const getWeatherData = async (lat, lng) => {
  const URL = 'https://community-open-weather-map.p.rapidapi.com/find';

  try {
    const { data } = await axios.get(URL, {
      params: {
        lon: lng,
        lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

const getPlacesData = async (type, sw, ne) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export { getPlacesData, getWeatherData };
