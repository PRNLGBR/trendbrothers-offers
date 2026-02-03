import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Produtos em Destaque</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <p className="mb-4 text-sm text-gray-500">
  Total de produtos: {products?.length}
</p>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded"
            onClick={() => navigate("/ofertas")}
          >
            Ver Ofertas
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
