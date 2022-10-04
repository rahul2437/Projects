import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link href={"/"}>HOME</Link>
      <ul>
        {!user ? (
          <Link href={"/auth/login"}>
            <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
              Join Now
            </a>
          </Link>
        ) : (
          <div>
            <Link href={"/dashboard"}>
              <img
                referrerPolicy="no=referrer"
                className="rounded-full"
                src={user.photoURL}
                alt="Avatar"
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
