const fs = require('fs');
const path = require('path');

const out = path.resolve(__dirname, '..', '.output', 'public');
const assetsDir = path.join(out, 'assets');

function findAsset(pattern) {
  if (!fs.existsSync(assetsDir)) return null;
  const files = fs.readdirSync(assetsDir);
  for (const f of files) {
    if (pattern.test(f)) return `/assets/${f}`;
  }
  return null;
}

const indexScript = findAsset(/^index-.*\.js$/);
const styleFile = findAsset(/^styles-.*\.css$/) || '/assets/styles-DXst-kU_.css';

if (!indexScript) {
  console.error('Could not find index-*.js in .output/public/assets');
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>EquiRise Development Consulting Limited</title>
    <meta name="description" content="EquiRise Development Consulting Limited empowers people, strengthens organizations, and transforms communities across Africa." />
    <link rel="icon" href="/PNG/favicon0.png" type="image/png" />
    <link rel="stylesheet" href="${styleFile}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="${indexScript}"></script>
  </body>
</html>`;

fs.writeFileSync(path.join(out, 'index.html'), html);
console.log('Wrote .output/public/index.html referencing', indexScript);
