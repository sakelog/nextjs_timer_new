import { MouseEventHandler, ReactNode } from 'react';

type PropsType = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
};

const ControlButton = (props: PropsType) => {
  return (
    <button
      className="hover:bg-gray-800 hover:text-white
                 flex space-x-2 justify-center items-center p-1"
      onClick={props.onClick}
    >
      {props.icon && <span>{props.icon}</span>}
      <span className="font-bold">{props.text}</span>
    </button>
  );
};

export default ControlButton;
