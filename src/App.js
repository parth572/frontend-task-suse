import "./styles.css";
import ProductsPage from "./components/ProductsPage";
import Summary from "./components/Summary";

export default function App() {
  return (
    <div className="App">
      <Summary />
      <ProductsPage />
    </div>
  );
}
