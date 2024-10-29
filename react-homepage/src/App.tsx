import { useEffect, useState } from "react";
import DisplayProducts from "./components/DisplayProducts";
import Header from "./components/Header";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const categories: string[] = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products by category
  const getProductsByCategory = (category: string): Product[] => {
    return products.filter((product) => product.category === category);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {categories.map((category, index) => (
          <DisplayProducts
            key={index}
            items={getProductsByCategory(category)}
            heading={category.charAt(0).toUpperCase() + category.slice(1)}
          />
        ))}
      </main>
    </>
  );
}

export default App;
