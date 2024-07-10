import { iconProps } from "../icon/iconsProps"

export function AlarmIcon(props: React.PropsWithoutRef<iconProps>) {
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
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M7 4l-2.75 2" /><path d="M17 4l2.75 2" /><path d="M10 13h4" /><path d="M12 11v4" /></svg>
  )
}
