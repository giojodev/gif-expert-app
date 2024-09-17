// import { Grid,GridCol } from "@mantine/core"

export const GifGrid = ({category})=>{
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