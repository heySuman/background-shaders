import { StaticImageData } from "next/image";

export type ShaderComponentProps = {
    name: string
    image: StaticImageData,
    Component: React.FC<any>,
    shaderConfig: Record<string, unknown>
}

export default function ShaderComponent(
    { shaderComponentProps, props }:
        { shaderComponentProps: ShaderComponentProps, props: Record<string, unknown> }) {
    const { Component, shaderConfig } = shaderComponentProps;
    return <Component {...shaderConfig} {...props} />
}