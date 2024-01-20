import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import usePostOrder from "../hooks/usePostOrder";

function Footer() {
  // 현재 리덕스가 바라보고 있는 state 호출 및 items에 할당
  let items = useSelector((state) => state.counter);

  // 총 수량 초기화
  let sumQuantity = 0;
  // 총 가격 초기화
  let sumPrice = 0;

  // 가격 * 수량으로 총 가격 및 총 수량 계산
  for (const ele of items) {
    sumQuantity += ele.quantity;
    sumPrice += ele.quantity * ele.price;
  }

  const { postOrder, loading } = usePostOrder(items);

  return (
    <>
      <FooterComponent>
        <FooterInfo>
          <Quantity>총 수량 : {sumQuantity}개</Quantity>
          <Price>총 가격 : {sumPrice.toLocaleString()}원</Price>
        </FooterInfo>
        <OrderButton $loading={loading} onClick={postOrder}>
          {loading ? "로딩중..." : "주문하기"}
        </OrderButton>
      </FooterComponent>
    </>
  );
}

const FooterComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0px;
  height: 170px;
  width: 90%;
  border: none;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25);
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 30px;
  width: 100%;
`;

const Quantity = styled.p``;

const Price = styled.p``;

const OrderButton = styled.button`
  height: 47.92px;
  width: 90%;
  background-color: ${(props) => (props.$loading ? "grey" : "black")};
  color: white;
  cursor: pointer;
  font-weight: bolder;
`;

export default Footer;
