"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";

export const AppBar = () => {
  return (
    <div className="flex flex-col justify-center items-center p-3">
      <div>
        <button
          className="py-3 px-4 border rounded m-2 hover:border-green-300 hover:text-green-300 transition-all"
          onClick={() => signIn()}
        >
          Sign In
        </button>
        <button
          className="py-3 px-4 border rounded m-2 hover:border-red-300 hover:text-red-300"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
      <hr />
      <div>
        <button
          className=" flex justify-around items-center gap-3 py-3 px-6 border rounded m-2 hover:border-green-300 hover:text-green-300 transition-all"
          onClick={() => signIn("google")}
        >
          <img
            height="24"
            width="24"
            src="https://authjs.dev/img/providers/google.svg"
          ></img>
          Sign In with Google
        </button>
      </div>
      <hr />
      <div>
        <button
          className="flex justify-between items-center gap-3 bg-white text-black py-3 px-7 border border-black rounded m-2 hover:border-green-900 hover:text-green-900 transition-all"
          onClick={() => signIn("github")}
        >
          <img
            height="24"
            width="24"
            src="https://authjs.dev/img/providers/github.svg"
          ></img>
          Sign In with Github
        </button>
      </div>
    </div>
  );
};
