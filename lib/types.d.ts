export type Cd = {
  children?: React.ReactNode;
};

export type Cn = {
  className?: string;
};

export type CdCn = {
  children?: React.ReactNode;
  className?: string;
};

export type AddNewFormData = {
  productTitle: string;
  price: number;
  imageSrc: string;
  imageId: string;
  discount?: number;
  quickOverview?: string;
  description?: string;
};

export type AddProductFormData = {
  productTitle: string;
  price: number;
  imageSrc: string;
  discount?: number;
  quickOverview?: string;
  description?: string;
  date?: number;
  month?: number;
  year?: number;
};

export type UpdateProductFormData = {
  id: string;
  productTitle: string;
  price: number;
  imageSrc: string;
  imageId: string;
  discount?: number;
  quickOverview?: string;
  description?: string;
  isFeatured?: boolean;
};

export type CloundinayImage = {
  event?: string | undefined;
  info: {
    secure_url: string;
    public_id: string;
  };
};

export type CartData = {
  id: string;
  title: string;
  price: number;
  discount: number | null;
  imageSrc: string | null;
}[];

export type ProductCart = {
  id: string;
}[];

export type PlaceOrder = {
  name: string;
  email: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  price: number;
  date: number;
  month: number;
  year: number;
  products: {
    id: string;
  }[];
};

export type UpdateOrderStatusFormData = {
  orderId: string;
  orderStatus: string;
};
