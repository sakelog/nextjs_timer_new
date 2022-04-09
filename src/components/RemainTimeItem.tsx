import { ReactNode } from 'react';

type PropsType = {
  remainTimeString: string;
  button: ReactNode;
};

const RemainTimeItem = (props: PropsType) => {
  return (
    <div className="col-span-2 text-center grid grid-rows-2">
      <div className="text-4xl md:text-6xl font-bold my-2 items-center font-time">
        {props.remainTimeString}
      </div>
      <div className="flex flex-col space-y-2">{props.button}</div>
    </div>
  );
};

export default RemainTimeItem;
