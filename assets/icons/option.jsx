import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Option = ({ color, ...props }) => (
  <Svg
    width={3}
    height={13}
    viewBox="0 0 3 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
      fill={color}
    />
    <Path
      d="M1.5 8C2.32843 8 3 7.32843 3 6.5C3 5.67157 2.32843 5 1.5 5C0.671573 5 0 5.67157 0 6.5C0 7.32843 0.671573 8 1.5 8Z"
      fill={color}
    />
    <Path
      d="M1.5 13C2.32843 13 3 12.3284 3 11.5C3 10.6716 2.32843 10 1.5 10C0.671573 10 0 10.6716 0 11.5C0 12.3284 0.671573 13 1.5 13Z"
      fill={color}
    />
  </Svg>
);
export default Option;
