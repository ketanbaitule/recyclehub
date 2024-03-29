import { logout } from "@/actions/auth";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HomePage from './HomePage'

export default async function Home() {
  const cookie = cookies()
  const supabase = createClient(cookie)

  const user = await supabase.auth.getUser()

  const email = user.data.user?.email || null;

  if(!!email){
    redirect("/discover")
  }

  return (
    <main className="h-full ">
      { !!email ? (        
        <form action={logout}>
          <button>Logout</button>
        </form>
        ) : (
          <HomePage />
        )
      }
    </main>
  );
}
