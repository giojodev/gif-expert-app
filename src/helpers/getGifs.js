export const getGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zxwT8CKhHpRxRncsRNUCQwnpzeyj6CgU&q=${category}&limit=5`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url // Corrige la ruta de la imagen
    }));

    return gifs; // Retorna el array mapeado
  } catch (error) {
    console.error("Error fetching gifs:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};
