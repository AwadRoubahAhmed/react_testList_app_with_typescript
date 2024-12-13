import { FruitType } from "./typescript/FruitType";

type ColorOption = "red" | "green" | "bleu" | "yellow";

type FruitProps = {
  fruitInfo: FruitType;
  onClick: () => void;
  backgroundColor?: ColorOption;
};

export default function Fruit({
  fruitInfo,
  onClick,
  backgroundColor,
}: FruitProps) {
  //State

  //Comportement

  //Affichage(render)
  return (
    <div>
      <ul>
        <li className="flex items-center justify-around">
          {fruitInfo.name}{" "}
          <button
            style={{ backgroundColor: backgroundColor }}
            onClick={onClick}
            className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs rounded-full p-1"
          >
            X
          </button>
        </li>
      </ul>
    </div>
  );
}
