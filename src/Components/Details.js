import React, { } from "react";
import Card from '@material-ui/core/Card';
import Moment from 'moment';


const Details = (props) => {
    // Moment.locale('en');
    return (
        <Card className="details-card">
            <div>
                <span>Trade name</span>
                <div className="vehicle-data">{props.data.handelsbenaming}</div>
            </div>
            <div>
                <span>Date of first admission</span>
                <div className="vehicle-data">{Moment(props.data.datum_eerste_toelating).format('DD-MM-yyyy')}</div>

            </div>

            <div>
                <span>Fuel-description</span>
                {props.data.brandstof ? (
        <div className="vehicle-data">{
            props.data && props.data.brandstof && props.data.brandstof.map(brands => {
                return <div key={brands.brandstof_volgnummer}>{brands.brandstof_omschrijving}</div>
            })
        }
        </div>
      ) : (
        <div style={{fontSize:"12px"}}>Data not available</div>
      )}

               
            </div>
        </Card>
    );
}

export default Details;