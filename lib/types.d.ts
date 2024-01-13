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
  imageId: string | null;
}[];

export type ProductCart = {
  id: string;
}[];
