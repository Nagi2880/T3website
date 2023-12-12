import { z } from "zod";
import { createTRPCRouter, publicProcedure} from "../trpc";

export const agentRouter = createTRPCRouter({
    createAgent: publicProcedure
    .input(
        z.object({
            username: z.string(),
            password: z.string(),
        })
    ).mutation( ({ ctx, input }) => {
        const admin = ctx.db.agent.create({
                data:{
                    username: input.username,
                    password: input.password,
                },
            });
            return admin
        }),
    validateLogin: publicProcedure
    .input(
        z.object({
            username: z.string(),
            password: z.string(),
        })
    )
    .mutation(({ctx, input}) =>{
        const checkAdmin =  ctx.db.admin.findFirst({
            where:{
                username: input.username,
                password: input.password,
            },
        });

        return checkAdmin
    })
})