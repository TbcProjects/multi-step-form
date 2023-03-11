import { Icon } from "@chakra-ui/react";
import { CustomIconProps } from "../../../types";

interface ProgressOneProps extends CustomIconProps {
  selected?: boolean;
}

export default function ProgressOne({ selected, ...props }: ProgressOneProps) {
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
          d="M14.502 14.314c.27-.112.55-.238.84-.378.298-.15.588-.308.867-.476.28-.177.547-.36.799-.546.26-.196.494-.401.7-.616h1.456V22h-2.087v-6.986c-.28.187-.592.36-.938.518-.345.15-.68.28-1.007.392l-.63-1.61Z"
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
