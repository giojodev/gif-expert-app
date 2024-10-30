import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('');
  
  // Función para manejar el cambio de valor del input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedInput = inputValue.trim();

    // Validar que el valor ingresado no sea demasiado corto
    if (trimmedInput.length <= 1) return;

    // setCategories((categories) => [trimmedInput, ...categories]);
    onNewCategory(trimmedInput); 
    setInputValue(""); // Limpiar el input después de agregar la categoría
  };

 
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="txtCategories"
        type="text"
        placeholder="Buscar GIF"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes ={
  onNewCategory: PropTypes.func.isRequired
}