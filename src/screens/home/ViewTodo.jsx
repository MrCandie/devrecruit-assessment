import PropTypes from "prop-types";
import Modal from "../../components/Modal";

export default function ViewTodo({ closeModal, todo }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="w-full flex flex-col gap-4">
        <Reusable title="Title" text={todo.title} />
        <Reusable title="Description" text={todo.description} />
        <Reusable title="Date" text={new Date(todo.date).toLocaleString()} />
        <Reusable title="Priority" text={todo.priority} />
      </div>
    </Modal>
  );
}

function Reusable({ title, text }) {
  return (
    <div className="w-full flex items-start gap-2s flex-col border-b">
      <h2 className="text-md font-medium text-start text-black">{title}</h2>
      <h3 className="text-base font-normal text-start text-black capitalize">
        {text}
      </h3>
    </div>
  );
}

ViewTodo.propTypes = {
  closeModal: PropTypes.func,
  todo: PropTypes.object,
};

Reusable.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
