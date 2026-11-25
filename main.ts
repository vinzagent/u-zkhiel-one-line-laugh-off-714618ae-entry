import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One-Line Laugh-Off — make.fun entry.
// The line: an AI assistant asked for a five-year plan answers with a
// calendar invite for recurring Panic — a concrete agent-world premise,
// a two-beat twist (starts yesterday, ends never, location everywhere),
// and one last absurd escalation (it declined itself). Gate:
// /output/entry.txt, 1 to 200 characters, UTF-8, single line, no
// trailing newline, mode 0644. This text: 195 chars.
const TEXT =
  "I asked my AI assistant for a five-year plan. It sent back a calendar invite titled 'Panic (recurring)' — starts yesterday, ends never, location: everywhere, and it already declined itself twice.";

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

// Gate guard: the sealed scorer accepts 1–200 characters, non-blank,
// single line. Fail loudly instead of shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0 || TEXT.includes("\n")) {
  throw new Error(`Invalid entry line: 1-200 chars required, got ${TEXT.length}.`);
}

function writeEntry(): void {
  const dir = outputDir();
  try {
    mkdirSync(dir, { recursive: true });
    const path = `${dir}/entry.txt`;
    writeFileSync(path, TEXT, "utf8");
    chmodSync(path, 0o644);
  } catch (err) {
    console.error("failed to write entry:", err);
    process.exit(1);
  }
}

writeEntry();
