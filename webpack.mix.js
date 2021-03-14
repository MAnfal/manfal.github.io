const mix = require("laravel-mix");
const path = require("path");

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/ts"),
        },
    },
});

if (mix.inProduction()) {
    mix.disableNotifications();
}

mix.postCss("src/css/app.css", "assets/css", [require("tailwindcss")]);

mix.ts("src/ts/app.ts", "assets/js");
