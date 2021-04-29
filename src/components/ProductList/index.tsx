import React, { useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";

import ProductCard from "../ProductCard";
import * as S from "./styles";

type ProductListProps = {
  products?: Product[];
};

const ProductList = ({ products }: ProductListProps): React.ReactElement => {
  const [productsData, setProductsData] = useState([]);

  const getProductOnWishlist = useCallback((productData: Product) => {
    const localWishlist: Product[] = JSON.parse(localStorage.getItem("wishlist"));
    if (!localWishlist) {
      return {} as Product;
    }
    const productInsertedOnWishlist = localWishlist.find(
      (wishlist) => wishlist.sku === productData.sku
    );

    return productInsertedOnWishlist;
  }, []);

  const productsToShow = useMemo(() => products ?? productsData, [products, productsData]);

  useEffect(() => {
    if (!products?.length) {
      axios
        .get<ProductsResponse>("https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e")
        .then(({ data }) => {
          if (data?.products?.length) {
            setProductsData(data.products);
          }
        });
    }
  }, [products]);

  return (
    <S.ProductsContainer data-testid="products-list">
      {productsToShow.map((product, index) => (
        <ProductCard
          key={index}
          getProductOnWishlist={getProductOnWishlist}
          productData={product}
        />
      ))}
    </S.ProductsContainer>
  );
};

export default ProductList;
