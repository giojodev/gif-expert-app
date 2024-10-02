import { useState, useEffect } from 'react';
import {GifItem} from '../components/GifItem'
import {getGifs} from '../helpers/getGifs'


export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);

    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []); // Se añade category como dependencia para que se vuelva a ejecutar si cambia

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((image) => (
          <GifItem
            key = {image.id} 
            {...image}
          />
        ))}
      </div>
    </>
  );
};
