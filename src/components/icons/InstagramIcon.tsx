import { iconProps } from "../icon/iconsProps"

export function InstagramIcon(props: React.PropsWithoutRef<iconProps>) {
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
    className={props.className}
    style={{cursor: 'pointer'}}
    onMouseOver={(e)=> e.currentTarget.style.stroke = props.hoverColor || 'currentColor'}
    onMouseLeave={(e)=> e.currentTarget.style.stroke = 'currentColor'}
    {...props}
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
  )
}