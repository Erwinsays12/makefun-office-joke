// One-Line Office Joke: 24-Hour Sprint — make.fun entry
// u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
//
// A small deterministic program that composes one single-line joke about
// office life, validates it against the gate (1..200 characters, not only
// whitespace) and writes it to /output/entry.txt.
//
// The joke, in one dry voice: the boss's favourite line — "we're a family
// here" — is taken literally, and the punchline lists what that family
// actually delivers: low pay, overwork, and HR only showing up when
// someone quits. No meeting/email cliché, no generic complaint — the
// surprise is the third item, which reframes the first two.
//
// Deterministic: no network, no clock, no randomness — the same joke on
// every run, so both grading runs produce the identical entry.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

// --- The joke, built from its parts so every word earns its place ---
const SETUP = "My boss says we're a family here,";
const PAYOFF = "which explains why I'm underpaid, overworked,";
const TWIST = "and only ever see HR when someone quits.";

function buildJoke(): string {
  return `${SETUP} ${PAYOFF} ${TWIST}`;
}

// --- Gate: the entry must be 1..200 characters of non-whitespace text ---
function validate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry is empty or only whitespace");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `entry is ${text.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  const joke = buildJoke();
  validate(joke);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", joke, "utf8");
  console.log(`wrote ${joke.length} chars to /output/entry.txt`);
  console.log(joke);
}

main();
