import { useState } from "react"
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Piece', 'Naruto','Bleach']);



  const onAddCategory =(newCategory)=>{
    if(categories.includes(newCategory)) return;
    // categories.push(newCategory); 
    console.log(newCategory);
    setCategories([newCategory,...categories]);
 }

  return (
    <>
      <h1>GifExpertApp </h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />

        <ol>
          {categories.map(category=>(
            <GifGrid category={category} key={category}/>

          ))}

        </ol>

    </>
  );
}

export default GifExpertApp
