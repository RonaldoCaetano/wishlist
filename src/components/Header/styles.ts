import styled from "styled-components";

import { Container } from "../../styles/components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5a2d82;
  padding: 1.25rem 0;

  @media (min-width: 40rem) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${Container}
`;

export const ContainerTitle = styled.h1`
  font-size: 2rem;
  color: #fff;
`;

export const SectionLeft = styled.section`
  display: flex;
  width: 30%;
`;

export const SectionRight = styled.section`
  flex-direction: column;
  width: 70%;
`;

export const Services = styled.div`
  display: flex;
`;

export const ServicesContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 0.675rem;
  min-width: 100%;
`;

export const ServicesTitle = styled.p`
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  svg {
    margin-right: 0.625rem;
  }
`;

export const SearchBarContainer = styled.div`
  padding: 0 0.675rem;
  margin-top: 0.625rem;

  input {
    width: 100%;
    height: 3.75rem;
    border: none;
    border-radius: 0.375rem;
    padding: 0 0.625rem;
  }
`;
