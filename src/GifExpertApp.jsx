import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategories = (NewCategory) => {
    if (categories.includes(NewCategory)) return;
    // categories.push(NewCategory); //!ESTO NO SE USA NUNCA, SE USAN HOOKS
    setCategories([...categories, NewCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategories(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
