import { Icon } from "@chakra-ui/react";
import { CustomIconProps } from "../../../types";

interface ProgressFourProps extends CustomIconProps {
  selected?: boolean;
}

export default function ProgressFour({
  selected,
  ...props
}: ProgressFourProps) {
  return (
    <Icon
      {...props}
      viewBox="0 0 33 33"
      xmlns="http://www.w3.org/2000/svg"
      fill={selected ? "#BEE2FD" : "none"}
      transition=" all 1s ease"
    >
      <g clip-path="url(#a)">
        <circle
          cx="16.5"
          cy="16.5"
          r="16"
          stroke={selected ? "#BEE2FD" : "#fff"}
        />
        <path
          fill={selected ? "#000" : "#fff"}
          d="M17.988 14.846c-.364.476-.752.994-1.162 1.554-.411.56-.756 1.134-1.037 1.722h2.199v-3.276Zm2.044-2.548v5.824h1.035v1.708h-1.035V22h-2.044v-2.17h-4.186v-1.526c.205-.41.462-.873.77-1.386a26.626 26.626 0 0 1 2.226-3.206c.42-.523.84-.994 1.26-1.414h1.974Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h33v33H0z" />
        </clipPath>
      </defs>
      ;
    </Icon>
  );
}
