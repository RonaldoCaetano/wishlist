import React from "react";
import { Link } from "react-router-dom";
import { Pin, Phone, Heart, Search } from "@styled-icons/evaicons-solid";

import * as S from "./styles";

const Header = (): React.ReactElement => (
  <S.HeaderContainer>
    <S.HeaderContent>
      <S.SectionLeft>
        <S.ContainerTitle>MegaNets</S.ContainerTitle>
      </S.SectionLeft>
      <S.SectionRight>
        <S.Services>
          <S.ServicesContent>
            <S.ServicesTitle>
              <Pin size={20} />
              Cidade: São Paulo
            </S.ServicesTitle>
            <S.ServicesTitle>
              <Phone size={20} />
              Central de atendimento
            </S.ServicesTitle>
            <S.ServicesTitle>
              <Heart size={20} />
              <Link to="/wishlist">Lista de desejos</Link>
            </S.ServicesTitle>
          </S.ServicesContent>
        </S.Services>
        <S.SearchBarContainer>
          <span>
            <Search size={20} />
          </span>
          <input type="text" name="search-input" id="search-input" placeholder="Buscar" />
        </S.SearchBarContainer>
      </S.SectionRight>
    </S.HeaderContent>
  </S.HeaderContainer>
);

export default Header;
