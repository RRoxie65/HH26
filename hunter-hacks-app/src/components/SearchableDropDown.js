import { useState } from "react";

export default function SearchableDropdown({ value, onSelect, placeholder, options = [] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = options.filter(o =>
    o.toLowerCase().includes(query.toLowerCase())
  );

  function handleSelect(option) {
    onSelect(option);
    setQuery(option);
    setOpen(false);
  }

  return (
    <div style={{ position: "relative", flex: 1 }}>
      <input
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          if (e.target.value === "") onSelect(""); // clear parent state if input cleared
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        placeholder={placeholder}
        style={{ width: "100%", padding: "8px 12px", boxSizing: "border-box" }}
      />

      {open && filtered.length > 0 && (
        <ul style={{
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0, right: 0,
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "6px",
          listStyle: "none",
          margin: 0, padding: 0,
          maxHeight: "200px",
          overflowY: "auto",
          zIndex: 10
        }}>
          {filtered.map((o, i) => (
            <li
              key={i}
              onMouseDown={() => handleSelect(o)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                background: o === value ? "#eef" : "white"
              }}
            >
              {o}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}