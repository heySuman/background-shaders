"use client"
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { ArrowRight, Code, Copy, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeShaders } from "@/presets/home-shaders";
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
    <div className="bg-black">
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
      <main className="font-sans md:max-w-3/4 mx-auto">
        <div className="pt-20">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-8 flex">
            </div>
            <h2 className="text-center text-3xl font-medium text-white dark:text-gray-50 sm:text-6xl">
              Simple, stunning{' '}
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-white via-slate-900 to-zinc-50 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                background shaders
              </span>
            </h2>

            <div className="mt-6 bg-gray-100 flex gap-4 p-4 rounded-md">
              <div className="font-mono text-center text-lg leading-6 text-gray-600 dark:text-gray-200 font-medium ">npm i @paper-design/shaders-react</div>
              <div onClick={handleCopy} className="border-l-2 pl-4 border-gray-500 cursor-pointer"><Copy/></div>
            </div>
            
            
            <div className="mt-10 flex gap-4">
              <a
                href="https://github.com/heySuman/background-shaders"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button className="cursor-pointer">
                  Go to GitHub <ArrowRight className="pl-0.5" size={16} />
                </Button>{' '}
              </a>
              <Button variant="secondary" onClick={() => setActiveShader(null)} className="cursor-pointer">
                Reset background
              </Button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="py-32 text-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 xs:grid-cols-2 md:gap-12 lg:grid-cols-3 2xl:grid-cols-4 3xl:gap-64">
            {homeShaders.map((shader) => (
              <div key={shader.name}>
                <ShaderPreview name={shader.name} image={shader.image} handlePreviewShader={handlePreviewShader} />
              </div>
            ))}
          </div>
        </div>
      </main >
      <Toaster />
    </div >
  );
}

function ShaderPreview({
  name,
  image,
  handlePreviewShader
}: { name: string, image: StaticImageData, handlePreviewShader: (name: string) => void }) {

  return (
    <div className="z-100 relative">
      <div
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-cream/50 outline-offset-4 outline-focus will-change-transform group-focus-visible:outline-2 data-pixelated:pixelated squircle:rounded-4xl"
      >
        <Image
          className="absolute aspect-[4/3] h-full w-full"
          src={image}
          alt={`Preview of ${name}`}
          unoptimized
          priority
        />

        <div className="absolute top-2 left-2 aspect-[4/3] h-full w-full flex gap-2">
          <Button className="cursor-pointer" variant={"outline"} onClick={() => handlePreviewShader(name)} ><Eye /></Button>
          <Button className="cursor-pointer" variant={"outline"}><Code /></Button>
        </div>
      </div>
      <p className="text-white text-center">{name}</p>
    </div>
  );
}
