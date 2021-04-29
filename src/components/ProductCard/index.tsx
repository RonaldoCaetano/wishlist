import React, { useCallback, useState, useEffect } from "react";

import { Heart } from "@styled-icons/evaicons-solid";

import * as S from "./styles";

type ProductCardProps = {
  productData: Product;
  getProductOnWishlist: (param: Product) => Product;
};

const ProductCard = (props: ProductCardProps): React.ReactElement => {
  const { productData, getProductOnWishlist } = props;
  const [productOnWishlist, setProductOnWishlist] = useState(false);

  const handleProductOnWishlist = useCallback(() => {
    const localWishlist: Product[] = JSON.parse(localStorage.getItem("wishlist"));
    const hasProductOnWishlist = getProductOnWishlist(productData);

    if (hasProductOnWishlist && localWishlist) {
      const removeProductFromWishlist = localWishlist.filter(
        (wishlist) => wishlist.sku !== productData.sku
      );
      localStorage.setItem("wishlist", JSON.stringify(removeProductFromWishlist));
      setProductOnWishlist(false);
    } else {
      localStorage.setItem(
        "wishlist",
        JSON.stringify(localWishlist ? [...localWishlist, productData] : [productData])
      );
      setProductOnWishlist(true);
    }
  }, [getProductOnWishlist, productData]);

  useEffect(() => {
    const hasProductOnWishlist = getProductOnWishlist(productData);
    hasProductOnWishlist && setProductOnWishlist(true);
  }, [getProductOnWishlist, productData, productData.sku]);

  return (
    <S.ProductCardContainer data-testId="product-card-container">
      <S.ProductCardContent>
        <S.WishlistButtonContainer>
          <S.WishlistButton onClick={handleProductOnWishlist}>
            {productOnWishlist ? <Heart size={20} color="red" /> : <Heart size={20} color="#fff" />}
          </S.WishlistButton>
        </S.WishlistButtonContainer>
        <S.ProductCardContentInfo>
          <img
            src={productData.image}
            alt={productData.title}
            width={150}
            height={150}
            data-testId="product-card-image"
          />
          <S.Name data-testId="product-card-name">{productData.title}</S.Name>
          <S.Price data-testId="product-card-price">{productData.price}</S.Price>
        </S.ProductCardContentInfo>
      </S.ProductCardContent>
    </S.ProductCardContainer>
  );
};

export default ProductCard;
