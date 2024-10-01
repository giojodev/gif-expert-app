// import { Grid,GridCol } from "@mantine/core"
import {getGifs} from '../helpers/getGifs'
import { useEffect } from 'react';

export const GifGrid = ({category})=>{

  useEffect(() => {

    getGifs(category);
  }, []);

  return (
  <>
    {/* <Grid> */}
      {category.map((e) => (
        // <GridCol span={4}>
          <div key={e}>
            <h3>{e}</h3>
            <p>{e}</p>
          </div>
        // </GridCol>
      ))}
    {/* </Grid> */}
  </>
);
}