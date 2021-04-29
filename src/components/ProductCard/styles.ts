import styled, { css } from "styled-components";

const flexCenterStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductCardContainer = styled.li`
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;
  list-style: none;
  border: 0.0625rem solid #ccc;
  border-radius: 0.8rem;

  @media (min-width: 40rem) {
    width: 20%;
    margin: 0 2rem 3rem 0;

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`;

export const ProductCardContent = styled.article`
  ${flexCenterStyle}
`;

export const ProductCardContentInfo = styled.div`
  ${flexCenterStyle}
`;

export const Name = styled.strong`
  font-size: 1.3rem;
  margin: 1.25rem 0;
`;

export const Price = styled.strong`
  font-size: 2rem;
  color: #e7ce32;
`;

export const WishlistButtonContainer = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
`;

export const WishlistButton = styled.button`
  background: #000;
  border: none;
  position: absolute;
  left: 0.5rem;
  top: -13px;
  cursor: pointer;

  width: 40px;
  height: 33px;

  &::after {
    content: "";
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 15px solid #000;
    position: absolute;
    bottom: -15px;
    left: 0;

    transform: rotate(180deg);
  }
`;
