type ProductsResponse = {
  products: Product[];
};

type Product = {
  currencyFormat: string;
  currencyId: string;
  description: string;
  id: number;
  image: string;
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: number;
  style: string;
  title: string;
};
