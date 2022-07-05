import { useState } from "react";

export default function FilterItem({ item, setFilter, filter }) {
  const [isActive, setIsActive] = useState("normal");

  function updateFilter() {
    if (isActive === "active") {
      filter.delete(item.data.name.toLowerCase());
    }

    const newFilters =
      isActive === "normal"
        ? new Map(filter.set(item.data.name.toLowerCase(), item.id))
        : new Map(filter);
    const newActive = isActive === "normal" ? "active" : "normal";

    setIsActive(newActive);
    setFilter(newFilters);
  }
  return (
    <li
      className={filter.size > 0 ? isActive : "normal"}
      onClick={updateFilter}
    >
      {item.data.name}
    </li>
  );
}
