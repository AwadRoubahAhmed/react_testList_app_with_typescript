import { useState } from "react";
import Fruit from "./Fruit";
import FruitForm from "./FruitForm";
import { FruitType } from "./typescript/FruitType";

export default function TestContents() {
  //Code JavaScript;

  // State 1 (etat, données)
  const [fruits, setFruits] = useState<FruitType[]>([
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Abricot" },
  ]);

  // Comportements
  const handleDelete = (id: number) => {
    console.log(`Deleted id: ${id}`);

    // Copie du state
    const fruitsCopy = [...fruits];

    // Manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    // Modifier mon state avec le setFruits
    setFruits(fruitsCopyUpdated);
    console.log(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter: FruitType) => {
    //1. Copie du State
    const fruitsCopy = [...fruits];

    //2. Manipuler mon State
    fruitsCopy.push(fruitAAjouter);

    //3. Mofifier mon State avec le setter dédié
    setFruits(fruitsCopy);
  };

  /*const afficherFruitPrefere = (fruiLike: string) => {
    alert(`I like this one : ${fruiLike}!!. `);
  };*/

  // Affichage (render)
  //Code JSX;
  return (
    <div>
      <h3 className="text-xl text-center font-bold underline my-4 mx-6">
        Listes des Fruits!
      </h3>
      <div className="bg-slate-500 text-center">
        <ul className="list-none pl-4 mx-4 text-lg">
          {fruits.map((fruit) => (
            <Fruit
              fruitInfo={fruit}
              onClick={() => handleDelete(fruit.id)}
              //onClick={() => afficherFruitPrefere(fruit.name)}
              key={fruit.id}
            />
          ))}
        </ul>
      </div>

      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}
