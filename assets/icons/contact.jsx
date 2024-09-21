import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Contact = ({ color, ...props }) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.7327 7.99282C10.5398 8.1535 10.3733 8.33948 10.237 8.54431L10.237 8.54439C10.2031 8.59529 10.1584 8.63103 10.1206 8.64805C10.0863 8.66346 10.0717 8.65862 10.0684 8.65753C10.0684 8.65753 10.0684 8.65753 10.0684 8.65753L10.0684 8.65752L9.39313 8.43258C9.59724 8.03462 9.8814 7.67947 10.2298 7.38919L13.4468 7.57431C12.9988 7.39328 12.5077 7.33649 12.0281 7.41059C11.5485 7.4847 11.1003 7.68659 10.7327 7.99282ZM10.7327 7.99282L11.0503 8.37406L10.7327 7.99282ZM12.7135 12.7368L12.7134 12.7369C12.5282 12.8822 12.357 13.0643 12.2342 13.306L12.7135 12.7368ZM12.7135 12.7368C12.8949 12.5943 13.0962 12.4825 13.2807 12.3856L13.2808 12.3855M12.7135 12.7368L13.2808 12.3855M13.2808 12.3855C13.3374 12.3558 13.3894 12.3289 13.4391 12.3033L13.4393 12.3032M13.2808 12.3855L13.4393 12.3032M13.4393 12.3032L13.4416 12.302C13.5687 12.2363 13.6888 12.1743 13.814 12.0995L13.4393 12.3032ZM15.0549 9.72886L15.0549 9.72897C15.0925 10.1956 14.9972 10.6638 14.7788 11.0819L15.0549 9.72886ZM15.0549 9.72886C15.0172 9.26216 14.8479 8.81385 14.5646 8.43353L14.5646 8.43353M15.0549 9.72886L14.5646 8.43353M14.5646 8.43353C14.2813 8.05314 13.8948 7.75534 13.4468 7.57432L14.5646 8.43353ZM12.0474 14.1574C12.0474 13.8292 12.1111 13.5483 12.2341 13.3061L11.9081 6.63409C12.5272 6.53844 13.1615 6.61159 13.7411 6.84583L13.7412 6.84583C14.3209 7.0801 14.8243 7.46673 15.1948 7.96421L15.1948 7.96422C15.5654 8.46182 15.7884 9.05067 15.838 9.66577C15.8876 10.2809 15.7619 10.897 15.4752 11.4456L15.4752 11.4457C15.1887 11.9943 14.753 12.4536 14.2174 12.7738C14.0701 12.8618 13.9071 12.9461 13.7625 13.0207L13.762 13.021L13.7454 13.0295C13.711 13.0474 13.6774 13.0647 13.6468 13.0807L13.6461 13.0811C13.4687 13.1744 13.3209 13.2589 13.1989 13.3547C13.0799 13.448 12.9938 13.5458 12.9349 13.6615L12.9343 13.6627C12.8759 13.7779 12.8331 13.9333 12.8331 14.1574V15.2766C12.8331 15.2962 12.8171 15.3123 12.7974 15.3123H12.0831C12.0634 15.3123 12.0474 15.2963 12.0474 15.2766V14.1574Z"
      stroke={color}
    />
    <Path
      d="M12.2065 18.2714V17.8003H12.6776V18.2714H12.2065Z"
      stroke={color}
    />
    <Path
      d="M1.39307 12.5002C1.39307 6.36591 6.36591 1.39307 12.5002 1.39307C18.6345 1.39307 23.6074 6.36591 23.6074 12.5002C23.6074 18.6345 18.6345 23.6074 12.5002 23.6074C6.36591 23.6074 1.39307 18.6345 1.39307 12.5002ZM12.5002 2.17878C6.79984 2.17878 2.17878 6.79984 2.17878 12.5002C2.17878 18.2005 6.79984 22.8216 12.5002 22.8216C18.2005 22.8216 22.8216 18.2005 22.8216 12.5002C22.8216 6.79984 18.2005 2.17878 12.5002 2.17878Z"
      stroke={color}
    />
  </Svg>
);
export default Contact;