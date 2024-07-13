export type TProduct = {
  _id?: string;
  title?: string;
  price?: number;
  category?: string;
  rating?: number;
  imageUrl?: string;
  description?: string;
  quantity?: number;
};

export type Category = {
  _id: string;
  name: string;
  description?: string;
};
