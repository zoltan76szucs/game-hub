import { Button } from "@chakra-ui/react/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react/menu";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", name: "Relevants" },
    { value: "-added", name: "Data added" },
    { value: "name", name: "Name" },
    { value: "-released", name: "Release date" },
    { value: "-metacritic", name: "Popularity" },
    { value: "-rating", name: "Average rating1" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        Order by : {currentSortOrder?.name || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
