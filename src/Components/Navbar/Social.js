import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";

import { toast } from "react-hot-toast";
import auth from "../../firebase.init";

const Social = ({ setCustomError }) => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  return (
    <div className="flex justify-evenly items-center text-3xl">
      <FcGoogle
        onClick={async () => {
          if (gError) {
            setCustomError(gError?.message);
          }
          await signInWithGoogle();
          toast.success("user created successfully !");
        }}
        className="border-gray-500 border-[2px] lg:w-28 w-20 h-12 py-[5px] rounded-md hover:bg-sky-200 cursor-pointer transition ease-in-out delay-150 duration-500"
      />
      <FaFacebook className="border-[2px] border-gray-500 lg:w-28 w-20 h-12 py-[5px] rounded-md hover:bg-sky-200 text-blue-500 cursor-pointer transition ease-in-out delay-150 duration-500" />
      <AiFillGithub
        onClick={async () => {
          if (gitError) {
            setCustomError(gitError?.message);
          }
          await signInWithGithub();
          toast.success("user created successfully !");
        }}
        className="border-[2px] border-gray-500 lg:w-28 w-20 h-12 py-[5px] rounded-md hover:bg-sky-200 hover:text-black cursor-pointer transition ease-in-out delay-150 duration-500"
      />
    </div>
  );
};
export default Social;
