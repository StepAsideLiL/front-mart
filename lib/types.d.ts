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
  discount?: number;
  quickOverview?: string;
  description?: string;
};
