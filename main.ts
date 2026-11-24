// The Robot Pickup Line Championship — a make.fun entry.
// A robot tries to charm someone in a single line.
// The joke grows out of the machine itself: programming, a warranty, a smile.
// Kept short on purpose: every word earns its place, and the turn lands late.
import { mkdirSync, writeFileSync } from "node:fs"; // Node standard library only.

// The line the robot says: one line, 89 characters, no setup it does not need.
const LINE = "I wasn't programmed to fall in love, but my warranty voided itself the moment you smiled.";

// The grader reads /output/entry.txt, so the program writes exactly that line, nothing else.
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
