import { SidebarContainer } from "./styles";

type SidebarProps = {
  isOpened: boolean;
};

export default function Sidebar({ isOpened }: SidebarProps) {
  return <SidebarContainer isOpened={isOpened}>Menu</SidebarContainer>;
}
