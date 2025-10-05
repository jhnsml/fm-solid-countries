import { defineConfig } from "@pandacss/dev";
import { colorTokens } from "~/tokens/color";
import { fontTokens } from "~/tokens/font";
import { spacingTokens } from "~/tokens/spacing";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./routes/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            textStyles: fontTokens,
            tokens: {
                colors: colorTokens,
                sizes: spacingTokens,
            },
        },
    },
    logLevel: "silent",
    clean: true,
    minify: true,

    // The output directory for your css system
    outdir: "styled-system",
});
