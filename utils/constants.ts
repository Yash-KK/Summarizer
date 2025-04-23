export interface PriceType {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
}

export const pricingPlans: PriceType[] = [
  {
    name: "Basic",
    price: 9,
    description: "Perfect for occasional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    id: "basic",
    paymentLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_00g9D312l88KcCsaEE"
        : "",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1RGPyeJUGF7tzf5OX2Z9nIlk"
        : "",
  },
  {
    name: "Pro",
    price: 29,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing speed",
      "Premium email support",
    ],
    id: "pro",
    paymentLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_aEU5mNcL3bkW9qg8wx"
        : "",

    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1RGPyeJUGF7tzf5OCsG2jAH9"
        : "",
  },
];
