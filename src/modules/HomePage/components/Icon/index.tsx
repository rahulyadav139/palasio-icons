import { SVGProps } from 'react';

type IconsType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

type IconProps = SVGProps<SVGSVGElement> & {
  Component: IconsType | null;
};

export const Icon = ({ Component, ...props }: IconProps) => {
  if (!Component) return null;

  return <Component {...props} />;
};
