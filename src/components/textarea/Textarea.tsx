import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  //* The minimum height of the textarea, default is 50px */
  minHeight?: string;
  //* The width of the textarea, can be a string or number */
  width?: string;
  //* The content of the textarea */
  content?: string;
  //* The placeholder of the textarea */
  placeholder?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const [changingHeight, setChangingHeight] = React.useState<string | number | undefined>(props.minHeight);

  const handleHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = props.minHeight || '50px';
    setChangingHeight(e.target.scrollHeight);
  };

  const styles: React.CSSProperties = {
    width: props.width || '100%',
    minHeight: props.minHeight || '50px',
    height: changingHeight,
    outline: 'none',
    resize: 'none',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none',
  };

  return (
    <textarea
      className='bg-gray-200 border-2 border-gray-300 rounded-lg p-2 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200'
      ref={ref}
      style={styles}
      defaultValue={props.content}
      placeholder={props.placeholder}
      onChange={(e) => handleHeight(e)}
    />
  );
});
