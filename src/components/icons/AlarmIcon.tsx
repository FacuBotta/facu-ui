import { iconProps, svgProps } from "../icon/iconsProps";

export function AlarmIcon(props: React.PropsWithoutRef<iconProps>) {
  const Allprops = {...props, ...svgProps(props)};
  return (
    <svg {...Allprops} >
      {props.filled ? (
        <>
          <path d="M16 6.072a8 8 0 1 1 -11.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-4 2.928a1 1 0 0 0 -1 1v3l.007 .117a1 1 0 0 0 .993 .883h2l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.993 -.883h-1v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" /><path d="M6.412 3.191a1 1 0 0 1 1.273 1.539l-.097 .08l-2.75 2a1 1 0 0 1 -1.273 -1.54l.097 -.08l2.75 -2z" /><path d="M16.191 3.412a1 1 0 0 1 1.291 -.288l.106 .067l2.75 2a1 1 0 0 1 -1.07 1.685l-.106 -.067l-2.75 -2a1 1 0 0 1 -.22 -1.397z" />
        </>
      ) : (
        <>
          <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M7 4l-2.75 2" />
          <path d="M17 4l2.75 2" />
          <path d="M10 13h4" />
          <path d="M12 11v4" />
        </>
      )}
    </svg>
  )
}