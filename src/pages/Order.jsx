import React from "react";
import styled from "styled-components";
import useGetList from "../hooks/useGetList";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Item from "../components/Item";

function Order() {
  // 현재 페이지
  let pageName = "order";

  // useGetList 커스텀 훅으로 items에 list 할당
  const items = useGetList();

  // 리스트를 아직 불러오는 중이거나, 불러오는데 실패했을 경우를 변수화
  const isEmpty = items.length === 0;

  return (
    <Layout $pageName={pageName}>
      <Header />
      <DataList $isEmpty={isEmpty}>
        {isEmpty ? (
          <p>목록을 불러오고 있습니다.</p>
        ) : (
          items.map((item, idx) => (
            <Item key={item.id} idx={idx} item={item}></Item>
          ))
        )}
      </DataList>
      <Footer />
    </Layout>
  );
}

const DataList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll; /* 세로 스크롤만 적용 */
  scrollbar-width: thin; /* 스크롤바의 너비를 조정 (크롬에서만 작동) */
  scrollbar-color: transparent transparent; /* 스크롤바의 색상을 조정 */
  height: 100%; /* 스크롤 가능한 최대 높이 지정 */
  /* Webkit 브라우저 (예: Chrome, Safari)에서 사용되는 스크롤바 커스터마이징 */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* 스크롤바의 색상 조정 */
  }
  ${(props) =>
    props.$isEmpty &&
    "justify-content : center; font-size : 25px;"}; /*리스트 로딩 중일 때 적용될 스타일*/
`;

export default Order;
