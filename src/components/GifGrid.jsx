import { useState, useEffect } from "react"; // useEffect se usa para disparar un efecto secundario cuando el componente se renderiza pro primera vez
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};
