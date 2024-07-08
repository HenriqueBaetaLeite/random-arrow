"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BackHomeButton = () => {
  const backToHome = () => {
    router.push("/");
  };
  const router = useRouter();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 transition"
      onClick={() => backToHome()}
    >
      Voltar
    </button>
  );
};

export default BackHomeButton;
