import { useState } from "react"
import {AddCategory,GifGrid} from './components'


const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Piece', 'Naruto','DBZ','TANJIRO KIMETSU']);



  const onAddCategory =(newCategory)=>{
    if(categories.includes(newCategory)) return;

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
