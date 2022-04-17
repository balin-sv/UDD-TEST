import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Search";
import Catalog from "./Catalog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
