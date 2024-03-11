import NextAuth, { SessionStrategy } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import prisma from "@/prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

const adapter = PrismaAdapter(prisma) as Adapter;

export const OPTIONS = {
    adapter,
    secret: process.env.NEXTAUTH_SECRET ?? "",
    session: {
        strategy: "database" as SessionStrategy,
        maxAge: 30*24*60*60
    },  
    providers:[
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID ?? "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET ?? ""
        })
    ],
};

export const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };
