import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const adminRouter = createTRPCRouter({
    createAdmin: publicProcedure
    .input(
        z.object({
            username: z.string(),
            password: z.string(),
        })
    )
    .mutation(async ({ ctx, input }) => {
        try {
            await ctx.db.admin.create({
                data:{
                    username: input.username,
                    password: input.password,
                },
            });
        }   catch (error){
            console.log(error)
        }
    })
})