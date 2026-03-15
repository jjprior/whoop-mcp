import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createWhoopMcpServer } from "./src/server";

const server = createWhoopMcpServer({
  email: process.env.WHOOP_EMAIL,
  password: process.env.WHOOP_PASSWORD,
});

const transport = new StdioServerTransport();
await server.connect(transport);
