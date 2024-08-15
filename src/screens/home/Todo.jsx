import { MdEdit } from "react-icons/md";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext, useState } from "react";
import ViewTodo from "./ViewTodo";
import EditTodo from "./EditTodo";
import { TodoContext } from "../../context";

export default function Todo({ todo }) {
  const [show, setShow] = useState(false);
  const [showEditTodo, setShowEditTodo] = useState(false);
  const { deleteTodo } = useContext(TodoContext);

  function handleDelete(id) {
    deleteTodo(id);
  }

  return (
    <>
      {show && <ViewTodo closeModal={() => setShow(false)} todo={todo} />}
      {showEditTodo && (
        <EditTodo
          closeModal={() => setShowEditTodo(false)}
          todo={todo}
          setShowEditTodo={setShowEditTodo}
        />
      )}
      <div className="w-full flex items-center justify-between bg-[#A020F0] rounded-md hover:opacity-80 cursor-pointer p-4">
        <div className="flex-1 flex items-start flex-col gap-3">
          <p className="text-white capitalize font-medium">{todo.title}</p>
          <p className="text-white capitalize font-medium">
            {new Date(todo.date).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setShowEditTodo(true)}>
            <MdEdit color="white" />
          </button>
          <button onClick={() => setShow(true)}>
            <FaEye color="white" />
          </button>
          <button onClick={() => handleDelete(todo.id)}>
            <MdDelete color="red" />
          </button>
        </div>
      </div>
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
};
