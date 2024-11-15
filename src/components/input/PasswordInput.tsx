'use client';

import React, { useEffect, useState } from 'react';
import { Icon } from '../icon/Icon';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The width of the input, most to be a string ('200px', '50%', etc)
   * Default is '100%' */
  /**
   * If you prefer to pass this in the class property you will need to add the important keyword to the width property
   */
  width?: string;
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

export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
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

    // Setting the warning state when the regexp don't match in any keydown
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

    // Hide or show the password when user click on the eye icon
    const handleVisibilityChange = () => {
      setType(type === 'password' ? 'text' : 'password');
    };

    // Setting the error state when the error prop changes from outside
    useEffect(() => {
      setError({
        message: props.error?.message || '',
        value: props.error?.value || false,
      });
    }, [props.error]);

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
          {props.label || 'Password'} {<span className="text-red-500">*</span>}
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
            type={'password'}
            ref={ref}
            onChange={(e) => handleChange(e)}
          />
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
        </div>
        {error.value && (
          <p className="text-red-500 ml-2">
            {error.message || 'error message'}
          </p>
        )}
        {props.regexp && warning.value && (
          <p className="text-orange-600 ml-2">
            {props.regexp.message || "The password doesn't match the pattern"}
          </p>
        )}
      </label>
    );
  }
);
