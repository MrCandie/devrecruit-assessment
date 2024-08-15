import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../components/Modal";
import TodoTitle from "./TodoTitle";
import TodoDescription from "./TodoDescription";
import TodoDate from "./TodoDate";
import TodoPriority from "./TodoPriority";

export default function AddTodo({ setShow }) {
  const [active, setActive] = useState(1);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
  });

  // multistep form wizard for adding a new todo

  return (
    <Modal closeModal={() => setShow(false)}>
      <form className="w-full flex items-center flex-col gap-4">
        <div className="w-full h-[8px] bg-white flex items-center border">
          <div
            style={{
              width: `${(active / 4) * 100}%`,
              backgroundColor: `${
                active === 1
                  ? "#90EE90"
                  : active === 2
                  ? "#32CD32"
                  : active === 3
                  ? "#0BDA51"
                  : "#478778"
              }`,
            }}
            className="h-full bg-blue-300"
          />
        </div>
        <h1 className="text-lg text-center font-medium">
          {active === 1
            ? "Add Title"
            : active === 2
            ? "Add description"
            : active === 3
            ? "Add date"
            : "Set Priority"}
        </h1>
        <hr />
        {active === 1 && (
          <TodoTitle
            formData={formData}
            setFormData={setFormData}
            setActive={setActive}
          />
        )}

        {active === 2 && (
          <TodoDescription
            formData={formData}
            setFormData={setFormData}
            setActive={setActive}
          />
        )}
        {active === 3 && (
          <TodoDate
            formData={formData}
            setFormData={setFormData}
            setActive={setActive}
          />
        )}
        {active === 4 && (
          <TodoPriority
            formData={formData}
            setFormData={setFormData}
            setShow={setShow}
          />
        )}
      </form>
    </Modal>
  );
}

AddTodo.propTypes = {
  setShow: PropTypes.func,
};
