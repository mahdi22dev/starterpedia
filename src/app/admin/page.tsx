import { isAdmin } from "@/server-actions/admin-actions";
import { authOptions } from "@/services/auth/auth.service";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function admin({}): Promise<JSX.Element> {
  const session: any = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  const admin = await isAdmin(session?.user.id);
  if (!admin) {
    return redirect("/");
  }

  return <div>admin page</div>;
}
