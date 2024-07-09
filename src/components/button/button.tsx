import React, { PropsWithChildren } from 'react';

type Props = {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ( props: PropsWithChildren<Props> ) => {
  return (
    <button
      className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
      {...props}
    >
      {props.children}
    </button>
  )
};
// https://www.youtube.com/watch?v=T3NR6dpMZZY
// https://www.youtube.com/watch?v=ESkD6Ouvs2s
