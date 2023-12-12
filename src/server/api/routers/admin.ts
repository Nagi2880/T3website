import { z } from "zod";
import { createTRPCRouter, publicProcedure} from "../trpc";

export const adminRouter = createTRPCRouter({
    createAdmin: publicProcedure
    .input(
        z.object({
            username: z.string(),
            password: z.string(),
        })
    ).mutation( ({ ctx, input }) => {
        const admin = ctx.db.admin.create({
                data:{
                    username: input.username,
                    password: input.password,
                },
            });
            return admin
        }),
})