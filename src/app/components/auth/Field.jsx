export default function Field({
  label,
  name,
  type = "text",
  placeholder,
  options,
  required = true,
  className = "",
}) {
  const base =
    "w-full rounded-md border border-[#E8692D]/70 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#E8692D]/30";
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs font-semibold text-[#0B1F33]">{label}</span>
      {options ? (
        <select name={name} required={required} defaultValue="" className={base}>
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}