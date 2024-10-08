"use client";

import { iconProps, svgProps } from "../icon/iconsProps";

export function LogOutIcon(props: React.PropsWithoutRef<iconProps>) {
  const Allprops = { ...props, ...svgProps(props) };
  return (
    <svg {...Allprops}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 12v.01" />
      <path d="M3 21h18" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
      <path d="M14 7h7m-3 -3l3 3l-3 3" />
    </svg>
  );
}
