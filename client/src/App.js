import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Catalog from "./components/Catalog";

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
