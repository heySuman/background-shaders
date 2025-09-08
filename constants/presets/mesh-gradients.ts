import { MeshGradientProps } from "@paper-design/shaders-react"

export type PresetConfig = {
  name: string;
  key: string;
  props: MeshGradientProps
}

export const meshGradientPresets: Array<PresetConfig> = [
  {
    name: "deep space",
    key: "deep-space",
    props: {
      colors: ["#2E3192", "#1BFFFF"],
      distortion: 1.2,
      swirl: 0.5,
      offsetX: -0.1,
      offsetY: 0.05,
      scale: 0.7,
      rotation: 160,
      speed: 0.1,
    }
  },

  {
    name: "Sunset",
    key: "sunset",
    props: {
      colors: ["hsl(12, 85%, 55%)", "hsl(32, 90%, 60%)", "hsl(280, 60%, 45%)"],
      distortion: 0.9,
      swirl: 0.35,
      offsetX: 0.08,
      offsetY: -0.12,
      scale: 0.65,
      rotation: 45,
      speed: 0.15,
    }
  },

  {
    name: "Neon Ice",
    key: "neon-ice",
    props: {
      colors: ["hsl(180, 80%, 45%)", "hsl(200, 90%, 65%)", "hsl(300, 70%, 50%)"],
      distortion: 1.4,
      swirl: 0.6,
      offsetX: -0.05,
      offsetY: 0.08,
      scale: 0.55,
      rotation: 220,
      speed: 0.18,
    }
  },

  {
    name: "pastel calm",
    key: "pastel-calm",
    props: {
      colors: ["hsl(150, 55%, 70%)", "hsl(200, 60%, 75%)", "hsl(45, 70%, 75%)"],
      distortion: 0.6,
      swirl: 0.25,
      offsetX: 0.1,
      offsetY: 0.1,
      scale: 0.8,
      rotation: 90,
      speed: 0.08,
    }
  },

  {
    name: "cyberpunk",
    key: "cyberpunk",
    props: {
      colors: ["hsl(320, 85%, 55%)", "hsl(200, 95%, 60%)", "hsl(60, 90%, 50%)"],
      distortion: 1.5,
      swirl: 0.7,
      offsetX: -0.15,
      offsetY: -0.1,
      scale: 0.5,
      rotation: 300,
      speed: 0.22,
    }
  },

  {
    name: "ocean breeze",
    key: "ocean-breeze",
    props: {
      colors: ["hsl(195, 75%, 55%)", "hsl(160, 65%, 50%)", "hsl(230, 60%, 45%)"],
      distortion: 1.1,
      swirl: 0.4,
      offsetX: 0.05,
      offsetY: -0.05,
      scale: 0.7,
      rotation: 120,
      speed: 0.12,
    }
  },
]
