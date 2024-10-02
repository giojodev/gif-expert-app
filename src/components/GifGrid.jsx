import { useState, useEffect } from 'react';
import {GifItem} from '../components/GifItem'
import {getGifs} from '../helpers/getGifs'
import { Grid } from "@mantine/core"

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
      <Grid>
        {images.map((image) => (
          <Grid.Col span={4}>

            <GifItem
              key = {image.id} 
              {...image}
            />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};
