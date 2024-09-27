export const getGifs = async() =>{
    const url= `api.giphy.com/v1/gifs/search?api_key=zxwT8CKhHpRxRncsRNUCQwnpzeyj6CgU&q=${category}&limit=5`;
    const resp = await fetch(url);
    const {data } = await resp.json();
  
    const gif = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.downsized_medium.url
    }))
  
    console.log(data);
  }