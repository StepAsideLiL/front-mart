export default function Page({ params }: { params: { productId: string } }) {
  return <>{params.productId}</>;
}
