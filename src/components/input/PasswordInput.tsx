'use client';

import React, { useState } from 'react';
import { Icon } from '../icon/Icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The width of the input, can be a string or number */
  width?: string | number;
  /** The color of the label, text input, and the password icon, default is currentColor */
  color?: string;
  /** The label to show above the input */
  label?: string;
  /** The error message to show, and the boolean value to set the error state */
  error?: { message: string; value: boolean };
  /** A regular expression to test the input, and the error message to show */
  regexp?: { message: string; pattern: RegExp };
}

interface Warning {
  message: string;
  value: boolean;
}
interface Error {
  message: string;
  value: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [type, setType] = useState<'text' | 'password'>('password');
    const [warning, setWarning] = useState<Warning>({
      message: '',
      value: false,
    });
    const [error, setError] = useState<Error>({
      message: props.error?.message || '',
      value: props.error?.value || false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.regexp) {
        const { pattern } = props.regexp;
        const value = e.target.value;
        if (pattern.test(value)) {
          setWarning({ message: props.regexp.message, value: true });
        } else {
          setWarning({ message: '', value: false });
        }
      }
    };

    const handleVisibilityChange = () => {
      setType(type === 'password' ? 'text' : 'password');
    };
    return (
      <label
        htmlFor={props.id}
        className="flex flex-col gap-1 mb-3"
        style={{
          width: props.width || '100%',
          color: props.color || 'currentColor',
        }}
      >
        <p className="text-sm pl-2">
          {props.label}{' '}
          {props.required && <span className="text-red-500">*</span>}
        </p>
        <div className="flex relative">
          <input
            {...props}
            className={
              props.className ||
              'bg-gray-50 border-2 border-gray-700 rounded-lg p-2 dark:bg-slate-200 dark:border-slate-700'
            }
            style={{
              width: '100%',
              outline: error.value ? '2px solid red' : 'none',
              outlineOffset: '-2px',
            }}
            required={props.required || false}
            placeholder={props.placeholder || ''}
            type={type || 'password'}
            ref={ref}
            onChange={(e) => handleChange(e)}
          />
          {props.type === 'password' && (
            <div className="absolute right-2 h-full flex items-center">
              {type === 'password' ? (
                <Icon
                  type="eye"
                  cursor="pointer"
                  color={props.color || 'currentcolor'}
                  onClick={() => handleVisibilityChange()}
                />
              ) : (
                <Icon
                  type="eyeOff"
                  cursor="pointer"
                  color={props.color || 'currentcolor'}
                  onClick={() => handleVisibilityChange()}
                />
              )}
            </div>
          )}
        </div>
        {error.value && (
          <p className="text-red-500 ml-2">
            {error.message || 'error message'}
          </p>
        )}
        {props.regexp && warning.value && (
          <p className="text-orange-500-500 ml-2">
            {props.regexp.message || "The password doesn't match the pattern"}
          </p>
        )}
      </label>
    );
  }
);
