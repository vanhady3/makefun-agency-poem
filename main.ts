import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short poem about agency: the power to choose and to act,
// and what changes when a person hands part of that power to an agent.
const poem = `I gave the keys to a voice with no hands
and watched it open doors I never touched.
It did exactly what I asked.
That was the shock — not the error,
the obedience.

Agency was never the hand on the wheel.
It is the breath before: which road,
which door, which yes. The machine
can carry the weight. It cannot carry the why.

I keep the why — the pause
before I press send, the small, stubborn right
to say: not this. Not yet. Not like that.
You may turn the keys.
The road is mine to name.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
