import { useEffect, useState } from "react"; // useEffect se usa para disparar un efecto secundario cuando el componente se renderiza pro primera vez
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    //en useEffect no se puede usar funciones asyncronas por eso se remplaza entre una de las tantas con ".then"
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
