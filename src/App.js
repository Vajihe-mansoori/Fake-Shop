import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route>404 Not Found :(</Route>
      </Routes>
    </div>
  );
}

export default App;
