import { createApp } from "./app";
import { getServerPort } from "./env";

const port = getServerPort();
const app = createApp();

app.listen({ hostname: "0.0.0.0", port });

console.log(`API → http://localhost:${port}/api`);
console.log(`Health → http://localhost:${port}/api/health`);
