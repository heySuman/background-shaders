"use client"
import clsx from "clsx";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { homeShaders } from "@/presets/home-shaders";
import { ArrowRight, Code, Copy, Eye } from "lucide-react";
import ShaderComponent, { ShaderComponentProps } from "@/components/shader-component";

export default function Home() {

  const [activeShader, setActiveShader] = useState<ShaderComponentProps | null>(null);

  const handlePreviewShader = (name: string) => {
    const shader = homeShaders.filter(shader => shader.name === name);
    setActiveShader(shader[0])
  }

  const handleCopy = () => {
    toast("Copied to clipboard!")
    navigator.clipboard.writeText("npm i @paper-design/shaders-react");
  }

  return (
    <div className="bg-gray-800">
      {
        activeShader &&
        <ShaderComponent
          shaderComponentProps={activeShader}
          props={{
            className: clsx(
              "fixed w-full h-screen transition-opacity transition-filter duration-300 ease-out",
            ),
          }}
        />
      }
      <main className="font-sans max-w-full md:max-w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white dark:text-gray-50 leading-snug sm:leading-tight">
              Simple, stunning{" "}
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-white via-slate-500 to-zinc-50 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                background shaders
              </span>
            </h2>

            <div className="mt-6 bg-gray-100 flex items-center sm:gap-4 gap-2 p-3 rounded-md w-full sm:w-auto">
              <div className="font-mono text-base sm:text-lg text-gray-600 dark:text-gray-200 font-medium text-center sm:text-left overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                npm i @paper-design/shaders-react
              </div>
              <div
                onClick={handleCopy}
                className="hidden sm:flex border-l-2 pl-4 border-gray-500 cursor-pointer"
              >
                <Copy />
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://github.com/heySuman/background-shaders"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button className="cursor-pointer w-full sm:w-auto">
                  Go to GitHub <ArrowRight className="pl-0.5" size={16} />
                </Button>
              </a>
              <Button
                variant="secondary"
                onClick={() => setActiveShader(null)}
                className="cursor-pointer w-full sm:w-auto"
              >
                Reset background
              </Button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="py-20 sm:py-32 text-base sm:text-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:grid-cols-4 sm:gap-12">
            {homeShaders.map((shader) => (
              <div key={shader.name}>
                <ShaderPreview
                  name={shader.name}
                  image={shader.image}
                  handlePreviewShader={handlePreviewShader}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Toaster />
    </div>
  );
}

function ShaderPreview({
  name,
  image,
  handlePreviewShader
}: { name: string, image: StaticImageData, handlePreviewShader: (name: string) => void }) {

  return (
    <div className="z-100 relative group">
      <div
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-cream/50 outline-offset-4 outline-focus will-change-transform group-focus-visible:outline-2 data-pixelated:pixelated squircle:rounded-4xl"
      >
        <Image
          className="absolute aspect-[4/3] h-full w-full object-cover"
          src={image}
          alt={`Preview of ${name}`}
          unoptimized
          priority
        />

        <div className="absolute inset-0 flex gap-2 p-2 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-start items-start">
          <Button className="cursor-pointer" variant={"outline"} onClick={() => handlePreviewShader(name)} ><Eye /></Button>
          <Button className="cursor-pointer" variant={"outline"}><Code /></Button>
        </div>
      </div>
      <p className="text-white text-center mt-2 text-sm sm:text-base md:text-lg">{name}</p>
    </div>
  );
}
