import { z } from "zod";
import { createTRPCRouter, publicProcedure} from "../trpc";

export const clientRouter = createTRPCRouter({
    createClient: publicProcedure
    .input(
        z.object({
            username: z.string(),
            password: z.string(),
        })
    ).mutation( ({ ctx, input }) => {
        const client = ctx.db.client.create({
                data:{
                    username: input.username,
                    password: input.password,
                },
            });
            return client
        }),
    validateLoginClient: publicProcedure
    .input(
        z.object({
            username: z.string(),
            password: z.string(),
        })
    )
    .mutation(({ctx, input}) =>{
        const checkAgent =  ctx.db.agent.findFirst({
            where:{
                username: input.username,
                password: input.password,
            },
        });

        return checkAgent
    })
})