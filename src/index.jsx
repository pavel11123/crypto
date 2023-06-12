import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import HomePage from "./pages/HomePage/HomePage";
import ShowPage from "./pages/ShowPage/ShowPage";
import { Header } from "./components/Header/Header";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    {/* <BrowserRouter>  */}
    <Header />
    <main className="main d-fl-col">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<ShowPage />} />
      </Routes>
    </main>
    {/* </BrowserRouter> */}
  </HashRouter>
);
