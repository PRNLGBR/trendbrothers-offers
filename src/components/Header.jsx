import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">TrendBrothers</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">
          Home
        </Link>
        <Link to="/ofertas" className="hover:underline">
          Ofertas
        </Link>
      </nav>
    </header>
  );
};

export default Header;
