import React from "react";
import { useError } from "../context/ErrorContext";

const ErrorDisplay: React.FC = () => {
  const { error } = useError();

  if (!error) return null;

  return (
    <div className="fixed top-0 w-full p-4 bg-red-500 text-white text-center">
      {error}
    </div>
  );
};

export default ErrorDisplay;
