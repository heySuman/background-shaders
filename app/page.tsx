"use client"
import { MeshGradient } from "@paper-design/shaders-react";
import { meshGradientPresets, PresetConfig } from "@/constants/presets/mesh-gradients";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Home() {
  const [activePreset, setActivePreset] = useState<PresetConfig | null>(meshGradientPresets[0]);

  const selectPreset = (key: string = "deep-space") => {
    const preset = meshGradientPresets.filter(p => p.key === key);
    setActivePreset(preset[0]);
  }

  return (
    <div className="font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        {meshGradientPresets && meshGradientPresets.map((i, idx) => (
          <p
            key={i.key}
            onClick={() => selectPreset(i.key)}
            className="underline underline-offset-2 text-gray-500 cursor-pointer">
            @{i.name}
          </p>
        ))}
      </div>

      <div className="col-span-2">
        <AspectRatio ratio={16 / 9} className="bg-red-100 rounded-2xl overflow-hidden">
          <MeshGradient {...activePreset?.props} className="w-full h-full" />
        </AspectRatio>
        <div className="flex justify-between py-4">
          <p className=" font-sans text-xl font-medium">{activePreset?.name}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
