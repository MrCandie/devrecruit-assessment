import Todo from "./Todo";
import PropTypes from "prop-types";

export default function TodoList({ list }) {
  return (
    <div className="w-full flex flex-col gap-4 h-[80vh] overflow-scroll">
      {list.map((el, i) => (
        <Todo key={i} todo={el} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  list: PropTypes.array,
};
