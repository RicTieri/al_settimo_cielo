import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '..',
);
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');
const ssrEntry = path.join(rootDir, 'bootstrap', 'ssr', 'ssg.js');

const routes = [
    { url: '/', component: 'public/Home', output: 'index.html' },
    {
        url: '/wedding-events-gallery',
        component: 'public/WeddingEvents',
        output: 'wedding-events-gallery/index.html',
    },
    {
        url: '/food-gallery',
        component: 'public/FoodGallery',
        output: 'food-gallery/index.html',
    },
    {
        url: '/residence-gallery',
        component: 'public/ResidenceGallery',
        output: 'residence-gallery/index.html',
    },
    {
        url: '/al-settimo-cielo',
        component: 'public/ResidenceSettimoCielo',
        output: 'al-settimo-cielo/index.html',
    },
    {
        url: '/piccolo-marte',
        component: 'public/PiccoloMarte',
        output: 'piccolo-marte/index.html',
    },
    {
        url: '/location',
        component: 'public/Location',
        output: 'location/index.html',
    },
    {
        url: '/sede-e-recapiti',
        component: 'public/Contact',
        output: 'sede-e-recapiti/index.html',
    },
];

const manifestPath = path.join(publicDir, 'build', 'manifest.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf-8'));
const entry = manifest['resources/js/app.ts'];

if (!entry) {
    throw new Error('Vite manifest missing resources/js/app.ts entry.');
}

const cssTags = (entry.css || [])
    .map((file) => `<link rel="stylesheet" href="/build/${file}">`)
    .join('');
const jsTag = `<script type="module" src="/build/${entry.file}"></script>`;

const { render } = await import(pathToFileURL(ssrEntry).href);

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const route of routes) {
    const { head, body } = await render({
        component: route.component,
        props: {},
        url: route.url,
        version: null,
    });

    const html = `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${head.join('')}
    ${cssTags}
  </head>
  <body>
    ${body}
    ${jsTag}
  </body>
</html>
`;

    const outputPath = path.join(distDir, route.output);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, 'utf-8');
}

await cp(path.join(publicDir, 'build'), path.join(distDir, 'build'), {
    recursive: true,
});
await cp(path.join(publicDir, 'assets'), path.join(distDir, 'assets'), {
    recursive: true,
});

const staticFiles = [
    'robots.txt',
    'favicon.ico',
    'favicon.svg',
    'apple-touch-icon.png',
];

for (const file of staticFiles) {
    await cp(path.join(publicDir, file), path.join(distDir, file));
}
