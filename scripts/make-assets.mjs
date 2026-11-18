// Regenerates logo files, favicon and social share image from scripts/logo-source.png
// (a square logo: gold mark on the navy brand background).
import sharp from 'sharp';
const src = 'scripts/logo-source.png';
const img = sharp(src).removeAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const bg = [data[0], data[1], data[2]];
// Lift the mark off its navy background so it can sit on any colour.
const out = Buffer.alloc(info.width * info.height * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  let a = Math.min(1, Math.max(0, (data[i] - bg[0]) / 120));
  if (a < 0.05) a = 0;
  for (let c = 0; c < 3; c++) out[j + c] = a ? Math.max(0, Math.min(255, Math.round((data[i + c] - (1 - a) * bg[c]) / a))) : 0;
  out[j + 3] = Math.round(a * 255);
}
const cut = () => sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });
await cut().extract({ left: 215, top: 395, width: 880, height: 432 }).trim().png().toFile('public/logo-mark.png');   // monogram only
await cut().extract({ left: 215, top: 395, width: 880, height: 490 }).trim().png().toFile('public/logo-full.png');   // monogram + name line (for navy)
const bgc = { r: bg[0], g: bg[1], b: bg[2] };
await sharp(src).extract({ left: 215, top: 395, width: 870, height: 430 }).resize({ width: 512, height: 512, fit: 'contain', background: bgc }).png().toFile('public/icon-512.png');
await sharp('public/icon-512.png').resize(180).png().toFile('public/apple-touch-icon.png');
await sharp('public/icon-512.png').resize(48).png().toFile('public/favicon.png');
await sharp({ create: { width: 1200, height: 630, channels: 3, background: bgc } })
  .composite([{ input: await sharp(src).extract({ left: 140, top: 340, width: 1000, height: 600 }).resize({ height: 560 }).toBuffer() }])
  .jpeg({ quality: 88 }).toFile('public/og.jpg');
for (const f of ['logo-mark', 'logo-full']) { const m = await sharp(`public/${f}.png`).metadata(); console.log(f, m.width, m.height); }
