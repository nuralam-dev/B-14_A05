import { useEffect, useState } from "react";
import { type Technology } from "../types";

const TechSection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  // Public folder constraint: Fetch json data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch((err) => console.error("Failed to load JSON data:", err));
  }, []);

  // Add item to stack (Ensures no duplicate)
  const handleAddToStack = (tech: Technology) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  // Remove single item
  const handleRemoveFromStack = (id: number) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  // Remove all items
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Section Title */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Grid Layout: Tech Cards (Left) + Selected Stack Sidebar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left Side: Technology Cards (Takes 3 columns on large screens) */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech) => {
            const isSelected = selectedStack.some(
              (item) => item.id === tech.id,
            );

            return (
              <div
                key={tech.id}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-4">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mb-6">
                    {tech.description}
                  </p>
                </div>

                {/* Card Footer Info */}
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-2 border-t border-gray-50">
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">
                      {tech.category}
                    </span>
                    <span>{tech.level}</span>
                    <span className="flex items-center font-bold text-gray-800">
                      <span className="text-amber-400 mr-1">★</span>{" "}
                      {tech.rating}
                    </span>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddToStack(tech)}
                    disabled={isSelected}
                    className={`w-full py-2.5 rounded-xl font-medium text-xs transition ${
                      isSelected
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-slate-900 hover:bg-black text-white"
                    }`}
                  >
                    {isSelected ? "Added to Stack" : tech.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Your Stack Sidebar (1 column) */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm sticky top-20">
          <h3 className="text-base font-bold text-gray-900">Your Stack</h3>
          <p className="text-xs text-gray-400 mb-4">
            {selectedStack.length > 0
              ? `${selectedStack.length} Technology Selected`
              : "No technologies selected yet."}
          </p>

          {/* Selected List Empty State */}
          {selectedStack.length === 0 ? (
            <div className="border border-dashed border-gray-200 rounded-xl py-10 text-center">
              <p className="text-xs text-gray-400">Your stack is empty.</p>
            </div>
          ) : (
            /* Selected List Items */
            <div className="space-y-3">
              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {selectedStack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-gray-400">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* Remove Item Button */}
                    <button
                      onClick={() => handleRemoveFromStack(item.id)}
                      className="text-gray-400 hover:text-red-500 text-sm font-bold px-1"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Clear All Button */}
              <button
                onClick={handleRemoveAll}
                className="w-full mt-4 py-2 text-xs font-semibold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
