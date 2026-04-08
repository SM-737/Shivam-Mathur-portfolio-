import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0e1a",
        "bg-secondary": "#0d1117",
        "bg-tertiary": "#161b22",
        "accent-primary": "#00d4ff",
        "accent-secondary": "#4facfe",
        "accent-blue": "#0066cc",
        "text-primary": "#e6edf3",
        "text-secondary": "#8b949e",
        "border-col": "#21262d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
