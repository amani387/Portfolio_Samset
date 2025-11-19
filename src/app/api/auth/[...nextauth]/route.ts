import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Hardcoded admin credentials for demonstration/practice
                if (credentials?.username === "admin" && credentials?.password === "admin123") {
                    return { id: "1", name: "Admin", email: "admin@samset.com" };
                }
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "changeme", // Fallback for dev
});

export { handler as GET, handler as POST };
