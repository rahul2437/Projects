import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  if (loading) return <h1>Loading...</h1>;
  if (!user) route.push("/auth/login");
  if (user)
    return (
      <div className="flex flex-col justify-center">
        <h1>Welcome to Dashboard {user.displayName}</h1>
        <button
          onClick={() => auth.signOut()}
          className="w-1/2 mx-auto px-4 text-white font-bold py-2 bg-red-500 hover:bg-red-700 rounded"
        >
          Logout
        </button>
      </div>
    );
};

export default dashboard;
