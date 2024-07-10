import { iconProps } from "../icon/iconsProps"

export function AddPhotoIcon(props: React.PropsWithoutRef<iconProps>) {
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
    ><path d="M15 8h.01" /><path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" /><path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
  )
}
