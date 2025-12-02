import NextAuth from "next-auth";
import Github from "@auth/core/providers/github"

export const {handlers, auth, signIn, signOut} = NextAuth(
    {
        providers: [
            //Auth to obtain user
            Github({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
            })
        ],
    }
);