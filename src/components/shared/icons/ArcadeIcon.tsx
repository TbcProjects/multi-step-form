import { Icon } from "@chakra-ui/react";
import { CustomIconProps } from "../../../types";

export default function ArcadeIcon(props: CustomIconProps) {
  return (
    <Icon {...props}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.953 12.4916C23.2 13.9311 22.374 15.3391 20.9971 15.826V18.0051H18.9979V15.826C17.6209 15.3391 16.795 13.9311 17.0419 12.4916C17.2889 11.0522 18.537 10 19.9975 10C21.458 10 22.7061 11.0522 22.953 12.4916ZM18.9979 18.0051V24.0025H20.9971V18.0051H24.9954C25.5474 18.0051 25.9949 18.4526 25.9949 19.0046V29.0004C25.9949 29.5525 25.5474 30 24.9954 30H14.9996C14.4475 30 14 29.5525 14 29.0004V19.0046C14 18.4526 14.4475 18.0051 14.9996 18.0051H18.9979ZM18.9979 27.0013H16.9987V25.0021H18.9979V27.0013Z"
          fill="white"
        />
      </svg>
      ;
    </Icon>
  );
}
