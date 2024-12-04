import { RxHamburgerMenu } from "react-icons/rx";

interface IconProps {
  iconSize: number;
}

export const HamburgerMenuIcon = ({ iconSize }: IconProps) => (
  <RxHamburgerMenu size={iconSize} />
);
