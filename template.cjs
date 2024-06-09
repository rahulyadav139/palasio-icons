const template = (variables, { tpl }) => {
  const componentName = variables.componentName.substring(3);
  return tpl`
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  primaryColor?: string,
  secondaryColor?: string
}

${variables.interfaces};

export const ${componentName} = (props: IconProps) => (
  ${variables.jsx}
);

export default ${componentName}

`;
};
module.exports = template;
