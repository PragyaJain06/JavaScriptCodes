import React, { useState } from "react";
import { useSelector } from "react-redux";

function Filter() {
  const filterData = useSelector((state) => state.data.filterData);
  const [selected, setSelected] = useState("");
  return (
    <div>
      Filter
      <select
        label="Select any one flavour!"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {filterData?.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
