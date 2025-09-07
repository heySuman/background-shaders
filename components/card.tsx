"use client"
import { useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

export function HoverShaderCard({ amplitude = 0.5, hoverSpeed = 0.8, ...props }) {
  const [speed, setSpeed] = useState(0);

  return (
    <div
      onMouseEnter={() => setSpeed(hoverSpeed)}
      onMouseLeave={() => setSpeed(0)}
      className="w-full h-64 rounded-xl overflow-hidden"
    >
      <MeshGradient
        className="w-full h-full"
        {...props}
        speed={speed}
      />
    </div>
  );
}
