import { useContext } from "react";
import Checkbox from "../../components/Checkbox";
import { v4 as uuid } from "uuid";
import { TodoContext } from "../../context";

export default function TodoPriority({ formData, setFormData, setShow }) {
  const { addTodo } = useContext(TodoContext);
  return (
    <div className="w-full flex flex-col items-center gap-4">
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
      <div className="w-full flex items-end justify-end">
        <button
          onClick={() => {
            if (!formData.priority) return;
            const todoData = {
              ...formData,
              id: uuid(),
            };
            addTodo(todoData);
            setShow(false);
          }}
          type="button"
          className="h-[50px] text-base hover:opacity-80 hover:shadow-md bg-[#A020F0] text-white px-10 flex items-center justify-center rounded-md text-center">
          Add todo
        </button>
      </div>
    </div>
  );
}
