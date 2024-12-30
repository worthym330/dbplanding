"use client";

import React from "react";
import Select from "react-select";

interface MultiSelectProps {
  options: { value: string; label: string }[];
  value: string[];
  onChange: (selected: string[]) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const handleChange = (newValue: any) => {
    const selectedValues = newValue
      ? newValue.map((option: { value: string; label: string }) => option.value)
      : [];
    onChange(selectedValues);
  };

  return (
    <Select
      isSearchable
      isMulti
      options={options}
      value={options.filter((option) => value.includes(option.value))}
      onChange={handleChange}
      className="react-select-container"
      classNamePrefix="react-select"
    />
  );
};
