import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategories = (NewCategory) => {
    if (categories.includes(NewCategory)) return;
    // categories.push(NewCategory); //!ESTO NO SE USA NUNCA, SE USAN HOOKS
    setCategories([...categories, NewCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategories(event)}
      />

      {/* listado de Gif */}

      {/* <button onClick={onAddCategories}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
