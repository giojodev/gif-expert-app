import { useState } from "react"
import {AddCategory} from './components/AddCategory'

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Piece', 'Naruto','Bleach']);

  const onAddCategorie = () =>{
    

    if(cat.value!= '' || cat.value != null )
    {
      setCategories([...categories,cat.value]);
    }
  }

  return (
    <>
        <h1>GifExpertApp </h1>
        <AddCategory setCategories={setCategories}/>
        
       
        <ol>
          {categories.map(e=>{
            return <li key={e}>{e}</li>
          })}
        
        
          
        </ol>
    </>
  )
}

export default GifExpertApp
