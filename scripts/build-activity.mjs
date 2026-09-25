// Builds src/server/mock/activity.json from Erick's local git history (last 53 weeks).
// Run locally: node scripts/build-activity.mjs  (Vercel can't read these repos, so the JSON is committed.)
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

const ROOT = join(homedir(), "Development");
const AUTHORS = ["erickepeixoto@gmail.com", "epeixoto@arke.com"];
const since = new Date(Date.now() - 371 * 86400000).toISOString().slice(0, 10);

// Every git repo under ~/Development, up to 5 levels deep (client repos live in nested folders).
const found = execSync(`find "${ROOT}" -maxdepth 6 -name .git -not -path "*/node_modules/*"`, { encoding: "utf8" })
  .trim().split("\n").filter(Boolean).map((p) => p.replace(/\/\.git$/, ""));
const seen = new Map();
const repos = new Set();
for (const repo of found) {
  const dir = repo.slice(ROOT.length + 1);
  let out = "";
  try {
    out = execSync(`git -C "${repo}" log --all --since=${since} ${AUTHORS.map((a) => `--author=${a}`).join(" ")} --format=%H\\|%ad --date=short`, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  } catch { continue; }
  for (const line of out.trim().split("\n").filter(Boolean)) {
    const [hash, day] = line.split("|");
    if (!seen.has(hash)) { seen.set(hash, day); repos.add(dir); }
  }
}
const days = {};
for (const day of seen.values()) days[day] = (days[day] || 0) + 1;
const data = { repos: repos.size, generatedAt: new Date().toISOString().slice(0, 10), since, total: seen.size, activeDays: Object.keys(days).length, days };
writeFileSync(new URL("../src/server/mock/activity.json", import.meta.url), JSON.stringify(data));
console.log(`${data.total} commits, ${data.activeDays} active days since ${since}`);
