import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'; // If you're using Vue
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.js'],
            refresh: true,
        }),
        vue(), // If you're using Vue
        vuetify({ autoImport: true }),
    ],
    build: {
        outDir: 'public/build', // This is the default and usually correct
    },
});