import { getProducts } from "@/lib/data";

const AllProducts = async () => {
  const products = await getProducts();

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default AllProducts;
