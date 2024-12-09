import React, { useState } from "react";
import { FruitType } from "./typescript/FruitType";

type FruitFormProps = {
  handleAdd: (fruitAAjouter: FruitType) => void;
};

export default function FruitForm({ handleAdd }: FruitFormProps) {
  //State
  const [nouveauFruit, setNouveauFruit] = useState("");

  //Comportement
  /*3-Soumission du formulaire*/
  const handleSubmit = (event: React.FormEventHandler<HTMLFormElement>) => {
    event.preventDefault();
    //console.log("handleSubmit!", e);

    // Copie du state

    // Manipuler sur la copie du state
    const id = new Date().getTime();
    const name = nouveauFruit;
    const fruitAAjouter = { id, name };
    handleAdd(fruitAAjouter);

    // Modifier mon state avec le setter

    setNouveauFruit("");
  };

  /*4-Changement de L'etat de formulaires*/
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange!", event.target.value);
    setNouveauFruit(event.target.value);
  };

  //Affichage(render)
  return (
    <div>
      {/*1-Gestion du formulaire*/}
      {/*2-Création du formulaire*/}
      <form action="submit" onSubmit={handleSubmit}>
        <h3 className="text-xl text-center font-bold underline my-6 mx-6">
          Champs d'ajouts des fruits !
        </h3>
        <input
          className="border rounded-md px-4 py-2 my-3 flex-1 capitalize"
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter des fruits..."
          onChange={handleChange}
        />
        <button
          className="border rounded-md px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white cursor-pointer font-semibold"
          type="submit"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
