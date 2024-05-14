import { AppBar } from "@/components/AppBar";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}

export default async function Home() {

  const session = await getUser();

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] py-4">
      <AppBar />

      {session && JSON.stringify(session)}
    </div>
  );
}
