export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=j2J69UUBruluDIgbe4OD9L8iKD4httHc&q=${category}&limit=10`; //url de la API
  const resp = await fetch(url); //Fetch de la api es asyncrono
  const { data } = await resp.json(); //Esto es una desestructuracion de la data para que traiga las img

  //desestructuracion de la data para obtener solo los valores que quiero
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
