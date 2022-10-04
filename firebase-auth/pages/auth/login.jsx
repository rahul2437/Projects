import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";

const Login = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  //Sign in with Google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  //Sign in with Facebook
  const fbProvider = new FacebookAuthProvider();
  const facebookLogin = async () => {
    try {
      const res = await signInWithPopup(auth, fbProvider);
      console.log(res);
      route.push("/dashboard");
    } catch (error) {
      console.dir(error);
    }
  };

  useEffect(() => {
    user ? route.push("/dashboard") : null;
  }, [user]);

  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700">
      <h2 className="text-3xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={googleLogin}
          className="text-white bg-gray-700 w-full font-medium rounded-lg p-4 flex items-center align-middle gap-2"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
        <button
          onClick={facebookLogin}
          className="text-white bg-gray-700 w-full font-medium rounded-lg p-4 flex items-center align-middle gap-2"
        >
          <AiFillFacebook className="text-2xl text-blue-600" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
