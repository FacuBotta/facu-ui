import { iconProps } from "../icon/iconsProps"

export function TwitterIcon(props: React.PropsWithoutRef<iconProps>) {
  return (
    <svg
    viewBox="0 0 24 24"
    width={props.width || '24'}
    height={props.width || '24'}
    fill={props.fill || 'none'}
    stroke={props.color || 'currentColor'}
    strokeWidth={props.strokeWidth || 1}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{cursor: 'pointer'}}
    className={props.className}
    onMouseOver={(e)=> e.currentTarget.style.stroke = props.hoverColor || 'currentColor'}
    onMouseLeave={(e)=> e.currentTarget.style.stroke = 'currentColor'}
    {...props}
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
  )
}
