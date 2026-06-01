import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../docs/screenshots");
const previewDir = path.join(outDir, "previews");
const baseUrl =
  process.env.SCREENSHOT_BASE_URL || "https://w-advokatbyra-malmo.netlify.app";

const chromePaths = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
];

const pages = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/services", name: "services" },
  { path: "/contact", name: "contact" },
];

async function resolveChrome() {
  const { access } = await import("node:fs/promises");
  for (const candidate of chromePaths) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      /* try next */
    }
  }
  throw new Error("Chrome/Chromium executable not found");
}

async function capture() {
  await mkdir(outDir, { recursive: true });
  await mkdir(previewDir, { recursive: true });
  const executablePath = await resolveChrome();

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const desktop = await browser.newPage();
    await desktop.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

    for (const { path: route, name } of pages) {
      await desktop.goto(`${baseUrl}${route}`, {
        waitUntil: "networkidle2",
        timeout: 90_000,
      });
      await new Promise((resolve) => setTimeout(resolve, 2500));

      await desktop.screenshot({
        path: path.join(outDir, `${name}-desktop.jpg`),
        fullPage: true,
        type: "jpeg",
        quality: 86,
      });
      console.log(`saved ${name}-desktop.jpg`);

      await desktop.screenshot({
        path: path.join(previewDir, `${name}.jpg`),
        fullPage: false,
        type: "jpeg",
        quality: 82,
      });
      console.log(`saved previews/${name}.jpg`);
    }

    const mobile = await browser.newPage();
    await mobile.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await mobile.goto(`${baseUrl}/`, {
      waitUntil: "networkidle2",
      timeout: 90_000,
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await mobile.screenshot({
      path: path.join(outDir, "home-mobile.jpg"),
      fullPage: false,
      type: "jpeg",
      quality: 86,
    });
    await mobile.screenshot({
      path: path.join(previewDir, "home-mobile.jpg"),
      fullPage: false,
      type: "jpeg",
      quality: 82,
    });
    console.log("saved home-mobile.jpg + previews/home-mobile.jpg");
  } finally {
    await browser.close();
  }
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
