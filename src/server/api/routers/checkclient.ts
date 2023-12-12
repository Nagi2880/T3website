import { z } from "zod";
import { createTRPCRouter, publicProcedure} from "../trpc";

export const CheckclientRouter = createTRPCRouter({
    
    validateClient: publicProcedure
    .input(
        z.object({
            username: z.string(),
            password: z.string(),
        })
    )
    .mutation(({ctx, input}) =>{
        const checkClient =  ctx.db.client.findFirst({
            where:{
                username: input.username,
                password: input.password,
            },
        });

        return checkClient
    })
})