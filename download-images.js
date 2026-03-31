const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://bzanalytics.ai';
const PUBLIC_DIR = path.join(process.cwd(), 'public');

const imagePaths = [
  '/assets/images/project/protfoliodetails/dubai/dubai.jpg',
  '/assets/images/project/minecraft.jpg',
  '/assets/images/project/ai-medical.jpg',
  '/assets/images/project/protfoliodetails/bzmart/bzmart.jpg',
  '/assets/images/project/protfoliodetails/bzmart/bzmart1.png',
  '/assets/images/project/hunt.jpg',
  '/assets/images/project/protfoliodetails/minecraft/minecraft.jpg',
  '/assets/images/project/protfoliodetails/hunt/hunt.jpg',
  '/assets/images/project/virtualhub.jpg',
  '/assets/images/project/ar.jpg',
  '/assets/images/project/protfoliodetails/virtualhub/virtualhub.jpg',
  '/assets/images/project/protfoliodetails/ar/ar.jpg',
  '/assets/images/resources/metaverse-bg.jpg',
  '/assets/images/backgrounds/page-header-bg.jpg',
  '/assets/images/project/dubai.jpg'
];

async function downloadImage(imagePath) {
  const url = `${BASE_URL}${imagePath}`;
  const dest = path.join(PUBLIC_DIR, imagePath);
  const dir = path.dirname(dest);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(dest) && fs.statSync(dest).size > 1024) {
    console.log(`Skipping existing file (looks complete): ${imagePath}`);
    return;
  }

  return fetch(url).then(async res => {
    if (!res.ok) {
      console.error(`Failed to download ${url}: ${res.status}`);
      return;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`Downloaded: ${imagePath}`);
  }).catch(err => {
    console.error(`Error downloading ${url}: ${err.message}`);
  });
}

async function run() {
  console.log('Starting image downloads...');
  for (const img of imagePaths) {
    await downloadImage(img);
  }
  console.log('Finished downloading all images.');
}

run();
