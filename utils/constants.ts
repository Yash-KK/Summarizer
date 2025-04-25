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
    price: 19,
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

export const DEMO_SUMMARY = `# 🎉 Welcome to the Future of Document Summarization!

🔍 Document Type: AI-Powered Summary  
📝 For: Busy professionals who need quick insights.

# 🌟 Highlights:
• 💨 Get key takeaways in seconds, no need to read the entire document.  
• 🔑 Extract relevant data instantly from lengthy reports or PDFs.  
• ⚡ Streamlined decision-making with summarized content at your fingertips.

# 🚀 Why It’s a Game-Changer:
• 🌟 Save time by focusing on the essentials, not the noise.  
• 💨 Boost productivity with AI-generated summaries tailored to your needs.  
• 🔑 Ideal for professionals, researchers, and anyone with limited time.

# 🧠 Main Features:
• ✨ Instant summaries: Get straight to the point with one click.  
• 📊 Data extraction: Automatically highlight figures, tables, and critical details.  
• 📚 Customization: Tailor summaries based on your preferences and priorities.

# ⚡ Pro Tips:
• 💼 Use this tool for research papers, reports, meeting notes, and more.  
• 🕒 Save hours each week by summarizing documents faster than ever.  
• 🎯 Perfect for teams who need quick access to the core ideas.

# 💬 Key Terms to Know:
• 🧑‍💻 AI Summarization: Using artificial intelligence to shorten and summarize documents while retaining key information.  
• 📈 Document Extraction: The process of pulling out the most important data points from a document.

# ✅ Bottom Line:
This tool is all about efficiency. Summarizing documents with AI lets you cut through the clutter and focus on what really matters. Get started now and supercharge your workflow!`;
