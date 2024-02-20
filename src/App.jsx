import "./App.css";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Header />
      <Pagination />
      <ProductList />
      <Pagination />
    </>
  );
}

export default App;
