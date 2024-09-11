import { useState } from "react"

export const AddCategory = () =>{
    
    const [inputValue, setinputValue] = useState('One Piece')
    
    const onInputChange = (event)=> {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        console.log(inputValue);
    }

    return (
      <form onSubmit={(event)=>onSubmit(event)}>
        <input
          id="txtCategories"
          type="text"
          placeholder="Buscar GIF"
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        ></input>
      </form>
    );
}