import clsx from "clsx";
import { toast } from "sonner";
import { Code, Copy, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toPascalCase } from "@/utils/pascal-case";
import Image, { StaticImageData } from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ShaderComponentProps } from "@/components/shader-component";
import { formatJsxAttribute } from "@/utils/format-jsx-arribute";

export function ShaderPreview({
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
