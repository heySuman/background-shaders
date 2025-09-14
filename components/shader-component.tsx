import { StaticImageData } from "next/image"

export type ShaderComponentProps = {
    name: string
    Component: React.FC<any>,
    image: StaticImageData,
    shaderConfig: Record<string, unknown>
}

export default function ShaderComponent({ shaderComponentProps }: { shaderComponentProps: ShaderComponentProps }) {
    const { Component, shaderConfig } = shaderComponentProps;
    return <Component {...shaderConfig} />
}