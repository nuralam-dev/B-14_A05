import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../../types";
import SelectedStackSidebar from "./SelectedStackSidebar";
import TechGrid from "./TechGrid";

const TechSection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch((err) => console.error("Failed to load JSON data:", err));
  }, []);
  const handleAddToStack = (tech: Technology) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
      toast.success(`${tech.name} added to your stack!`);
    }
  };
  const handleRemoveFromStack = (id: number) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.warn(`${itemToRemove.name} removed from your stack.`);
    }
  };
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('All technologies removed from your stack!');
  };
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <TechGrid
          technologies={technologies}
          selectedStack={selectedStack}
          onAddToStack={handleAddToStack}
        />
        <SelectedStackSidebar
          selectedStack={selectedStack}
          onRemoveFromStack={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default TechSection;
