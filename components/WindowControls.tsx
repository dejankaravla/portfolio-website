// components/WindowControls.tsx
import React from "react";

const WindowControls: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 px-2 pt-1 pb-8">
      <div className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition-colors"></div>
      <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer transition-colors"></div>
      <div className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer transition-colors"></div>
    </div>
  );
};

export default WindowControls;
