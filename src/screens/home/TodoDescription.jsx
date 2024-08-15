import PropTypes from "prop-types";

export default function TodoDescription({ setFormData, formData, setActive }) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <textarea
        className="bg-gray-100 w-full outline-none h-[50px] rounded-md p-4 text-base flex-1"
        rows={4}
        placeholder="Description"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        value={formData.description}
      />
      <div className="w-full flex items-end justify-end">
        <button
          onClick={() => {
            if (!formData.description) return;
            setActive(3);
          }}
          type="button"
          className="h-[50px] text-base hover:opacity-80 hover:shadow-md bg-[#A020F0] text-white px-10 flex items-center justify-center rounded-md text-center">
          Next
        </button>
      </div>
    </div>
  );
}

TodoDescription.propTypes = {
  setFormData: PropTypes.func,
  formData: PropTypes.object,
  setActive: PropTypes.func,
};
