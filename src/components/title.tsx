"use client";

import { useRef, MutableRefObject } from "react";
import { Space_Mono } from "next/font/google";
import { cn } from "@/libs/utils";

const font = Space_Mono({ subsets: ["latin"], weight: "700" });

type TitleProps = {
    text: string,
    className?: string
};

const chars: string[] = "$!?%#@*&".split("");

const Title: React.FC<TitleProps> = ({ text, className }: TitleProps) => {
    const hover: MutableRefObject<HTMLParagraphElement | null> = useRef<HTMLParagraphElement | null>(null);
    const letters: MutableRefObject<HTMLSpanElement[]> = useRef<HTMLSpanElement[]>([]);
    const initialText: string[] = text.split("");

    const matrix = (n: number = 0) => {
        setTimeout(() => {
            letters.current.forEach((e: Element) => {
                const char: string = chars[Math.floor(Math.random() * chars.length)];
                if (e) e.innerHTML = char;
            });
            
            if (n < 10) matrix(n+1);
            else letters.current.forEach((e: Element, i: number) => {
                if (e) e.innerHTML = initialText[i];
            });
        }, 50);
    }

    const random = (): void => {
        setTimeout(() => {
            random();
            matrix();
        }, Math.random() * 10000 + 10000);
    }

    return (
        <h1
            className={cn("tracking-normal leading-none text-xl ", font.className)}
            onMouseEnter={() => matrix()}
            ref={hover}
        >
            {
                text.split("").map((e: string, i: number) =>
                    <span
                        className={className}
                        key={i}
                        ref={(e: HTMLSpanElement) => letters.current[i] = e}
                    >
                        {e}
                    </span>
                )
            }
        </h1>
    );
}

export default Title;