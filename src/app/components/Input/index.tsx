import React from "react";
import { useState } from "react";

interface inputProps {
  valueType: string;
  disable?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  id?: string;
}

export default function Input({
  valueType,
  disable = false,
  label,
  placeholder,
  value,
  onChange,
  name,
  id
}: inputProps) {
  const [input, setInput] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    onChange?.(e);
  };
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={valueType}
        id={id}
        name={name}
        disabled={disable}
        placeholder={placeholder}
        value={input}
        onChange={handleChange}/>
    </div>
  );
}
