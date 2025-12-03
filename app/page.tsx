import { auth, signIn, signOut } from "@/auth"
import Image from "next/image";


export default async function Home() {

    const session = await auth();
    const user = session?.user;

  return (
    <div>
        <h1> GITHUB OAuth Login</h1>

        {!user && (
            <form action={async () => {
                "use server";
                await signIn("github");
            }}>
                <button type="submit">Sign In with Github</button>
            </form>
        )}
        {user && (
            <div>
                <img src={user.image ?? ""} alt="Users"/>
                <p>{user.name}</p>
                <p>{user.email}</p>

                <form action={async () => {
                    "use server";
                    await signOut();
                }}>
                    <button type="submit">
                        Sign Out
                    </button>
                </form>
            </div>
        )}
    </div>
  );
}
