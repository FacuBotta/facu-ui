"use client";

import { iconProps, svgProps } from "../icon/iconsProps";

export function PlusIcon(props: React.PropsWithoutRef<iconProps>) {
  const Allprops = {...props, ...svgProps(props)};
  return (
    <svg {...Allprops} >
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </svg>
  )
}
