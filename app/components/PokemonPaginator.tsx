import React from "react";
import usePokemonCount from "../hooks/usePokemonCount";

interface PokemonPaginatorProps {
  page: number;
  onPageChange: (newPage: number) => void;
}

const PokemonPaginator: React.FC<PokemonPaginatorProps> = ({
  page,
  onPageChange,
}) => {
  const { totalPokemon } = usePokemonCount();
  const totalPages = Math.ceil(totalPokemon / 20);

  return (
    <div className="pagination-controls flex gap-2 mt-4 w-5/6 p-4 overflow-x-auto self-center">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-4 py-2 rounded ${
            pageNumber === page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default PokemonPaginator;
