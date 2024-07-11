import { iconProps, svgProps } from "../icon/iconsProps";

export function SendIcon(props: React.PropsWithoutRef<iconProps>) {
  const Allprops = {...props, ...svgProps(props)};
  return (
    <svg {...Allprops}>
      <path d="M10 14l11 -11" />
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
    </svg>
  )
}