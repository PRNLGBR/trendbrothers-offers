import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Mail,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Marca */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">
                TrendBrothers
              </span>
            </Link>
            <p className="text-sm mb-4">
              Recomendações de produtos da Amazon selecionadas com critério e foco em custo-benefício.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-500">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-orange-500">Produtos</Link></li>
              <li><Link to="/categorias" className="hover:text-orange-500">Categorias</Link></li>
              <li><Link to="/ofertas" className="hover:text-orange-500">Ofertas</Link></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Categorias
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/produtos?category=eletronicos" className="hover:text-orange-500">Eletrônicos</Link></li>
              <li><Link to="/produtos?category=moda" className="hover:text-orange-500">Moda</Link></li>
              <li><Link to="/produtos?category=casa-cozinha" className="hover:text-orange-500">Casa e Cozinha</Link></li>
              <li><Link to="/produtos?category=esportes" className="hover:text-orange-500">Esportes</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Receba ofertas e recomendações diretamente no seu e-mail.
            </p>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded flex items-center"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>
            © 2025 TrendBrothers. Este site participa do Programa de Associados da Amazon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
