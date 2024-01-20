import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function Item({ idx, item }) {
  // useDispatch Hook 호출
  const dispatch = useDispatch();

  // 개별 아이템 정보 할당
  const itemId = item.id;
  const itemName = item.name;
  const itemQuantity = item.quantity;
  const itemPrice = item.price;

  // 마이너스, 플러스 버튼에 대한 핸들러 함수
  const changeQuantity = (e) => {
    // 클릭 된 버튼의 type이 'minus' type 버튼일 때
    if (e.target.dataset.type === "minus" && itemQuantity > 0) {
      dispatch({
        type: "MINUS_QUANTITY",
        payload: {
          id: itemId,
        },
      });
      // 클릭 된 버튼의 type이 'plus' type 버튼일 때
    } else if (e.target.dataset.type === "plus" && itemQuantity < 999) {
      dispatch({
        type: "PLUS_QUANTITY",
        payload: {
          id: itemId,
        },
      });
    }
  };

  return (
    <ItemContainer quantity={itemQuantity}>
      <ImageContainer />
      <InfoContainer>
        <NameEventContainer>
          <Name>{itemName}</Name>
          <EventContainer>
            {item.event === 1 && <EventIcon>이벤트</EventIcon>}
          </EventContainer>
        </NameEventContainer>
        <QuantityPriceContainer>
          <QuantityContainer>
            <button data-type="minus" id={idx} onClick={changeQuantity}>
              -
            </button>
            <Quantity>{itemQuantity}</Quantity>
            <button data-type="plus" id={idx} onClick={changeQuantity}>
              +
            </button>
          </QuantityContainer>
          <PriceContainer>{itemPrice.toLocaleString()}원</PriceContainer>
        </QuantityPriceContainer>
      </InfoContainer>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 301px;
  border: 1px solid;
  margin: 10px 0 10px 0;
  border-radius: 10px;
  background-color: ${(props) =>
    props.quantity !== 0 &&
    "rgba(247, 90, 47, 0.1)"}; /* 수량이 1개라도 추가 된 아이템은 배경색 연주황색으로 */
`;

const ImageContainer = styled.div`
  margin-left: 10px;
  height: 62px;
  width: 62px;
  background-color: rgba(217, 217, 217, 1);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  height: 80px;
  width: 210px;
`;

const NameEventContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

const Name = styled.p``;

const EventContainer = styled.div`
  width: 65px;
`;

const QuantityPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 25px;
  }
`;

const Quantity = styled.p``;

const EventIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  height: 23px;
  width: 53px;
  background-color: #f75a2f;
  border-radius: 10px;
  color: white;
`;

const PriceContainer = styled.div``;

export default Item;
