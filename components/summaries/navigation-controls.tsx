"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationControlsProps {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
  onSectionSelect: (index: number) => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  onSectionSelect,
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-rose-500/20 to-yellow-500/10 backdrop-blur-md border-t border-rose-500/20">
      <div className="flex justify-between items-center">
        <Button
          variant="ghost"
          size={"icon"}
          onClick={onPrevious}
          disabled={currentSection === 0}
          className={cn(
            "rounded-full w-12 h-12 transition-all duration-200 bg-gradient-to-br from-rose-400 to-yellow-500 border border-rose-500/20",
            currentSection === 0 ? "opacity-50" : "hover:bg-rose-500/30"
          )}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSectionSelect(index)}
              className={cn(
                "w-3 h-3 rounded-full transform-all duration-300",
                currentSection === index
                  ? "bg-gradient-to-r from-pink-500 to-rose-600"
                  : "bg-rose-500/30 hover:bg-rose-500/50"
              )}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size={"icon"}
          onClick={onNext}
          disabled={currentSection === totalSections - 1}
          className={cn(
            "rounded-full w-12 h-12 transition-all duration-200 bg-gradient-to-br from-rose-400 to-yellow-500 border border-rose-500/20",
            currentSection === totalSections - 1
              ? "opacity-50"
              : "hover:bg-rose-500/30"
          )}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default NavigationControls;
