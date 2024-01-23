import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import AddPage from "./Pages/AddPage";
import Detail from "./Pages/Detail";
import Wishlist from "./Pages/Wishlist";
import HomePage from "./Pages/Home";
import { HelmetProvider } from "react-helmet-async";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function  App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/addpage/" element={<AddPage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/wishlist/" element={<Wishlist />} />
            <Route path="/menu/" element={<Menu/>} />
            <Route path="/about/" element={<About/>} />
            <Route path="/contact/" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
