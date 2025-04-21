import React, { useContext } from 'react'
import SnapContext from '../context/SnapContext'

const Images = () => {
    const { imageData } = useContext(SnapContext);
  
    return (
      <div className="container my-5">
        <div className="flex">
          {imageData.map((image) => (
            <div key={image.id}>
              <div className="item">
                <img src={image.largeImageURL} alt="altbalaji" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Images;