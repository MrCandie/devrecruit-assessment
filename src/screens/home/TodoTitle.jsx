import PropTypes from "prop-types";
import Input from "../../components/Input";

export default function TodoTitle({ formData, setFormData, setActive }) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Input
        type="text"
        placeholder="Todo title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        value={formData.title}
      />
      <div className="w-full flex items-end justify-end">
        <button
          onClick={() => {
            if (!formData.title) return;
            setActive(2);
          }}
          type="button"
          className="h-[50px] text-base hover:opacity-80 hover:shadow-md bg-[#A020F0] text-white px-10 flex items-center justify-center rounded-md text-center">
          Next
        </button>
      </div>
    </div>
  );
}

TodoTitle.propTypes = {
  setFormData: PropTypes.func,
  formData: PropTypes.object,
  setActive: PropTypes.func,
};
