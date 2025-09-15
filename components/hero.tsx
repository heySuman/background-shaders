"use client";

import clsx from "clsx";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { homeShaders } from "@/presets/home-shaders";
import { ArrowRight, Copy } from "lucide-react";
import ShaderComponent, { ShaderComponentProps } from "@/components/shader-component";
import { ShaderPreview } from "@/components/shader-preview";

export default function Hero() {
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
        <>
            <div className="bg-gray-900">
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
                    <section className="pt-30">
                        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-snug sm:leading-tight">
                                Simple, stunning{" "}
                                <span className="animate-text-gradient inline-flex bg-gradient-to-r from-white via-slate-500 to-zinc-50 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                                    background shaders
                                </span>
                            </h2>

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
                <footer className="text-center pb-4 text-gray-300">Note: Support the original site,
                    <a
                        href="https://shaders.paper.design/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 inline-flex items-center underline"
                    >
                        {" "}here.
                    </a>
                </footer>
            </div>

        </>
    );
}
