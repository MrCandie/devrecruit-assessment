import PropTypes from "prop-types";

export default function Checkbox({
  label,
  accent,
  id,
  onChange,
  value,
  checked,
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        style={{ accentColor: accent }}
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id} className="">
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  accent: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
