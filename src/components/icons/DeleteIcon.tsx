type Props = {
  className?: string;
  fill?: string;
  color?: string;
  width?: number;
  strokeWidth?: number;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export function DeleteIcon(props: React.PropsWithoutRef<Props>) {
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
    {...props}
    ><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
  )
}