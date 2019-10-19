import axios from 'axios';
const APIKEY = `FYD6WnexnDMX3fTG8s94IU98t`;
const BaseUrl = `https://data.cityofnewyork.us/resource/hjae-yuav.json?%24limit=5000&%24%24app_token=${APIKEY}`;

export const fetchBathrooms = async () => {
  const response = await axios.get(`${BaseUrl}`);
  const data = response.data;
  console.log(data)
  return data;
};

export const fethRandomBathrooms = async () => {
  const response = await axios.get(``);
  const data = response.data;
  return data;
};