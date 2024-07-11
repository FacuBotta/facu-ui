import React, { useState } from "react";
import { Icon } from "../icon/Icon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string | number;
  label?: string;
  error?: { message: string, value: boolean };
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(props.type);

  const handleVisibility = () => {
    if (props.type === 'password') {
      setVisible(!visible);
      setType(!visible ? 'text' : 'password');
    }
  }
  return (
    <>
      <label 
        htmlFor={props.id}
        className="flex ml-2 mb-1 gap-1"
        >
          {props.label} {props.required && <span className="text-red-500">*</span>}
        </label>
      <div className="flex">
        <input
          {...props}
          style={{ width: props.width || "100%", outline: props.error?.value ? '2px solid red' : 'none', outlineOffset: '-2px' }}
          required={props.required || false}
          className={props.className || "bg-gray-200 border-2 border-gray-300 rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700"}
          placeholder={props.placeholder || ""}
          type={type || "text"}
          ref={ref}
        />
        { 
          props.type === 'password' && (
            !visible ?
            <Icon type="eye" cursor="pointer" onClick={() => handleVisibility()} className="relative right-9 top-2" />
            : 
            <Icon type="eyeOff" cursor="pointer" onClick={() => handleVisibility()} className="relative right-9 top-2" />
          ) 
        }
        { props.type === 'search' && <Icon type="search" cursor="text" className="relative right-9 top-2" />}
      </div>
      {props.error?.value && <p className="text-red-500 ml-2">{props.error?.message || 'error message'}</p>}
    </>
  );
});