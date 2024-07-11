import React from "react";

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  width?: string | number;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return (
    <select 
      style={{ width: props.width || "100%"}}
      ref={ref} 
      {...props}  
    >
      {props.children}
    </select>
  )
});