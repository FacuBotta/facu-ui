
export type iconProps = {
  className?: string;
  /** Set if the icon is filled or not, default is false. The behavior can be different for different icons */
  filled?: boolean;
  /** Stroke color of the icon */
  color?: string;
  /** Stroke color of the icon when hovered */
  hoverColor?: string;
  /** Width and height of the icon, default is 24px */
  width?: number;
  cursor?: string;
  strokeWidth?: number;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  type?: 'instagram' | 'youtube' | 'search' | 'menu' | 'burgerMenu' | 'plus' | 'minus' | 'heart' | 'star' | 'send' | 'userOff' | 'message' | 'add' | 'addUser' | 'addPhoto' | 'edit' | 'logIn' | 'logOut' | 'alarm' | 'delete' | 'user' | 'linkedIn' | 'home' | 'calendar' | 'calendarPlus' | 'eye' | 'eyeOff' | 'mapSearch' | 'mapPin' | 'infoCircle' | 'phone' | 'bell' | 'twitter' | 'faceBook' | 'tikTok' | 'discord';
}

export const svgProps = (props: iconProps) => {
  const filled = props.filled? 'currentColor' : 'none'
  return {
    viewBox: "0 0 24 24",
    width: props.width || '24',
    height: props.width || '24',
    fill: filled,
    stroke: props.color || 'currentColor',
    strokeWidth: props.strokeWidth || 1,
    strokeLinecap: "round", // this is not working, make a type error
    strokeLinejoin: "round", // this is not working, make a type error
    style: { cursor: props.cursor || 'pointer' },
    onMouseOver: (e: React.MouseEvent<SVGSVGElement>) => {
      if (props.filled) {
        e.currentTarget.style.fill = props.hoverColor || 'currentColor'
      }
      e.currentTarget.style.stroke = props.hoverColor || 'currentColor'
    },
    onMouseLeave: (e: React.MouseEvent<SVGSVGElement>) => {
      if (props.filled) {
        e.currentTarget.style.fill = 'currentColor'
      }
      e.currentTarget.style.stroke = 'currentColor'
    },
  }
};