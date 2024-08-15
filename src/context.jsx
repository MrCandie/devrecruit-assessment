import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext({
  list: [],
  addTodo: (todo) => {},
  deleteTodo: (todoId) => {},
  editTodo: (todo) => {},
  searchTodo: (search) => {},
  totalPages: 0,
});

export default function TodoProvider({ children }) {
  const [list, setList] = useState([]);
  // const [first, setFirst] = useState(0);
  // const [last, setLast] = useState(2);

  useEffect(() => {
    const storedList = localStorage.getItem("todo");
    const parsedList = storedList ? JSON.parse(storedList) : [];
    setList(parsedList);
  }, []);

  const totalPages = Math.round(list.length / 2);

  function addTodo(todo) {
    const storedList = localStorage.getItem("todo");
    const parsedList = storedList ? JSON.parse(storedList) : [];
    const updatedList = [todo, ...parsedList];
    setList(updatedList);
    localStorage.setItem("todo", JSON.stringify(updatedList));
  }

  function deleteTodo(todoId) {
    const newList = [...list];
    const filteredList = newList.filter((el) => el.id !== todoId);
    setList(filteredList);
    localStorage.setItem("todo", JSON.stringify(filteredList));
  }

  function editTodo(data, id) {
    const newList = [...list];
    const editedList = newList.map((el) =>
      el.id === id ? { ...data, id } : el
    );
    setList(editedList);
    localStorage.setItem("todo", JSON.stringify(editedList));
  }

  function searchTodo(val) {
    const value = val?.trim()?.toLowerCase();
    const storedList = localStorage.getItem("todo");
    const parsedList = storedList ? JSON.parse(storedList) : [];
    const filteredList = parsedList.filter(
      (el) =>
        el.title?.toLowerCase()?.includes(value) ||
        el.description?.toLowerCase()?.includes(value)
    );
    setList(filteredList);
  }

  const value = {
    list,
    addTodo,
    deleteTodo,
    editTodo,
    searchTodo,
    totalPages,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
