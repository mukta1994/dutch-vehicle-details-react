
import { BASE_URL_OVERHEID, BASE_URL_UNSPLASH, OVIO_APIKEY, UNSPLASH_APIKEY, } from '../Constants/constants';


export const getVehicleData = async (vin) => {
  try {
    const response = await fetch(BASE_URL_OVERHEID + `/${vin}?ovio-api-key=${OVIO_APIKEY}`)
    const data = await response.json();
    if(response.status!==200)
      return 0
    return data;
  } catch (error) {
    console.log(error, "error")
    return []
  }
}


export const getVehiclenumberPlates = async (query) => {
  try {
    const response = await fetch(BASE_URL_OVERHEID + `?query=${query}&ovio-api-key=${OVIO_APIKEY}`)
    const data = await response.json();
    if(response.status!==200)
      return 0
    return data;
  } catch (error) {
    console.log(error, "error")
    return []
  }
}

export const getRelatedImages = async (tradeName) => {
  try {
    const response = await fetch(BASE_URL_UNSPLASH + `photos?page=1&query=${tradeName}&client_id=${UNSPLASH_APIKEY}`)
    const data = await response.json();
    if(response.status!==200)
      return 0
    return data;
  } catch (error) {
    console.log(error, "error")
    return []
  }
}