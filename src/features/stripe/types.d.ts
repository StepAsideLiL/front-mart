export type SingleVariantSchemaType = {
  id: string;
  title: string;
  slug: string;
  type: "normal" | "color";
};

export type VariantSchemaType = SingleVariantSchemaType[];
