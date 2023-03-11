import { Icon } from "@chakra-ui/react";
import { CustomIconProps } from "../../../types";

interface ProgressTwoProps extends CustomIconProps {
  selected?: boolean;
}

export default function ProgressTwo({ selected, ...props }: ProgressTwoProps) {
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
          d="M20.465 14.846c0 .355-.07.695-.21 1.022a4.9 4.9 0 0 1-.546.952 8.11 8.11 0 0 1-.756.868c-.28.28-.555.546-.825.798-.14.13-.294.28-.462.448-.16.159-.313.322-.463.49-.149.168-.284.327-.405.476a1.14 1.14 0 0 0-.21.35h4.171V22h-6.468a2.253 2.253 0 0 1-.027-.392v-.336c0-.448.07-.859.21-1.232.149-.373.34-.719.573-1.036a6.61 6.61 0 0 1 .784-.91c.3-.28.593-.56.883-.84l.63-.602c.195-.196.368-.383.517-.56.15-.187.267-.369.35-.546.085-.187.127-.373.127-.56 0-.41-.117-.7-.35-.868-.234-.168-.523-.252-.869-.252-.252 0-.49.042-.713.126a3.228 3.228 0 0 0-.602.28c-.178.103-.332.21-.463.322-.13.103-.228.187-.293.252L14.01 13.39a5.19 5.19 0 0 1 1.429-.938 4.189 4.189 0 0 1 1.763-.378c.57 0 1.06.065 1.47.196.411.13.747.317 1.009.56a2 2 0 0 1 .588.868c.13.336.195.719.195 1.148Z"
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
