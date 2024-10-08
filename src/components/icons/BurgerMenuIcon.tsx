"use client";

import { iconProps, svgProps } from '../icon/iconsProps';

export function BurgerMenuIcon(props: React.PropsWithoutRef<iconProps>) {
  const Allprops = {...props, ...svgProps(props)};
  return (
    <svg {...Allprops}>
      <path d="M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5z" />
      <path d="M5 12h14" />
    </svg>
  )
}
