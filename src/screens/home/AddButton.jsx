import React from "react";

export default function AddButton({ setShow }) {
  return (
    <button
      onClick={() => setShow(true)}
      className="h-[50px] text-base hover:opacity-80 hover:shadow-md border border-[#A020F0] text-[#A020F0] text-white p-4 flex items-center justify-center rounded-md text-center">
      Add Todo
    </button>
  );
}
