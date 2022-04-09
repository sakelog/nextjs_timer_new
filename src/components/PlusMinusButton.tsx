import { MouseEventHandler } from 'react';

type PropsType = {
  plus?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const PlusMinusButton = (props: PropsType) => {
  return (
    <button
      className="bg-gray-200 rounded hover:bg-gray-800 hover:text-white"
      onClick={props.onClick}
    >
      <span className="font-bold text-xl md:text-xl">
        {props.plus ? '+' : '-'}
      </span>
    </button>
  );
};

export default PlusMinusButton;
