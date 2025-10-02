import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
