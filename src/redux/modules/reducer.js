// 초기 상태값
let initialState = [];

// 리듀서
const counter = (state = initialState, action) => {
  // 현재 state spread 복사
  let copiedState = [...state];
  // 버튼이 눌러진 item의 index 추출
  let targetIdx = copiedState.findIndex(
    (item) => item.id === action.payload.id
  );
  switch (action.type) {
    case "INITIAL_SETTING":
      copiedState = [...action.payload];
      return copiedState;
    case "MINUS_QUANTITY":
      copiedState[targetIdx].quantity -= 1;
      return copiedState;
    case "PLUS_QUANTITY":
      copiedState[targetIdx].quantity += 1;
      return copiedState;
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
