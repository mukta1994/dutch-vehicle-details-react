
//search car images
// export const getSingleOrmultipleData = async (pathname,id) => {
//     const response = await fetch("https://api.unsplash.com/search/photos?page=1&query=bmw&client_id=YpWTFo8IM02oWNWPI9AVrHkPcxBT9IY-dgRkjRw3ERk")
//     const data = await response.json();
//     return data;
//   }

//   //search cars by vin
//   export const getSingleOrmultipleData = async (pathname,id) => {
//     const response = await fetch("https://api.overheid.io/voertuiggegevens?query=TX&fields[]=kentekenplaat&ovio-api-key=b62294b7eb3afd0e2c8518f8c8322063bfa40938ba5c8e87583ca44532a4ee3f")
//     const data = await response.json();
//     return data;
//   }

  //search car info

  export const getVehicleData = async (vin) => {
    console.log(vin)
    const response = await fetch(`https://api.overheid.io/voertuiggegevens/${vin}?ovio-api-key=b62294b7eb3afd0e2c8518f8c8322063bfa40938ba5c8e87583ca44532a4ee3f`)
    const data = await response.json();

    return data;
  }


  export const getVehiclenumberPlates = async (query) => {
    const response = await fetch(`https://api.overheid.io/voertuiggegevens?query=${query}&fields[]=kentekenplaat&ovio-api-key=b62294b7eb3afd0e2c8518f8c8322063bfa40938ba5c8e87583ca44532a4ee3f`)
    const data = await response.json();

    return data;
  }

  export const getRelatedImages = async (tradeName) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${tradeName}&client_id=YpWTFo8IM02oWNWPI9AVrHkPcxBT9IY-dgRkjRw3ERk`)
    const data = await response.json();

    return data;
  }