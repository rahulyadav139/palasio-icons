const template = (variables, { tpl }) => tpl`
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  primaryColor?: string,
  secondaryColor?: string
}

${variables.interfaces};

const ${variables.componentName} = ({primaryColor, secondaryColor, ...props}: IconProps) => (
  ${variables.jsx}
);

export default ${variables.componentName}

`;
module.exports = template;
