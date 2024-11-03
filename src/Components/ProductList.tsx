import ProductTab from "./ProductTab";
import "../Styles/SummerCollectionFrontPage.css";
import sizeFilterContext, { useFilterContext } from "./FilterContext";

import { useState } from "react";
interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  type: string;
  sizes: string[];
  color?: string;
  material?: string;
}

interface Props {
  products: Product[];
  productType: string;
}

function ProductList({ products, productType }: Props) {
  const { filters } = useFilterContext();

  const filterFunction = (product: Product) => {
    if (filters.isFilterOn === "false") return product.type == productType;
    else
      return (
        (product.material ?? "") == filters.materialFilter &&
        product.type == productType &&
        product.sizes.includes(filters.sizeFilter ?? " ") &&
        (product.color ?? "") == filters.colorFilter &&
        Number(product.price) < filters.priceRange
      );
  };
  return (
    <div className="product-grid-container ">
      {products
        .filter((x) => filterFunction(x))
        .map((product) => (
          <ProductTab
            id={product.id}
            image={product.image}
            productName={product.name}
            price={product.price}
            sizes={product.sizes}
          />
        ))}
    </div>
  );
}

export default ProductList;
