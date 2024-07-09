type Props = {
  className?: string;
  fill?: string;
  color?: string;
  width?: number;
  strokeWidth?: number;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export function FaceBookIcon(props: React.PropsWithoutRef<Props>) {
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
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
  )
}
