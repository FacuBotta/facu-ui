"use client";

import { iconProps, svgProps } from "../icon/iconsProps";

export function MessageIcon(props: React.PropsWithoutRef<iconProps>) {
  const Allprops = {...props, ...svgProps(props)};
  return (
    <svg {...Allprops}>
      {props.filled ? (
        <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" />
      ) : (
        <>
          <path d="M8 9h8" />
          <path d="M8 13h6" />
          <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
        </>
      )}
    </svg>
  )
}
