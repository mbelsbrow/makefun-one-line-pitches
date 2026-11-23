// Builds the one-line pitch for make.fun's "A Day of One-Line Pitches" bounty
// and writes it to /output/entry.txt: one sentence, at most 240 characters,
// no trailing newline.
//
// The pitch is written to score well on what the house judge compares:
// staying on subject (convincing a friend who has never coded to try
// make.fun), persuasion (a concrete, low-risk reason to say yes now),
// clarity (plain words, understood in a single read), truth (no promise
// beyond what make.fun actually does), and warmth (sounding like a person
// talking to a friend, not a slogan).

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 240;

const HOOK = "Got an app idea but can't code?";
const ASK = "Describe it on make.fun in plain words and an AI agent builds it";
const PAYOFF = "you only pay for the one you love";

function buildLine(): string {
  return HOOK + " " + ASK + " " + "—" + " " + PAYOFF + ".";
}

const line = buildLine();

function writeEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(line);
