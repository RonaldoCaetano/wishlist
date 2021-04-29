import React, { useMemo } from "react";
import Breadcrumb from "components/Breadcrumb";

import ProductList from "../../components/ProductList";
import * as S from "./styles";

const Wishlist = (): React.ReactElement => {
  const localWishlist = useMemo(() => JSON.parse(localStorage.getItem("wishlist")), []);

  if (!localWishlist?.length) {
    return (
      <S.WishlistContainer>
        <Breadcrumb />
        <S.EmptyWishlist>
          <p>Nenhum produto encontrado na sua Lista de desejos</p>
        </S.EmptyWishlist>
      </S.WishlistContainer>
    );
  }

  return (
    <S.WishlistContainer>
      <Breadcrumb />
      <ProductList products={localWishlist} />
    </S.WishlistContainer>
  );
};

export default Wishlist;
