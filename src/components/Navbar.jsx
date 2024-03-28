import { UserAuth } from "../context/authContext";
import { Link ,useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigagte = useNavigate();

  const handlelogout = async () => {
    try {
      await logOut();
      navigagte("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
       <Link to="/">

      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
       </Link>
       {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white font-semibold   sm:text-sm md:text-base  pr-3 cursor-pointer">
              Account
            </button>
          </Link>

          <button
            onClick={handlelogout}
            className="bg-red-600 rounded px-2 py-1 sm:text-sm md:text-base  font-semibold text-white cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white font-semibold   sm:text-sm md:text-base  pr-3 cursor-pointer">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 rounded px-2 py-1 sm:text-sm md:text-base  font-semibold text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
