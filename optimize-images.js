// Image optimization using Sharp (npm install sharp)
// Generates WebP, blur placeholders, and responsive sizes

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const thumbnailsDir = path.join(__dirname, 'public', 'thumbnails');
const sizes = [400, 800, 1200];

async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  const ext = path.extname(filePath);
  const baseName = fileName.replace(ext, '');
  const dir = path.dirname(filePath);

  console.log(`Processing: ${fileName}`);

  try {
    // 1. Generate WebP
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(path.join(dir, `${baseName}.webp`));
    console.log(`  ✓ Created WebP`);

    // 2. Generate blur placeholder (base64)
    const blurBuffer = await sharp(filePath)
      .resize(20, 20, { fit: 'cover' })
      .blur(8)
      .jpeg({ quality: 50 })
      .toBuffer();
    const base64 = `data:image/jpeg;base64,${blurBuffer.toString('base64')}`;
    fs.writeFileSync(`${filePath}.base64.txt`, base64);
    console.log(`  ✓ Created blur placeholder`);

    // 3. Generate responsive sizes
    for (const size of sizes) {
      await sharp(filePath)
        .resize(size, null, { withoutEnlargement: true })
        .toFile(path.join(dir, `${baseName}.${size}${ext}`));
      console.log(`  ✓ Created ${size}px version`);
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
    } else if (/\.(jpg|jpeg|png)$/i.test(file) && !file.includes('.base64') && !/\.(400|800|1200)\./i.test(file)) {
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
    console.log('  - Responsive sizes (.400, .800, .1200)');
  })
  .catch(console.error);
