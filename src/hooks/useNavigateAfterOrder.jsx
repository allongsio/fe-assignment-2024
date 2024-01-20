import { useNavigate } from "react-router-dom";

function useNavigateAfterOrder(pageName) {
  const navigate = useNavigate();
  if (pageName === "complete" || pageName === "error") {
    setTimeout(navigate("/order"), 3000);
  }
  return;
}

export default useNavigateAfterOrder;
