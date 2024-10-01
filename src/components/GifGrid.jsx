// import { Grid,GridCol } from "@mantine/core"
import {getGifs} from '../helpers/getGifs'
import { useState, useEffect } from 'react';


export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, [category]); // Se añade category como dependencia para que se vuelva a ejecutar si cambia

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, title }) => (
          <div key={id}>
            <h3>{title}</h3>
          </div>
        ))}
      </ol>
    </>
  );
};
