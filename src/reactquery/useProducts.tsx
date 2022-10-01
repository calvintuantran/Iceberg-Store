import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ProductsProps } from "../components/helpers/Modal";

// [] resembles that it returns an array of the object

async function getSingleProduct(id: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const singleProduct = await response.json();
  return singleProduct;
}
export function useSingleProducts(productId: string): ProductsProps {
  const fallback: String[] = [];
  const { data: products = fallback } = useQuery(
    ["Singleproduct", productId],
    () => getSingleProduct(productId)
  );
  return { ...products, amount: 0 };
}

async function getProducts(): Promise<ProductsProps[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}

export function useProducts(): ProductsProps[] {
  const fallback: any = [];
  const { data: products = fallback } = useQuery(["products"], getProducts);
  return products;
}

// Prefetching
export function usePrefetchProducts(): void {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(["products"], getProducts);
}
