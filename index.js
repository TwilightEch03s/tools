import { config } from "dotenv";
config();

import { tool } from "@langchain/core/tools";
import { z } from "zod";

const multiply = tool(
  ({ a, b }) => {
    return a * b;
  },
  {
    name: "multiply",
    description: "Multiply two numbers",
    schema: z.object({
      a: z.number(),
      b: z.number(),
    }),
  }
);

async function main() {
  const result = await multiply.invoke({ a: 2, b: 3 });
  console.log(multiply.name);
  console.log(multiply.description);
  console.log(result);
}

main();