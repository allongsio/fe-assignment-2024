import React from "react";
import Layout from "../components/Layout";
import useNavigateAfterOrder from "../hooks/useNavigateAfterOrder";

function Error() {
  // 현재 페이지 위치(error페이지)
  const pageName = "error";
  // 주문 실패시 3초 후, order페이지로 라우팅하는 함수
  useNavigateAfterOrder(pageName);
  return (
    <Layout pageName={pageName}>
      <div>주문에 실패하였습니다. 다시 시도해주세요.</div>
    </Layout>
  );
}

export default Error;
