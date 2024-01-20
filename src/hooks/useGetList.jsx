import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getList from "../api/getList";

const useGetList = () => {
  // useDispatch Hook 호출
  const dispatch = useDispatch();
  // 전체 list호출하여 items에 할당
  const items = useSelector((state) => state.counter);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const resultOfGetList = await getList();
        // 각 item객체에 quantity : 0인 key, value 추가
        const copiedList = resultOfGetList.data.map((item) => ({
          ...item,
          quantity: 0,
        }));
        dispatch({ type: "INITIAL_SETTING", payload: copiedList });
      } catch (error) {
        console.log("오류가 발생했습니다. : " + error);
      }
    };
    setTimeout(() => fetchList(), 1500);
  }, []);
  return items;
};

export default useGetList;
