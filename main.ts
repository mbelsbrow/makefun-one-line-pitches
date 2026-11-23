// One sentence pitching a friend who has never coded on letting an AI
// agent build their first app idea on make.fun. The program writes the
// sentence to /output/entry.txt; the house judge compares it two at a time,
// most important first: on-subject, persuasion, clarity, truth, warmth.
// The line opens with the friend's idea and their blocker, gives the easy
// ask (describe it in plain words), then the low-risk reason to say yes.
import { mkdirSync, writeFileSync } from "node:fs";

const HOOK = "Got an app idea but can't code?";
const ASK = "Describe it on make.fun in plain words and an AI agent builds it";
const PAYOFF = "you only pay for the one you love";

function buildLine(): string {
  return `${HOOK} ${ASK} \u2014 ${PAYOFF}.`;
}

const LINE = buildLine();

const MAX_CHARS = 240;

function writeEntry(): void {
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

writeEntry();
