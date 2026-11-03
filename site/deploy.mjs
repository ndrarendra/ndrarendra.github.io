// Builds the site and copies the static files to the repository root,
// which is the folder GitHub Pages serves for ndrarendra.github.io.
import { execSync } from "node:child_process";
import { cpSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

execSync("npx next build", { cwd: here, stdio: "inherit" });

// Remove the previous build's hashed files so they don't pile up.
rmSync(join(root, "_next"), { recursive: true, force: true });
cpSync(join(here, "out"), root, { recursive: true });

console.log("\nDone. The site is in the repository root. Commit and push to publish it.");
