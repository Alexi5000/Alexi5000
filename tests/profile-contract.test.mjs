import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const readmePath = join(repositoryRoot, "README.md");
const readme = readFileSync(readmePath, "utf8");

test("profile retains identity, implementation contact, and maintainer guidance", () => {
  assert.ok(readme.startsWith("# Alex Cinovoj"));
  assert.ok(readme.includes("Founder & CTO, TechTide AI"));
  assert.ok(readme.includes("https://techtideai.io/contact"));
  assert.ok(readme.includes("CONTRIBUTING.md"));
  const contributing = readFileSync(join(repositoryRoot, "CONTRIBUTING.md"), "utf8");
  for (const command of ["npm ci", "npm run build", "npm run lint", "npm run typecheck", "npm test"]) {
    assert.ok(contributing.includes(command));
  }
});

test("profile preserves selected work and removes retired service pitches", () => {
  for (const project of ["CPG Playbook", "ClawKeeper", "CipherClaw"]) {
    assert.ok(readme.includes(project));
  }
  assert.doesNotMatch(readme, /Systems Decision Audit|Custom MCP Server Development|Production Triage & Implementation|AssetForge/i);
  assert.ok(readme.includes("mailto:alex@techtideai.io"));
});

test("repository support and governance paths are present", () => {
  const expectedPolicies = [
    "CONTRIBUTING.md",
    "CODE_OF_CONDUCT.md",
    "SUPPORT.md",
    "SECURITY.md",
  ];

  for (const policyPath of expectedPolicies) {
    const absolutePath = join(repositoryRoot, policyPath);
    assert.ok(existsSync(absolutePath), `missing policy: ${policyPath}`);
    assert.ok(statSync(absolutePath).size > 0, `empty policy: ${policyPath}`);
  }

  assert.match(readFileSync(join(repositoryRoot, "CONTRIBUTING.md"), "utf8"), /CODE_OF_CONDUCT/);
  assert.match(readFileSync(join(repositoryRoot, "CODE_OF_CONDUCT.md"), "utf8"), /alex@techtideai\.io/);
  assert.match(readFileSync(join(repositoryRoot, "SUPPORT.md"), "utf8"), /alex@techtideai\.io|techtideai\.io/);
  assert.match(readFileSync(join(repositoryRoot, "SECURITY.md"), "utf8"), /alex@techtideai\.io/);
});

test("every local image referenced by the profile README is present and non-empty", () => {
  const localImagePaths = [...readme.matchAll(/<img src="(assets\/[^"]+)"/g)].map(
    ([, imagePath]) => imagePath,
  );


  for (const imagePath of localImagePaths) {
    const absolutePath = join(repositoryRoot, imagePath);
    assert.ok(existsSync(absolutePath), `missing profile asset: ${imagePath}`);
    assert.ok(statSync(absolutePath).size > 0, `empty profile asset: ${imagePath}`);
  }
});
