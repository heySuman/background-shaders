"use client";
import clsx from "clsx";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { homeShaders } from "@/presets/home-shaders";
import { ArrowRight, Code, Copy, Eye } from "lucide-react";
import ShaderComponent, { ShaderComponentProps } from "@/components/shader-component";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function formatJsxAttribute(key: string, value: unknown): string {
  if (typeof value === "string") return `${key}="${value}"`;
  if (typeof value === "number" || typeof value === "boolean") return `${key}={${value}}`;
  if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
    return `${key}={${JSON.stringify(value)}}`;
  }
  return `${key}={${String(value)}}`;
}

function toPascalCase(str: string) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export default function Home() {
  const [activeShader, setActiveShader] = useState<ShaderComponentProps | null>(null);

  const handlePreviewShader = (name: string) => {
    const shader = homeShaders.find(shader => shader.name === name);
    if (shader) setActiveShader(shader);
  };

  const handleCopy = () => {
    toast("Copied to clipboard!");
    navigator.clipboard.writeText("npm i @paper-design/shaders-react");
  };

  return (
    <div className="bg-gray-800">
      {activeShader && (
        <ShaderComponent
          shaderComponentProps={activeShader}
          props={{
            className: clsx(
              "fixed w-full h-screen transition-opacity transition-filter duration-300 ease-out"
            ),
          }}
        />
      )}

      <main className="font-sans max-w-full md:max-w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-20">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-snug sm:leading-tight">
              Simple, stunning{" "}
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-white via-slate-500 to-zinc-50 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                background shaders
              </span>
            </h2>

            {/* Install instruction */}
            <div className="mt-6 flex items-center gap-2 sm:gap-4 rounded-md bg-gray-100 p-3 w-full sm:w-auto">
              <div className="font-mono text-base sm:text-lg text-gray-600 dark:text-gray-200 font-medium overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                npm i @paper-design/shaders-react
              </div>
              <div
                onClick={handleCopy}
                className="hidden sm:flex border-l-2 pl-4 border-gray-500 cursor-pointer"
              >
                <Copy />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://github.com/heySuman/background-shaders"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button className="w-full sm:w-auto">
                  Go to GitHub <ArrowRight className="pl-0.5" size={16} />
                </Button>
              </a>
              <Button
                variant="secondary"
                onClick={() => setActiveShader(null)}
                className="w-full sm:w-auto"
              >
                Reset background
              </Button>
            </div>
          </div>
        </section>

        {/* Shader Grid */}
        <section className="py-20 sm:py-32 text-base sm:text-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-12">
            {homeShaders.map(shader => (
              <ShaderPreview
                key={shader.name}
                name={shader.name}
                image={shader.image}
                shaderDetails={shader}
                handlePreviewShader={handlePreviewShader}
              />
            ))}
          </div>
        </section>
      </main>

      <Toaster />
    </div>
  );
}

function ShaderPreview({
  name,
  image,
  shaderDetails,
  handlePreviewShader,
}: {
  name: string;
  image: StaticImageData;
  shaderDetails: ShaderComponentProps;
  handlePreviewShader: (name: string) => void;
}) {
  const componentName = toPascalCase(name);
  const propsCode = Object.entries(shaderDetails.shaderConfig)
    .filter(([key]) => !["worldWidth", "worldHeight", "originX", "originY"].includes(key))
    .map(([key, value]) => `  ${formatJsxAttribute(key, value)}`)
    .join("\n");

  const code = `import { ${componentName} } from '@paper-design/shaders-react';

<${componentName}
  style={{ height: 500 }}
${propsCode ? propsCode + "\n" : ""}/>
`;

  const containerClasses = clsx(
    "relative flex aspect-[4/3] items-center justify-center",
    "overflow-hidden rounded-2xl bg-cream/50 group squircle:rounded-4xl"
  );

  return (
    <div className="relative group">
      <div className={containerClasses}>
        <Image
          className="absolute h-full w-full object-cover aspect-[4/3]"
          src={image}
          alt={`Preview of ${name}`}
          unoptimized
          priority
        />
        <div className="absolute inset-0 flex gap-2 p-2 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="outline" size="icon" onClick={() => handlePreviewShader(name)}>
            <Eye />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Code />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="w-full bg-black text-gray-100 border-l border-gray-700 border-0 p-3 md:px-10 md:py-5"
            >
              <SheetHeader>
                <div className="flex items-center gap-4">
                  <SheetTitle className="text-lg font-mono text-gray-200">Code</SheetTitle>
                  <Button
                    variant="default"
                    size="icon"
                    onClick={() => {
                      navigator.clipboard.writeText(code);
                      toast("Copied!");
                    }}
                    className="text-gray-300 hover:text-white"
                  >
                    <Copy size={18} />
                  </Button>
                </div>
              </SheetHeader>
              <SheetDescription>
                <section className="my-4">
                  <pre className="overflow-x-auto rounded-xl bg-stone-800 p-4 text-sm text-gray-200 font-mono">
                    {code}
                  </pre>
                </section>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <p className="mt-2 text-center text-sm sm:text-base md:text-lg text-white">{name}</p>
    </div>
  );
}
