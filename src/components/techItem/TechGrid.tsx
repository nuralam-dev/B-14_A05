import type { Technology } from "../../types";
import TechCard from "./TechCard";

interface TechGridProps {
  technologies: Technology[];
  selectedStack: Technology[];
  onAddToStack: (tech: Technology) => void;
}
const TechGrid = ({
  technologies,
  selectedStack,
  onAddToStack,
}: TechGridProps) => {
  return (
    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((tech) => {
        const isSelected = selectedStack.some((item) => item.id === tech.id);
        return (
          <TechCard
            key={tech.id}
            tech={tech}
            isSelected={isSelected}
            onAddToStack={onAddToStack}
          />
        );
      })}
    </div>
  );
};

export default TechGrid;
