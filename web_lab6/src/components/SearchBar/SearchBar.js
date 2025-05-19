import React from "react";

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Filter cards…"
    value={value}
    onChange={e => onChange(e.target.value)}
    onKeyDown={e => e.key === "Escape" && onChange("")}
    style={{
      padding: "8px 12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      width: 260,
      margin: "12px 16px",
      fontSize: 16,
    }}
  />
);

export default SearchBar;
