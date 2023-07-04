import { useEffect, useState } from "react"; // useEffect se usa para disparar un efecto secundario cuando el componente se renderiza pro primera vez
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    //en useEffect no se puede usar funciones asyncronas por eso se remplaza entre una de las tantas con ".then"
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {/* Este trozo de codigo lo que hace es traerme los titulos de forma
        dinamica mapeando primero la data */}
        {images.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};
