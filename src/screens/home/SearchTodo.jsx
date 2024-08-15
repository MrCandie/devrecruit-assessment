import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context";

export default function SearchTodo() {
  const [search, setSearch] = useState("");
  const { searchTodo } = useContext(TodoContext);

  useEffect(() => {
    if (!search) return;
    searchTodo(search);
  }, [search, searchTodo]);

  return (
    <form className="w-full flex items-center gap-4">
      <input
        className="bg-gray-100 outline-none h-[50px] rounded-md p-4 text-base flex-1"
        type="search"
        placeholder="Search todo..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
}
