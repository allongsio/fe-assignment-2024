import React from "react";
import styled from "styled-components";
import logo from "../img/logo-black.png";
import { useNavigate } from "react-router-dom";

function Header() {
  // useNavigate Hook 호출
  const navigate = useNavigate();

  return (
    <div>
      <HeaderComponent>
        <LogoImg onClick={() => navigate("/order")} src={logo}></LogoImg>
      </HeaderComponent>
    </div>
  );
}

const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  height: 57px;
  width: 350px;
  background-color: black;
`;

const LogoImg = styled.img`
  height: 32px;
  cursor: pointer;
`;

export default Header;
