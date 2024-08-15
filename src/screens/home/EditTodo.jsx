import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Checkbox from "../../components/Checkbox";
import { TodoContext } from "../../context";

export default function EditTodo({ closeModal, todo, setShowEditTodo }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    date: "",
  });
  useEffect(() => {
    setFormData({
      title: todo.title,
      description: todo.description,
      date: todo.date,
      priority: todo.priority,
    });
  }, [todo]);

  const { editTodo } = useContext(TodoContext);

  function editHandler() {
    editTodo(formData, todo.id);
    setShowEditTodo(false);
  }

  return (
    <Modal closeModal={closeModal}>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-md font-semibold text-black">Edit Todo</h2>
        <form className="w-full flex flex-col gap-4">
          <Input
            placeholder="Todo title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
          <textarea
            className="bg-gray-100 w-full outline-none h-[50px] rounded-md p-4 text-base flex-1"
            rows={4}
            placeholder="Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
          <Input
            type="datetime-local"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            value={formData.date}
          />
          <div className="w-full flex flex-col gap-4">
            <label className="">Set Priority</label>
            <div className="w-full flex items-center gap-3">
              <Checkbox
                id="high"
                label="High"
                accent="red"
                checked={formData.priority === "high"}
                onChange={() => {
                  setFormData({ ...formData, priority: "high" });
                }}
              />
              <Checkbox
                id="medium"
                label="Medium"
                accent="yellow"
                checked={formData.priority === "medium"}
                onChange={() => {
                  setFormData({ ...formData, priority: "medium" });
                }}
              />
              <Checkbox
                id="low"
                label="Low"
                accent="gray"
                checked={formData.priority === "low"}
                onChange={() => {
                  setFormData({ ...formData, priority: "low" });
                }}
              />
            </div>
          </div>
          <button
            onClick={() => {
              editHandler();
            }}
            type="button"
            className="h-[50px] w-full text-base hover:opacity-80 hover:shadow-md bg-[#A020F0] text-white px-10 flex items-center justify-center rounded-md text-center">
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
}

EditTodo.propTypes = {
  todo: PropTypes.object,
  closeModal: PropTypes.func,
  setShowEditTodo: PropTypes.func,
};
