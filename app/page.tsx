"use client"
import ShaderComponent, { ShaderComponentProps } from "@/components/shader-component";
import { Button } from "@/components/ui/button";
import { homeShaders } from "@/presets/home-shaders";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { div } from "motion/react-client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [activeShader, setActiveShader] = useState<ShaderComponentProps | null>(null);


  const handlePreviewShader = (name: string) => {
    const shader = homeShaders.filter(shader => shader.name === name);

    setActiveShader(shader[0])
  }

  return (
    <>
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
        <div className="pt-8">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-8 flex">
            </div>
            <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
              Simple, stunning{' '}
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                background shaders
              </span>
            </h2>
            <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
              Ready-to-use, simply copy and paste into your next project. All
              snippets crafted with Tailwind CSS and{' '}
              <span className="cursor-wait opacity-70">Vanilla CSS</span> for
              easy integration.
            </p>
            <div className="mt-10 flex gap-4">
              <a
                href="https://github.com/ibelick/background-snippets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button>
                  Go to GitHub <ArrowRight className="pl-0.5" size={16} />
                </Button>{' '}
              </a>
              <Button variant="secondary">
                Reset background
              </Button>
            </div>
          </div>
        </div>


        {/* Cards */}
        <div className="py-32 text-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 xs:grid-cols-2 md:gap-12 lg:grid-cols-3 2xl:grid-cols-4 3xl:gap-64">
            {homeShaders.map((shader) => (
              <div onClick={() => handlePreviewShader(shader.name)}>
                <ShaderItem key={shader.name} {...shader} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function ShaderItem({
  name,
  image,
  shaderConfig,
  Component,
}: ShaderComponentProps) {
  const [shaderVisibility, setShaderVisibility] = useState<'hidden' | 'visible' | 'fading-out'>('hidden');

  return (
    <div>
      <div
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-cream/50 outline-offset-4 outline-focus will-change-transform group-focus-visible:outline-2 data-pixelated:pixelated squircle:rounded-4xl"
        onTouchStart={() => setShaderVisibility('visible')}
        onTouchEnd={() => setShaderVisibility('fading-out')}
        onTouchCancel={() => setShaderVisibility('fading-out')}
        onPointerEnter={(event) => {
          if (event.pointerType !== 'touch') {
            setShaderVisibility('visible');
          }
        }}
        onPointerLeave={(event) => {
          if (event.pointerType !== 'touch') {
            setShaderVisibility('fading-out');
          }
        }}
      >
        <Image
          className="absolute aspect-[4/3] h-full w-full"
          src={image}
          alt={`Preview of ${name}`}
          unoptimized
          priority
        />

        {shaderVisibility !== 'hidden' && shaderConfig.speed !== 0 && (
          <ShaderComponent
            shaderComponentProps={{ name, image, Component, shaderConfig }}
            props={{
              className: clsx(
                "absolute aspect-[4/3] h-full w-full transition-opacity transition-filter duration-300 ease-out",
                {
                  "opacity-0 blur-sm": shaderVisibility === "fading-out",
                  "opacity-100": shaderVisibility === "visible",
                }
              ),
            }}
          />
        )}
      </div>
      <div className="text-center">{name}</div>
    </div>
  );
}
