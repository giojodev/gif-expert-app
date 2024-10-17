
import {GifItem} from '../components/GifItem'

import { Grid } from "@mantine/core"
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images,isLoading } = useFetchGifs(category);


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
