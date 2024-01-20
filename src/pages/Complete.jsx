import React from "react";
import Layout from "../components/Layout";
import checkIcon from "../img/CheckFilled.png";
import useNavigateAfterOrder from "../hooks/useNavigateAfterOrder";

function Complete() {
  // 현재 페이지 위치
  let pageName = "complete";
  // 주문 성공시 3초 후, order페이지로 라우팅하는 함수
  useNavigateAfterOrder(pageName);
  return (
    <Layout pageName={pageName}>
      <div>주문이 완료되었습니다.</div>
      <img alt='체크 이미지' src={checkIcon} />
    </Layout>
  );
}

export default Complete;
