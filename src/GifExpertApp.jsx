import { useState } from "react"

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Piece', 'Naruto','Bleach']);

  const onAddCategorie = () =>{
    let cat = document.querySelector('#txtCategories');

    if(cat.value!= '' || cat.value != null )
    {
      setCategories([...categories,cat.value]);
    }
  }

  return (
    <>
        <h1>GifExpertApp </h1>
        <input id="txtCategories" type="text"></input>
        <button onClick={onAddCategorie}>Agregar</button>
        <ol>
          {categories.map(e=>{
            return <li key={e}>{e}</li>
          })}
        
        
          
        </ol>
    </>
  )
}

export default GifExpertApp
