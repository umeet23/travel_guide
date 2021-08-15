import axios from 'axios';

const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const getHotelsData = () => {};

const getPlacesData = async (sw, ne) => {
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
        'x-rapidapi-key': '367e485e99msh814695c433a143bp1ca29cjsn292576db0362',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export { getPlacesData, getHotelsData };
