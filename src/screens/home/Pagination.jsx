import React, { useContext } from "react";
import { TodoContext } from "../../context";

export default function Pagination() {
  const { totalPages } = useContext(TodoContext);
  const pages = Array.from({ length: totalPages });

  return (
    <div className="w-full flex items-end gap-3 justify-end">
      {pages.map((el, i) => (
        <Btn key={i} index={i} />
      ))}
    </div>
  );
}

function Btn({ index }) {
  return (
    <button className="w-[30px] h-[30px] text-[14px] text-white bg-[#A020F0] rounded-md">
      {index + 1}
    </button>
  );
}
