import { useEffect } from "react"; // useEffect se usa para disparar un efecto secundario cuando el componente se renderiza pro primera vez
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
