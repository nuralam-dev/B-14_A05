import type { Technology } from "../../types";

interface TechCardProps {
  tech: Technology;
  isSelected: boolean;
  onAddToStack: (tech: Technology) => void;
}

const TechCard = ({ tech, isSelected, onAddToStack }: TechCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
      <div>
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
        <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mb-6">
          {tech.description}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-2 border-t border-gray-50">
          <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">
            {tech.category}
          </span>
          <span>{tech.level}</span>
          <span className="flex items-center font-bold text-gray-800">
            <span className="text-amber-400 mr-1">★</span> {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isSelected}
          className={`w-full py-2.5 rounded-xl font-medium text-xs transition flex items-center justify-center gap-1 ${
            isSelected
              ? "bg-purple-50 text-purple-600 border border-purple-100 cursor-not-allowed"
              : "bg-slate-900 hover:bg-black text-white"
          }`}
        >
          {isSelected ? (
            <>
              <span>✓</span> Added to Stack
            </>
          ) : (
            tech.buttonText
          )}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
