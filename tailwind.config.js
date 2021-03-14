const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./_includes/**/*.html", "./_layouts/**/*.html", "./*.html"],
    darkMode: "class",
    theme: {
        extend: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
