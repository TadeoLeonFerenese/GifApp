import { Gifitem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? <h2>cargando...</h2> : null} {/*Ami me gusta de esta forma*/}
      {/* {isLoading && <h2>cargando...</h2>} esta es otra forma */}
      <div className="card-grid">
        {/* Este trozo de codigo lo que hace es traerme los titulos de forma
        dinamica mapeando primero la data */}
        {images.map((image) => (
          <Gifitem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
