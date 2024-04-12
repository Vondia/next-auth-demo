import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import LoginBtn from "@/components/loginBtn";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session && (
        <>
          <h1 className="text-3xl font-bold">Welcome, {session.user?.name}</h1>{" "}
          <a href="/api/auth/signout">Sign out</a>
        </>
      )}
      {!session && (
        <div className="flex justify-around">
          You are not logged in: <LoginBtn />{" "}
        </div>
      )}
      <hr />
      <h2 className="text-2xl font-bold mt-4">Excercises</h2>
      <ul className=" mt-4">
        <li className="rounded-xl border border-slate-500 p-4 mb-4 flex gap-4">
          <input type="checkbox" id="excercise-1" />{" "}
          <label htmlFor="excercise-1">
            Make sure the protected route and admin route are only visible for
            logged in users.
          </label>
        </li>
        <li className="rounded-xl border border-slate-500 p-4 mb-4 flex gap-4">
          <input type="checkbox" id="excercise-2" />{" "}
          <label htmlFor="excercise-2">
            Make sure the admin route can only be accessed (and is only visible
            in the navigation) for users with a admin role.
          </label>
        </li>
        <li className="rounded-xl border border-slate-500 p-4 flex gap-4">
          <input type="checkbox" id="excercise-3" />{" "}
          <label htmlFor="excercise-3">
            {" "}
            Add a login provider to the Nextauth providers next to or replacing
            credentials login.
          </label>
        </li>
      </ul>
    </>
  );
}
