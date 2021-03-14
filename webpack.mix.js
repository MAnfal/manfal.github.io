const mix = require("laravel-mix");
const path = require("path");

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
        },
    },
});

if (mix.inProduction()) {
    mix.disableNotifications();
}

mix.postCss("src/css/app.css", "assets/css", [require("tailwindcss")]);
