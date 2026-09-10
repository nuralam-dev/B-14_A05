import type { Technology } from "../../types";

interface SelectedStackSidebarProps {
  selectedStack: Technology[];
  onRemoveFromStack: (id: number) => void;
  onRemoveAll: () => void;
}

const SelectedStackSidebar = ({
  selectedStack,
  onRemoveFromStack,
  onRemoveAll,
}: SelectedStackSidebarProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm sticky top-20">
      <h3 className="text-base font-bold text-gray-900">Your Stack</h3>
      <p className="text-xs text-gray-400 mb-4">
        {selectedStack.length > 0
          ? `${selectedStack.length} Technology Selected`
          : "No technologies selected yet."}
      </p>

      {selectedStack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl py-10 text-center">
          <p className="text-xs text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
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
                    <p className="text-[10px] text-gray-400">{item.category}</p>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="text-gray-400 hover:text-red-500 text-sm font-bold px-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 text-xs font-semibold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedStackSidebar;
