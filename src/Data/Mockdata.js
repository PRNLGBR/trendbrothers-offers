export const categories = [
  { id: 1, name: 'Eletrônicos', slug: 'eletronicos', icon: 'Laptop' },
  { id: 2, name: 'Moda', slug: 'moda', icon: 'Shirt' },
  { id: 3, name: 'Casa e Cozinha', slug: 'casa-cozinha', icon: 'Home' },
  { id: 4, name: 'Esportes', slug: 'esportes', icon: 'Dumbbell' },
  { id: 5, name: 'Livros', slug: 'livros', icon: 'Book' },
  { id: 6, name: 'Beleza', slug: 'beleza', icon: 'Sparkles' },
  { id: 7, name: 'Brinquedos', slug: 'brinquedos', icon: 'Gamepad2' },
  { id: 8, name: 'Pet Shop', slug: 'pet', icon: 'Heart' }
];

export const products = [
  {
    id: 1,
    name: 'Fone de Ouvido Bluetooth Premium',
    category: 'eletronicos',
    price: 299.9,
    originalPrice: 499.9,
    rating: 4.5,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    description: 'Fone sem fio com cancelamento de ruído ativo.',
    features: ['Cancelamento de ruído', 'Bateria 30h', 'Bluetooth 5.0'],
    amazonUrl: 'https://amazon.com.br',
    badge: 'Mais Vendido'
  }
];

export const featuredProducts = products.filter(p => p.badge);
export const bestSellers = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 6);
export const dealsOfTheDay = products.filter(p => p.originalPrice - p.price > 100);
