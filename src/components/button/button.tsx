import React, { PropsWithChildren } from 'react';

type Props = {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ( props: PropsWithChildren<Props> ) => {
  return (
    <button
      style={
        {
          borderRadius: 10,
          padding: '.5rem 1rem',
        }
      }
      {...props}
    >
      {props.children}
    </button>
  )
};
// https://www.youtube.com/watch?v=T3NR6dpMZZY
// https://www.youtube.com/watch?v=ESkD6Ouvs2s

// https://www.youtube.com/watch?v=ESkD6Ouvs2s