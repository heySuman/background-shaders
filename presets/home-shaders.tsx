import { ShaderComponentProps } from "@/components/shader-component";
import { ColorPanels, colorPanelsPresets, Dithering, ditheringPresets, DotGrid, dotGridPresets, DotOrbit, dotOrbitPresets, FlutedGlass, flutedGlassPresets, GodRays, godRaysPresets, GrainGradient, grainGradientPresets, ImageDithering, imageDitheringPresets, LiquidMetal, liquidMetalPresets, MeshGradient, meshGradientPresets, Metaballs, metaballsPresets, NeuroNoise, neuroNoisePresets, PaperTexture, paperTexturePresets, PerlinNoise, perlinNoisePresets, PulsingBorder, pulsingBorderPresets, SimplexNoise, simplexNoisePresets, SmokeRing, smokeRingPresets, Spiral, spiralPresets, StaticMeshGradient, staticMeshGradientPresets, StaticRadialGradient, staticRadialGradientPresets, Swirl, swirlPresets, Voronoi, voronoiPresets, Warp, warpPresets, Water, waterPresets, Waves, wavesPresets } from "@paper-design/shaders-react";

import meshGradientImg from '@/public/shaders/mesh-gradient.webp';
import simplexNoiseImg from '@/public/shaders/simplex-noise.webp';
import neuroNoiseImg from '@/public/shaders/neuro-noise.webp';
import smokeRingImg from '@/public/shaders/smoke-ring.webp';
import metaballsImg from '@/public/shaders/metaballs.webp';
import voronoiImg from '@/public/shaders/voronoi.webp';
import godRaysImg from '@/public/shaders/god-rays.webp';
import swirlImg from '@/public/shaders/swirl.webp';
import ditheringImg from '@/public/shaders/dithering.webp';
import liquidMetalImg from '@/public/shaders/liquid-metal.webp';
import grainGradientImg from '@/public/shaders/grain-gradient.webp';
import pulsingBorderImg from '@/public/shaders/pulsing-border.webp';
import colorPanelsImg from '@/public/shaders/color-panels.webp';
import staticMeshGradientImg from '@/public/shaders/static-mesh-gradient.webp';
import staticRadialGradientImg from '@/public/shaders/static-radial-gradient.webp';
import imageDitheringImg from '@/public/shaders/image-dithering.webp';
import paperTextureImg from '@/public/shaders/paper-texture.webp';
import waterImg from '@/public/shaders/water.webp';

export const homeShaders: ShaderComponentProps[] = [
    {
        name: 'mesh gradient',
        image: meshGradientImg,
        Component: MeshGradient,
        shaderConfig: { ...meshGradientPresets[2].params, frame: 41500 },
    },
    {
        name: 'static mesh gradient',
        image: staticMeshGradientImg,
        Component: StaticMeshGradient,
        shaderConfig: { ...staticMeshGradientPresets[3].params, rotation: 270, speed: 0 },
    },
    {
        name: 'static radial gradient',
        image: staticRadialGradientImg,
        Component: StaticRadialGradient,
        shaderConfig: { ...staticRadialGradientPresets[0].params, radius: 0.65, speed: 0 },
    },
    {
        name: 'dithering',
        image: ditheringImg,
        Component: Dithering,
        shaderConfig: { ...ditheringPresets[0].params, scale: 0.6 },
    },
    {
        name: 'grain gradient',
        image: grainGradientImg,
        Component: GrainGradient,
        shaderConfig: { ...grainGradientPresets[0].params, frame: 7000, speed: 1.5 },
    },
    {
        name: 'swirl',
        image: swirlImg,
        Component: Swirl,
        shaderConfig: { ...swirlPresets[0].params },
    },
    {
        name: 'neuro noise',
        image: neuroNoiseImg,
        Component: NeuroNoise,
        shaderConfig: { ...neuroNoisePresets[0].params, scale: 0.8 },
    },
    {
        name: 'simplex noise',
        image: simplexNoiseImg,
        Component: SimplexNoise,
        shaderConfig: {
            ...simplexNoisePresets[0].params,
            scale: 0.4,
        },
    },
    {
        name: 'voronoi',
        image: voronoiImg,
        Component: Voronoi,
        shaderConfig: { ...voronoiPresets[0].params, scale: 0.35 },
    },
    {
        name: 'pulsing border',
        image: pulsingBorderImg,
        Component: PulsingBorder,
        shaderConfig: { ...pulsingBorderPresets[0].params, frame: 4000 },
    },
    {
        name: 'metaballs',
        image: metaballsImg,
        Component: Metaballs,
        shaderConfig: { ...metaballsPresets[0].params, scale: 1, count: 8, frame: 3400, speed: 2 },
    },
    {
        name: 'color panels',
        image: colorPanelsImg,
        Component: ColorPanels,
        shaderConfig: { ...colorPanelsPresets[0].params, scale: 0.75, speed: 3 },
    },
    {
        name: 'smoke ring',
        image: smokeRingImg,
        Component: SmokeRing,
        shaderConfig: { ...smokeRingPresets[0].params, scale: 0.8, speed: 2 },
    },
    {
        name: 'liquid metal',
        image: liquidMetalImg,
        Component: LiquidMetal,
        shaderConfig: { ...liquidMetalPresets[0].params, scale: 0.6 },
    },
    {
        name: 'god rays',
        image: godRaysImg,
        Component: GodRays,
        shaderConfig: { ...godRaysPresets[0].params, offsetY: -0.7 },
    },
    {
        name: 'paper texture',
        image: paperTextureImg,
        Component: PaperTexture,
        shaderConfig: { ...paperTexturePresets[0].params, scale: 1.05 },
    },

    {
        name: 'water',
        image: waterImg,
        Component: Water,
        shaderConfig: { ...waterPresets[0].params, scale: 1.05, colorBack: '#e0f2ff' },
    },
    {
        name: 'image dithering',
        image: imageDitheringImg,
        Component: ImageDithering,
        shaderConfig: { ...imageDitheringPresets[0].params, scale: 1.05 },
    },
];
