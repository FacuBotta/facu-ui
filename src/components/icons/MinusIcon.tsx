import { iconProps, svgProps } from "../icon/iconsProps";

export function MinusIcon(props: React.PropsWithoutRef<iconProps>) {
  const Allprops = {...props, ...svgProps(props)};
  return (
    <svg {...Allprops}>
      <path d="M5 12l14 0" />
    </svg>
  )
}
