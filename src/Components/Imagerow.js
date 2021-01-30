import React, { } from "react";

const Details =(props)=> {
    var noimages;
if (props.data.length===0) {
  noimages = <div> No images found</div> ;
} 

        return (
          <div className="row">
              <div className="row-images">
                  {
                      props.data.map(image=>(
                          <img alt="not available" className="row-image" key={image.id} src={image.urls.small}></img>
                      ))
                  }
              </div>
              {noimages}
          </div>
        );
}

export default Details;