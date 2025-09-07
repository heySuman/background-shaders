import { MeshGradient } from "@paper-design/shaders-react";
import { meshGradientPresets } from "@/constants/presets/mesh-gradients";
import { HoverShaderCard } from "@/components/card";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {meshGradientPresets && meshGradientPresets.map((i, idx) => (
        <HoverShaderCard {...i} key={idx} />
      ))}
    </div>
  );
}
