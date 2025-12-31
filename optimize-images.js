// Image optimization using Sharp (npm install sharp)
// Generates WebP, blur placeholders, and responsive sizes

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Can pass directory as argument: node optimize-images.js "C:\path\to\folder"
const targetDir = process.argv[2] || path.join(__dirname, 'public', 'thumbnails');
const thumbnailsDir = targetDir;
// Include a higher-res variant so thumbnails remain crisp on high-DPR screens.
const sizes = [400, 800, 1200, 1600];

const JPEG_OPTIONS = { quality: 90, progressive: true, mozjpeg: true };
const PNG_OPTIONS = { compressionLevel: 9, adaptiveFiltering: true };
const WEBP_OPTIONS = { quality: 88, effort: 5 };

const THUMB_ASPECT_RATIO = 16 / 9;
const getThumbHeight = (width) => Math.max(1, Math.round(Number(width) / THUMB_ASPECT_RATIO));

function getFormatWriter(ext) {
  const lower = String(ext || '').toLowerCase();
  if (lower === '.jpg' || lower === '.jpeg') {
    return (img) => img.jpeg(JPEG_OPTIONS);
  }
  if (lower === '.png') {
    return (img) => img.png(PNG_OPTIONS);
  }
  // Default: keep Sharp's defaults for unknown formats.
  return (img) => img;
}

async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  const ext = path.extname(filePath);
  const baseName = fileName.replace(ext, '');
  const dir = path.dirname(filePath);

  const writeOriginalFormat = getFormatWriter(ext);

  console.log(`Processing: ${fileName}`);

  try {
    // 1. Generate WebP
    await sharp(filePath)
      .rotate()
      .webp(WEBP_OPTIONS)
      .toFile(path.join(dir, `${baseName}.webp`));
    console.log(`  ✓ Created WebP`);

    // 2. Generate blur placeholder (base64)
    const blurBuffer = await sharp(filePath)
      .rotate()
      .resize(24, 24, { fit: 'cover' })
      .blur(10)
      .jpeg({ quality: 45, progressive: true })
      .toBuffer();
    const base64 = `data:image/jpeg;base64,${blurBuffer.toString('base64')}`;
    fs.writeFileSync(`${filePath}.base64.txt`, base64);
    console.log(`  ✓ Created blur placeholder`);

    // 3. Generate responsive sizes (both original format and WebP)
    for (const size of sizes) {
      const height = getThumbHeight(size);
      // Original format
      await writeOriginalFormat(
        sharp(filePath)
          .rotate()
          .resize(size, height, { fit: 'cover', position: 'attention', withoutEnlargement: true })
      ).toFile(path.join(dir, `${baseName}.${size}${ext}`));
      // WebP format
      await sharp(filePath)
        .rotate()
        .resize(size, height, { fit: 'cover', position: 'attention', withoutEnlargement: true })
        .webp(WEBP_OPTIONS)
        .toFile(path.join(dir, `${baseName}.${size}.webp`));
      console.log(`  ✓ Created ${size}px versions (${ext} + webp)`);
    }
  } catch (error) {
    console.error(`  ✗ Error processing ${fileName}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file) && !file.includes('.base64') && !/\.(400|800|1200|1600)\./i.test(file)) {
      await optimizeImage(filePath);
    }
  }
}

console.log('Starting image optimization...\n');
processDirectory(thumbnailsDir)
  .then(() => {
    console.log('\n✓ Image optimization complete!');
    console.log('Generated:');
    console.log('  - WebP versions (.webp)');
    console.log('  - Blur placeholders (.base64.txt)');
    console.log('  - Responsive sizes (.400, .800, .1200, .1600) (16:9)');
  })
  .catch(console.error);
