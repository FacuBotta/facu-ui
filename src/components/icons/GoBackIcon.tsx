"use client";

import { iconProps, svgProps } from "../icon/iconsProps";

export function GoBackIcon(props: React.PropsWithoutRef<iconProps>) {
  const Allprops = { ...props, ...svgProps(props) };
  return (
    <svg {...Allprops}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 14l-4 -4l4 -4" />
      <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
    </svg>
  );
}
