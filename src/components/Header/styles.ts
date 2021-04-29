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
  margin: 20px 0;
`;

export const Section = styled.section`
  display: flex;
`;

export const SectionRight = styled.section`
  flex-direction: column;
`;

export const Services = styled.div`
  display: flex;
`;

export const ServicesContent = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 0.675rem;
  min-width: 100%;
`;

export const ServicesTitle = styled.p`
  font-size: 1rem;
  line-height: normal;
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
