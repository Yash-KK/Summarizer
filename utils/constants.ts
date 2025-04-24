export interface PriceType {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
};

export const buttonVariants = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

export const listVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};
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
