/** @format */

import React from "react";

interface MenuSelectProps {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
}

export const MenuSelect: React.FC<MenuSelectProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className='flex items-center gap-2'>
      <label className='text-sm'>{label}</label>
      <select
        className='border rounded-md px-2 py-1 text-sm'
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value=''>Default</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
