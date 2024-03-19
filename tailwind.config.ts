import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    daisyui: {
        themes: [
            {
                dark: {
                    "color-scheme": "dark",

                    "primary": "#FFF",
                    "primary-content": "#000",
                    "secondary": "#fff",
                    "secondary-content": "#000",
                    "accent": "#FFFFFF",
                    "accent-content": "#000000",
                    "neutral": "#FFFFFF",
                    "neutral-content": "#000000",
                    
                    "base-100": "#000000",
                    "base-200": "#1A1A1A",
                    "base-300": "#430000",
                    "base-content": "#FFFFFF",
                    
                    "info": "#7F1C1C",
                    "success": "#50A14F",
                    "warning": "#DAA520",
                    "error": "#F32013",
                    
                    "--rounded-box": "0.25rem",
                    "--rounded-btn": "0.25rem",
                    "--rounded-badge": "0.25rem",
                    "--tab-radius": "0.125rem",
                    "--animation-btn": "0",
                    "--animation-input": "0",
                    "--btn-focus-scale": "1",
                    "--btn-focus-bg": "#FFFFFF"
                },
                light: {
                    "color-scheme": "light",

                    "primary": "#000",
                    "primary-content": "#FFF",
                    "secondary": "#000",
                    "secondary-content": "#FFF",
                    "accent": "#707070",
                    "accent-content": "#FFFFFF",
                    "neutral": "#E0E0E0",
                    "neutral-content": "#000000",

                    "base-100": "#FFFFFF",
                    "base-200": "#F2F2F2",
                    "base-300": "#FFE4E1",
                    "base-content": "#000000",

                    "info": "#B0C4DE",
                    "success": "#90EE90",
                    "warning": "#FFD700",
                    "error": "#FF6347",

                    "--rounded-box": "0.5rem",
                    "--rounded-btn": "0.5rem",
                    "--rounded-badge": "0.5rem",
                    "--tab-radius": "0.25rem",
                    "--animation-btn": "0.2s",
                    "--animation-input": "0.2s",
                    "--btn-focus-scale": "1.05",
                    "--btn-focus-bg": "#E0E0E0"
                }
            },
        ],
    },
    plugins: [daisyui]
};

export default config;