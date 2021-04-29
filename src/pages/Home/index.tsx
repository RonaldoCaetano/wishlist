import React from "react";

import Breadcrumb from "components/Breadcrumb";
import ProductList from "components/ProductList";
import * as S from "./styles";

const Home = (): React.ReactElement => {
  return (
    <S.HomeContainer>
      <Breadcrumb />
      <ProductList />
    </S.HomeContainer>
  );
};

export default Home;
