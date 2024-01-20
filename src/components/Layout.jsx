import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Layout({ pageName, children }) {
  // useNavigate Hook 호출
  const navigate = useNavigate();

  // 주문 완료 후 실행될 함수(3초 후, order페이지로 자동 이동)
  const navigateAfterOrder = () => {
    // 현재 페이지가 주문 완료 페이지이면
    if (pageName === "complete" || pageName === "error") {
      setTimeout(() => {
        navigate("/order");
      }, 3000);
    }
  };
  navigateAfterOrder();
  return <LayoutContainer $pageName={pageName}>{children}</LayoutContainer>;
}

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) =>
    props.$pageName === "main"
      ? "black"
      : "white"}; /*현재 페이지가 main일 경우만 배경색 검은색으로*/
  border: 1px solid;
  max-width: 350px;
  height: 100vh;
`;

export default Layout;
