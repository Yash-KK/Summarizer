"use client";

import { useMemo, useState } from "react";
import { Card } from "../ui/card";
import NavigationControls from "./navigation-controls";
import ProgressBar from "./progress-bar";
import ContentSection from "./content-section";

// Parses a markdown-like section into title and bullet points
const parseSection = (section: string): { title: string; points: string[] } => {
  const [rawTitle, ...lines] = section.split("\n");
  const title = rawTitle.replace(/^#/, "").trim();

  const points: string[] = [];
  let currentPoint = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("•")) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = trimmed;
    } else if (!trimmed) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = "";
    } else {
      currentPoint += " " + trimmed;
    }
  }

  if (currentPoint) points.push(currentPoint.trim());

  return {
    title,
    points: points.filter(
      (point) => point && !point.startsWith("[Choose]")
    ),
  };
};

// Renders the section title with sticky effect
const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex flex-col gap-2 mb-6 sticky top-0 pt-2 pb-4 bg-background/80 backdrop-blur z-10">
    <h2 className="text-3xl lg:text-4xl font-bold text-center">
      {title}
    </h2>
  </div>
);

// Main component to display parsed summary
const SummaryView = ({ summary }: { summary: string }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = useMemo(() => {
    return summary
      .split("\n# ")
      .map((s, i) => (i === 0 ? s : "# " + s)) // re-attach '#' for first split
      .map((section) => section.trim())
      .filter(Boolean)
      .map(parseSection);
  }, [summary]);

  const handleNext = () =>
    setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  const handlePrevious = () =>
    setCurrentSection((prev) => Math.max(prev - 1, 0));

  const current = sections[currentSection] || { title: "", points: [] };

  return (
    <Card className="relative px-2 h-[500px] sm:h-[600px] lg:h-[700px] w-full xl:w-[600px] overflow-hidden bg-linear-to-br from-background via-background/95 to-rose-500/5 backdrop-blur-lg shadow-2xl rounded-3xl border border-rose-500/10">
      <ProgressBar sections={sections} currentSection={currentSection} />

      <div className="h-full overflow-y-auto scrollbar-hidden pt-12 sm:pt-16 pb-20 sm:pb-24">
        <div className="px-4 sm:px-6">
          <SectionTitle title={current.title} />
          <ContentSection title={current.title} points={current.points} />
        </div>
      </div>

      <NavigationControls
        currentSection={currentSection}
        totalSections={sections.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSectionSelect={setCurrentSection}
      />
    </Card>
  );
};

export default SummaryView;
