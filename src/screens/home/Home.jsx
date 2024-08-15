import { useContext, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import SearchTodo from "./SearchTodo";
import AddButton from "./AddButton";
import { TodoContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // fetch todo list from context
  const { list } = useContext(TodoContext);

  return (
    <>
      {show && <AddTodo setShow={setShow} />}
      <div className="w-full relative flex items-center justify-center h-screen bg-white">
        <div className="w-full p-4 lg:w-[450px] flex flex-col gap-6">
          <SearchTodo />
          <AddButton setShow={setShow} />
          {list.length > 0 && <TodoList list={list} />}
          {list.length === 0 && (
            <div className="w-full flex items-center justify-center h-[70vh]">
              You currently have no todo
            </div>
          )}
        </div>

        <button
          onClick={() => navigate("/api-integration")}
          className="p-6 text-black bg-gray-200 absolute bottom-0 right-0 m-4">
          Next
        </button>
      </div>
    </>
  );
}
