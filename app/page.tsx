import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="font-sans md:max-w-3/4 mx-auto">
      <div className="pt-8">
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <div className="mb-8 flex">
          </div>
          <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
            Convenient,{' '}
            <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
              stunning shaders
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
    </main>
  );
}
