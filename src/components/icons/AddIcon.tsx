import { iconProps } from "../icon/iconsProps"

export function AddIcon(props: React.PropsWithoutRef<iconProps>) {
  const filled = props.filled? 'currentColor' : 'none'

  return (
    <svg
    viewBox="0 0 24 24"
    width={props.width || '24'}
    height={props.width || '24'}
    fill={filled}
    stroke={props.color || 'currentColor'}
    strokeWidth={props.strokeWidth || 1}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{cursor: 'pointer'}}
    className={props.className}
    onMouseOver={(e)=> e.currentTarget.style.stroke = props.hoverColor || 'currentColor'}
    onMouseLeave={(e)=> e.currentTarget.style.stroke = 'currentColor'}
    {...props}
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
  )
}
