"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDebounce } from "react-use";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { Trash } from "lucide-react";
import { generateProductVariantId } from "@/lib/nanoid";
import { updateProductVariantSchema } from "../actions";
import { useStripeStore } from "../store";

type SingleVariantSchemaType = {
  id: string;
  title: string;
  type: string;
};

type VariantSchemaType = SingleVariantSchemaType[];

const formSchema = z.object({
  variantTitle: z.string().trim().min(1, {
    message: "Product Title can be empty.",
  }),
  variantType: z.string(),
});

export function ProductVariantSchema({
  productId,
  variantSchema,
}: {
  productId: string;
  variantSchema: VariantSchemaType;
}) {
  const [variants, setVariants] = useState<VariantSchemaType>(variantSchema);
  const [processingStarted, processingStoped] = useStripeStore((s) => [
    s.startPerformingUpdateProductVariantSchemaAction,
    s.stopPerformingUpdateProductVariantSchemaAction,
  ]);

  function handleAddVariant() {
    processingStarted();
    const newVriant = {
      id: generateProductVariantId(),
      title: "",
      type: "",
    };

    setVariants([...variants, newVriant]);
  }

  function handleDeleteVariant(id: string) {
    processingStarted();
    setVariants(variants.filter((variant) => variant.id !== id));
  }

  useDebounce(
    async () => {
      const res = await updateProductVariantSchema(
        productId,
        JSON.stringify(variants)
      );

      if (res.success) {
        processingStoped();
      } else {
        processingStoped();
      }
    },
    3000,
    [variants]
  );

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-xl font-medium">Product Varient Schema</h1>
        <p className="text-muted-foreground text-sm">
          Vraiant schema title will be desplayed in the product shop page.
        </p>
      </div>

      {variants.length !== 0 ? (
        variants.map((variant) => (
          <div key={variant.id} className="flex items-end gap-5">
            <ProductVariantSchemaForm
              id={variant.id}
              title={variant.title}
              type={variant.type}
              variants={variants}
              setVariants={setVariants}
            />
            <Button
              variant={"destructive"}
              size={"icon"}
              onClick={() => handleDeleteVariant(variant.id)}
            >
              <Trash />
              <span className="sr-only">Delete Variant</span>
            </Button>
          </div>
        ))
      ) : (
        <Button onClick={() => handleAddVariant()}>Add Variant</Button>
      )}

      {variants.length > 0 && (
        <Button onClick={() => handleAddVariant()}>Add New</Button>
      )}
    </section>
  );
}

function ProductVariantSchemaForm({
  id,
  title,
  type,
  variants,
  setVariants,
}: SingleVariantSchemaType & {
  variants: VariantSchemaType;
  setVariants: Dispatch<SetStateAction<VariantSchemaType>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variantTitle: title,
      variantType: type,
    },
  });
  const [processingStarted] = useStripeStore((s) => [
    s.startPerformingUpdateProductVariantSchemaAction,
  ]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    processingStarted();

    setVariants(
      variants.map((variant) =>
        variant.id === id
          ? { ...variant, title: values.variantTitle, type: values.variantType }
          : variant
      )
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end w-full gap-5"
      >
        <FormField
          control={form.control}
          name="variantTitle"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Variant Title</FormLabel>
              <FormControl>
                <Input placeholder="Size or Color" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="variantType"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Variant Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select variant value type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="normal">Normal Value</SelectItem>
                  <SelectItem value="color">Color Value</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
