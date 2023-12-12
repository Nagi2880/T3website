import { adminRouter } from "./routers/admin";
import { createTRPCRouter } from "~/server/api/trpc";
import { agentRouter } from "./routers/agent";
import { clientRouter } from "./routers/client";
import { CheckclientRouter } from "./routers/checkclient";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  admin: adminRouter,
  agent: agentRouter,
  client: clientRouter,
  checkclient: CheckclientRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
