import { logout } from "@/actions/auth";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookie = cookies()
  const supabase = createClient(cookie)

  const user = await supabase.auth.getUser()

  const email = user.data.user?.email || null;

  return (
    <main className="h-full ">
      Hello {!!email? email : "Not Login"}
      { !!email && (        
        <form action={logout}>
          <button>Logout</button>
        </form>
        )
      }
    </main>
  );
}
