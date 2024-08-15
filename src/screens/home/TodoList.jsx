import Pagination from "./Pagination";
import Todo from "./Todo";

export default function TodoList({ list }) {
  return (
    <div className="w-full flex flex-col gap-4 h-[80vh] overflow-scroll">
      {list.map((el, i) => (
        <Todo key={i} todo={el} />
      ))}
      <Pagination />
    </div>
  );
}
