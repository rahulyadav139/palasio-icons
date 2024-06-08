const template = (variables, { tpl }) => tpl`
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  primaryColor?: string,
  secondaryColor?: string
}

${variables.interfaces};

export const ${variables.componentName.substring(
  3
)} = ({primaryColor, secondaryColor, ...props}: IconProps) => (
  ${variables.jsx}
);

`;
module.exports = template;
