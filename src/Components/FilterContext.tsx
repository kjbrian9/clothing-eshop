import { createContext, useContext } from "react";
import { CartItemProps, FilterProps } from "../App";

const filterContext = createContext({
  filters: {
    colorFilter: "",
    sizeFilter: "",
    priceRange: 0,
    isFilterOn: "",
  },

  setFilters: (value: FilterProps) => {},
});

export default filterContext;

export function useFilterContext() {
  const filterProps = useContext(filterContext);
  console.log(filterProps);
  if (filterProps === undefined) throw new Error("error");
  else return filterProps;
}
