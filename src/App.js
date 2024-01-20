import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Order from "./pages/Order.jsx";
import Complete from "./pages/Complete.jsx";
import Error from "./pages/Error.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/complete' element={<Complete />}></Route>
        <Route path='/error' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
