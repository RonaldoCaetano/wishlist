import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Breadcrumb = (): React.ReactElement => {
  const { pathname } = window.location;

  const pathnameAsArray = pathname.split("/").filter((path) => path !== "");

  return (
    <S.List data-testid="breadcrumb-list">
      <Link to="/">
        <S.ListItem>Home</S.ListItem>
      </Link>
      {pathnameAsArray.map((path, index) => (
        <Link key={index} to={`/${path}`}>
          <S.ListItem>
            <S.ListItemSeparator>{">"}</S.ListItemSeparator>
            {path}
          </S.ListItem>
        </Link>
      ))}
    </S.List>
  );
};

export default Breadcrumb;
