import React from "react";

const Select = ({
  values,
  callback,
  disabled = false,
  readonly = false,
  selected,
}) => {
  return (
    <select
      disabled={disabled}
      readOnly={readonly}
      onChange={({ target: { value } }) => callback(value)}
    >
      {values.map(([value, text], i) => (
        <option defaultValue={selected === value} value={value} key={i}>
          {text}
        </option>
      ))}
    </select>
  );
};

export default Select;
