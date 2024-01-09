import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import CloudinaryImage from "@/components/uis/cloudinary-image";
import { getProducts } from "@/lib/data";

const AllProduct = async () => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((product) => (
        <Card key={product.id}>
          <CloudinaryImage
            width="600"
            height="600"
            src={product.imageId || ""}
            sizes="100vw"
            alt={`Photo of ${product.title}`}
          />

          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default AllProduct;
