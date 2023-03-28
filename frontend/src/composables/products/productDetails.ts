export type Measurement = {
  bust: number;
  waist: number;
  hip: number;
  height: number;
};
export type Highlight = {
  id: number;
  title: string;
  details: string;
};
export type ProductInfo = {
  name: string;
  description: string;
  category: string;
  quantity: number;
  tags: Array<string>;
  reviewStatus: boolean;
  measurement: Measurement;
  highlights: Array<any>;
  price: number;
  comparePrice: number;
  weight: number;
  height: number;
  deliveryPeriod: string;
  images: any;
};
