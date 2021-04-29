import React from "react";
import { Pin, Phone, Heart } from "@styled-icons/evaicons-solid";

import * as S from "./styles";

const Header = (): React.ReactElement => (
  <S.HeaderContainer>
    <S.HeaderContent>
      <S.Section>
        <S.ContainerTitle>MegaNets</S.ContainerTitle>
      </S.Section>
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
              Lista de desejos
            </S.ServicesTitle>
          </S.ServicesContent>
        </S.Services>
        <S.SearchBarContainer>
          <input type="text" name="search-input" id="search-input" />
        </S.SearchBarContainer>
      </S.SectionRight>
    </S.HeaderContent>
  </S.HeaderContainer>
);

export default Header;
