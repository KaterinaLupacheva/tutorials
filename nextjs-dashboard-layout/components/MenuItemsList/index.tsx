import { MenuItem as MenuItemType } from "../../constants/menu-items";
import MenuItem from "../MenuItem";

type MenuItemsListProps = {
  options: MenuItemType[];
};

export default function MenuItemsList({ options }: MenuItemsListProps) {
  return (
    <>
      {options.map((option) => (
        <MenuItem menuItem={option} key={option.id} />
      ))}
    </>
  );
}
