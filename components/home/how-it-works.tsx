import { BrainCircuit, FileText, Notebook } from "lucide-react";
import { MotionH2, MotionH3 } from "../common/motion-wrapper";

interface Step {
  icon: React.ReactNode;
  label: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our advanced AI processes and analyzes your document instantly",
  },
  {
    icon: <Notebook size={64} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Receive a clear, concise summary of your document",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-sm uppercase text-rose-600 tracking-wider"
        >
          How it works
        </MotionH2>
        <MotionH3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-extrabold text-3xl sm:text-4xl max-w-2xl mx-auto text-black leading-tight"
        >
          Transform any PDF into an easy-to-digest summary in three simple steps
        </MotionH3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, idx) => (
          <StepItem key={idx} {...step} />
        ))}
      </div>
    </section>
  );
};

const StepItem = ({ icon, label, description }: Step) => {
  return (
    <div className="relative p-6 rounded-2xl bg-gradient-to-r from-rose-500/10 to-transparent backdrop-blur-sm border border-rose-500/20 hover:border-rose-500/40 transition-all duration-300 group shadow-xl hover:shadow-rose-500/30">
      <div className="flex flex-col gap-6 h-full items-center text-center">
        <div className="flex items-center justify-center h-24 w-24 rounded-2xl bg-gradient-to-br from-rose-500/20 to-transparent group-hover:from-rose-500/30">
          <div className="text-rose-500">{icon}</div>
        </div>
        <h4 className="font-semibold text-xl text-black">{label}</h4>
        <p className="text-black text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
