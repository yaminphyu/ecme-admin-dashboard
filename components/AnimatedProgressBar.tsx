import { useEffect, useState } from "react";

type ProgressBarProps = {
  value: number;
  max: number;
};

export default function AnimatedProgressBar({ value, max }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const percent = Math.min((value / max) * 100, 100);
    setTimeout(() => setWidth(percent), 100);
  }, [value, max]);

  return (
    <div className="w-full">
      <p className="text-gray-500 mb-2">{value} Sales</p>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
