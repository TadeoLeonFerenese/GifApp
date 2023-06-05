import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setfirst] = useState(["One Punch", "Dragon Ball"]);

  console.log(categories);
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}

      {/* listado de Gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{categories}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
