import { cn } from "@/lib/utils";
import {
  pricingPlans,
  PriceType,
  itemVariants,
  listVariant,
} from "@/utils/constants";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionSection } from "../common/motion-wrapper";

const PricingSection = () => {
  return (
    <MotionSection className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <MotionDiv variants={itemVariants} className="text-center pb-12">
          <h2 className="uppercase font-bold text-xl mb-2 text-rose-500">
            Pricing
          </h2>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            Simple plans for every need
          </p>
        </MotionDiv>
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

const PricingCard: React.FC<PriceType> = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
}) => {
  const isPro = id === "pro";

  return (
    <MotionDiv
      variants={listVariant}
      whileHover={{ scale: 1.02 }}
      className="relative w-full max-w-lg"
    >
      {isPro && (
        <div className="absolute top-4 right-4 bg-rose-500 text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wide z-10">
          Most Popular
        </div>
      )}

      <div
        className={cn(
          "relative flex flex-col h-full gap-6 z-10 p-8 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm bg-white dark:bg-zinc-900",
          isPro && "border-rose-500 shadow-lg"
        )}
      >
        <MotionDiv variants={listVariant} className="space-y-1">
          <h3 className="text-lg lg:text-xl font-bold capitalize">{name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </MotionDiv>

        <div className="flex items-end space-x-2">
          <span className="text-5xl font-extrabold tracking-tight">
            ${price}
          </span>
          <div className="flex flex-col mb-1">
            <span className="text-xs font-medium uppercase text-gray-500">
              USD
            </span>
            <span className="text-xs text-gray-500">/month</span>
          </div>
        </div>

        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckIcon size={18} className="text-rose-500" />
              {item}
            </li>
          ))}
        </ul>

        <MotionDiv variants={listVariant} className="pt-4">
          <Link
            href={paymentLink}
            className={cn(
              "w-full rounded-full flex items-center justify-center gap-2 text-white py-2 px-4 transition-colors font-semibold",
              isPro
                ? "bg-rose-600 hover:bg-rose-700"
                : "bg-rose-400 hover:bg-rose-500"
            )}
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default PricingSection;
