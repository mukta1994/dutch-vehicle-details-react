import React, { useState } from "../../node_modules/react";
import Details from '../Components/Details'
import Imagerow from '../Components/Imagerow'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { getVehicleData, getRelatedImages, getVehiclenumberPlates } from '../Api/api';


const Vehicle = () => {
    const [vehicle_info, setVehicle_info] = useState("")
    const [images, setimages] = useState([])
    const [showcomponent, setshowcomponent] = useState(false)

    const [options, setOptions] = useState([]);
    async function searchresult(e) {
        if (e.target.value) {
            const list = await getVehiclenumberPlates(e.target.value)
            if(list===0){
                alert("there is some some issue with api call or something went wrong")
            }
            else if (list.totalItemCount !== 0)
                setOptions(list._embedded.kenteken)
        }

    }

    const getVehicleDetails = async (vehicle_data) => {
        if (vehicle_data) {
            const info = await getVehicleData(vehicle_data.kentekenplaat)
            if(info===0)
            {
                alert("there is some some issue with api call or something went wrong")
            }
            else
                setVehicle_info(info)
            const imagesres=await getRelatedImages(vehicle_data.handelsbenaming)
            if(imagesres===0)
            {
                alert("there is some some issue with api call or something went wrong")
            }
            else
                setimages(imagesres)

            if (info) {
                setshowcomponent(true)
            }
        }
        else {
            setshowcomponent(false)
        }
    }



    return (
        <div>
            <div className="top-section-home" >
                <div className="search-plate" style={{ margin: 'auto' }} >
                    <Autocomplete
                        id="combo-box-demo"
                        includeInputInList
                        options={options}
                        getOptionLabel={(option) => option.kentekenplaat}
                        renderInput={(params) => <TextField {...params} variant="outlined" className="search-term" placeholder="Vehicle Number" onChange={searchresult} />}
                        onChange={(event, value) => { getVehicleDetails(value) }}
                    />
                </div>
            </div>
            {showcomponent ?
                <div><div><Details className="character-item" data={vehicle_info} /> </div>
                    <div> <Imagerow className="character-item" data={images.results} /></div></div> : null
            }

        </div>
    );
}

export default Vehicle;


