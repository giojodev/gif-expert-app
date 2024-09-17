import { useState } from "react"
import {AddCategory} from './components/AddCategory'

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Piece', 'Naruto','Bleach']);



  const onAddCategory =(newCategory)=>{
    if(categories.includes(newCategory)) return;
    {

    }
    // categories.push(newCategory); 
    console.log(newCategory);
    setCategories([...categories,newCategory]);
 }

  return (
    <>
        <h1>GifExpertApp </h1>
        <AddCategory
        //  setCategories={setCategories}
          onNewCategory = {event=> onAddCategory(event) }
         />
        
       
        <ol>
          {categories.map(e=>{
            return <li key={e}>{e}</li>
          })}
        
        
          
        </ol>
    </>
  )
}

export default GifExpertApp
