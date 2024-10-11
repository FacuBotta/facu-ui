import React, { useState, useEffect } from "react";
import { Icon } from "../icon/Icon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string | number;
  iconColor?: string;
  label?: string;
  error?: { message: string; value: boolean };
  errorStyles?: { color: string; fontSize: string };
  regexp?: { message: string; pattern: RegExp };
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState(props.type);
    const [error, setError] = useState({
      message: props.error?.message || "",
      value: props.error?.value || false,
    });

    useEffect(() => {
      setError({
        message: props.error?.message || "",
        value: props.error?.value || false,
      });
    }, [props.error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.regexp) {
        const { pattern } = props.regexp;
        const value = e.target.value;
        if (pattern.test(value)) {
          setError({ message: props.regexp.message, value: true });
        } else {
          setError({ message: "", value: false });
        }
      }
    };

    const handleVisibility = () => {
      if (props.type === "password") {
        setVisible(!visible);
        setType(!visible ? "text" : "password");
      }
    };

    return (
      <label
        htmlFor={props.id}
        className="flex flex-col gap-1"
        style={{ width: props.width || "100%" }}
      >
        <p className="text-black dark:text-white text-sm pl-2">
          {props.label}{" "}
          {props.required && <span className="text-red-500">*</span>}
        </p>
        <div className="flex relative">
          <input
            {...props}
            style={{
              width: "100%",
              outline: error.value
                ? `2px solid ${props.errorStyles?.color || "red"}`
                : "none",
              // outline: error.value ? props.errorStyles?.color || "red" : "none",
              outlineOffset: "-2px",
            }}
            required={props.required || false}
            className={
              props.className ||
              "bg-gray-200 border-2 border-gray-300 rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200"
            }
            placeholder={props.placeholder || ""}
            type={type || "text"}
            ref={ref}
            onChange={(e) => handleChange(e)}
          />
          {props.type === "password" && (
            <div className="absolute right-2 h-full flex items-center">
              {!visible ? (
                <Icon
                  type="eye"
                  cursor="pointer"
                  color={props.iconColor || "currentColor"}
                  onClick={handleVisibility}
                />
              ) : (
                <Icon
                  type="eyeOff"
                  cursor="pointer"
                  color={props.iconColor || "currentColor"}
                  onClick={handleVisibility}
                />
              )}
            </div>
          )}
        </div>
        {error.value && (
          <p
            style={{
              fontSize: props.errorStyles?.fontSize || "0.8rem",
              color: props.errorStyles?.color || "red",
            }}
          >
            {error.message || "error message"}
          </p>
        )}
      </label>
    );
  }
);
