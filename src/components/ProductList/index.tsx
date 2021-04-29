import React, { useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";

import ProductCard from "../ProductCard";

import * as S from "./styles";

type ProductListProps = {
  products?: Product[];
};

const ProductList = ({ products }: ProductListProps): React.ReactElement => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

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
            setLoading(false);
          }
        });
    } else {
      setLoading(false);
    }
  }, [products]);

  return (
    <>
      {loading ? (
        <S.ProductsContainer>
          <ContentLoader
            width="100%"
            height={600}
            speed={3}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="2" ry="2" width="100%" height="100%" />
          </ContentLoader>
        </S.ProductsContainer>
      ) : (
        <S.ProductsContainer data-testid="products-list">
          {productsToShow.map((product, index) => (
            <ProductCard
              key={index}
              getProductOnWishlist={getProductOnWishlist}
              productData={product}
            />
          ))}
        </S.ProductsContainer>
      )}
    </>
  );
};

export default ProductList;
