import { ReactNode } from 'react';

type PropsType = {
  path: string;
  children: ReactNode;
};

const ExternalLink = (props: PropsType) => {
  return (
    <a href={props.path} target="_blank" rel="noopener noreferrer nofollow">
      {props.children}
    </a>
  );
};

export default ExternalLink;
