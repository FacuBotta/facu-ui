export type iconProps = {
  className?: string;
  /** Fill color of the icon, the behavior can change depending on the icon */
  fill?: string;
  /** Stroke color of the icon */
  color?: string;
  /** Stroke color of the icon when hovered */
  hoverColor?: string;
  /** Width and height of the icon, default is 24px */
  width?: number;
  strokeWidth?: number;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  type?: 'instagram' | 'youtube' | 'search' | 'menu' | 'burgerMenu' | 'plus' | 'minus' | 'heart' | 'star' | 'send' | 'userOff' | 'message' | 'add' | 'addUser' | 'addPhoto' | 'edit' | 'logIn' | 'logOut' | 'alarm' | 'delete' | 'user' | 'linkedIn' | 'home' | 'calendar' | 'calendarPlus' | 'eye' | 'eyeOff' | 'mapSearch' | 'mapPin' | 'infoCircle' | 'phone' | 'bell' | 'twitter' | 'faceBook' | 'tikTok' | 'discord';
}
