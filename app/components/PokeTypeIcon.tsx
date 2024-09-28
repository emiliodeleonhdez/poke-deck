import React from "react";

interface PokeTypeIconProps {
  types: string[];
}

const PokeTypeIcon: React.FC<PokeTypeIconProps> = ({ types }) => {
  return (
    <ul className="flex w-5/6 items-center justify-evenly m-2 p-2">
      {types?.map((type, index) => (
        <li key={index}>
          <img
            src={`/icons/${type}.svg`}
            alt={`${type} icon`}
            width={32}
            height={32}
          />
        </li>
      ))}
    </ul>
  );
};

export default PokeTypeIcon;
