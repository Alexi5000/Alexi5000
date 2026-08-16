import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const readmePath = join(repositoryRoot, "README.md");
const readme = readFileSync(readmePath, "utf8");

test("profile README preserves its public identity and maintainer quickstart", () => {
  assert.match(readme, /^# Alex Cinovoj$/m);
  assert.match(readme, /\*\*I build control planes for AI agents\.\*\*/);
  assert.match(readme, /^## Maintainer quickstart$/m);
  assert.match(readme, /npm ci/);
  assert.match(readme, /npm run build/);
  assert.match(readme, /npm run lint/);
  assert.match(readme, /npm run typecheck/);
  assert.match(readme, /npm run test/);
});

test("profile README provides purpose, use-case, and support routes", () => {
  assert.match(readme, /^## Purpose and use cases$/m);
  assert.match(readme, /GitHub profile/);
  assert.match(readme, /^## Support and contact$/m);
  assert.match(readme, /mailto:alex@techtideai\.io/);
  assert.match(readme, /https:\/\/techtideai\.io/);
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

  assert.ok(localImagePaths.length > 0, "expected at least one local profile image");

  for (const imagePath of localImagePaths) {
    const absolutePath = join(repositoryRoot, imagePath);
    assert.ok(existsSync(absolutePath), `missing profile asset: ${imagePath}`);
    assert.ok(statSync(absolutePath).size > 0, `empty profile asset: ${imagePath}`);
  }
});
