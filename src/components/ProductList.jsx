import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    id: 1,
    title: "React T-shirt",
    price: 59,
    description: "Футболка для фронтендерів",
   },
  {
    id: 2,
    title: "JS Mug",
    price: 39,
    description: "Чашка JavaScript",
    
  },
  {
    id: 3,
    title: "Frontend Stickers",
    price: 19,
    description: "Наліпки для ноутбука",
  },
];

export default function ProductList() {
  return (
    <div className="row g-4">
      {PRODUCTS.map((product) => (
        <div className="col-md-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}