import Title from "@/components/uis/title";

const ProductDetails = ({ id }: { id: string }) => {
  return (
    <div>
      <Title>Product {id}</Title>
    </div>
  );
};

export default ProductDetails;
