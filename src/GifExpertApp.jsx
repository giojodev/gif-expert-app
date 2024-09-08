import { useState } from "react"

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Piece', 'Naruto','Bleach']);

  return (
    <>
        <h1>GifExpertApp </h1>


        <ol>
          {categories.map(e=>{
            return <li key={e}>{e}</li>
          })}
        
        
          
        </ol>
    </>
  )
}

export default GifExpertApp
