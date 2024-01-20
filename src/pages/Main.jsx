import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo-black.png";
import Layout from "../components/Layout";

function Main() {
  // 현재 페이지 위치
  let pageName = "main";

  // useNavigaet Hook 호출
  const navigate = useNavigate();

  // '주문하러 가기' 버튼 핸들러 함수(클릭 시 order페이지로 페이지 이동)
  const enterOrder = () => {
    navigate("/order");
  };

  return (
    <div>
      <Layout pageName={pageName}>
        <LogoImg src={logo}></LogoImg>
        <OrderButton onClick={enterOrder}>주문하러 가기</OrderButton>
      </Layout>
    </div>
  );
}

const LogoImg = styled.img``;

const OrderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  height: 88px;
  width: 172px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  font-size: 25px;
  font-weight: 400;
`;

export default Main;
