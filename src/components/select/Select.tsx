"use client";

import React from "react";

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  width?: string | number;
  label?: string;
  required?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {

  const defaultIcon = "<svg  xmlns='http://www.w3.org/2000/svg'  width='24'  height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'  stroke-linecap='round' stroke-linejoin='round' class='icon icon-tabler icons-tabler-outline icon-tabler-chevron-down'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M6 9l6 6l6 -6' /></svg>";
  
  return (
    <>
      {props.label && (
      <label>
        <p className="text-sm pl-2">{props.label} {props.required && <span className="text-red-500">*</span>}</p>
      </label>
      )}
        <select
          style={{
            width: props.width || "100%",
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml;utf8,${defaultIcon}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5em',  
            backgroundPosition: 'right .5em center',
            WebkitPrintColorAdjust: 'exact',
            WebkitAppearance: 'none',
          }}
          className="bg-gray-50 border-2 border-gray-700 rounded-lg p-2 dark:bg-slate-200 dark:border-slate-700"
          ref={ref} 
          {...props}
          >
          {props.children}
        </select>
    </>
  )
});