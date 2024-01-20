import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postOrderApi from "../api/postOrderApi.jsx";

function usePostOrder(items) {
  // loading state 관리
  const [loading, setLoading] = useState(false);
  // useNavigate Hook 호출
  const navigate = useNavigate();

  // items 중에 수량 check된 items들만 filtering
  const orderedItems = items.filter((item) => item.quantity !== 0);
  // 주문서에 필요한 데이터들만 남기기
  const orderedItemsInfo = orderedItems.map(
    ({ id, quantity, price, event }) => ({
      id,
      quantity,
      price,
      event,
    })
  );

  // 주문한 일자와 주문한 제품 리스트로 주문서 만들기
  const orderData = {
    date: new Date(),
    orderedList: orderedItemsInfo,
  };

  const postOrder = async () => {
    // 로딩중인 상태로 변환
    setLoading(true);
    // 주문서 post요청 후 결과 객체
    let orderResult = await postOrderApi(orderData);
    // 주문서 post요청 성공 여부(orderResult가 있다면)
    let isOrderSuccess = orderResult?.request.status === 201;

    if (isOrderSuccess) {
      // 1.5초 후 '주문완료' 페이지로 라우팅
      setTimeout(() => navigate("/complete"), 1500);
    } else {
      // 1.5초 후 '주문실패' 페이지로 라우팅
      setTimeout(() => navigate("/error", 1500));
    }
  };
  return { postOrder, loading };
}

export default usePostOrder;
