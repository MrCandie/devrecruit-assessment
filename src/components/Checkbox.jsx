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
