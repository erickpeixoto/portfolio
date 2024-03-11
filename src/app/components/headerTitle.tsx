import { SparklesCore } from "@/app/components/sparkles";

export default function HeaderTittle({ text }: { text: string }) {
  return (
    <div className="h-[20rem] w-full dark:bg-black flex flex-col items-center justify-start overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-4xl font-bold text-center dark:text-white text-black relative z-20 ">
        {text}
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.8}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#7E74F1"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
