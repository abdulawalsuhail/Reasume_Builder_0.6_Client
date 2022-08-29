import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hook/useToken";

const Social = ({ setCustomError }) => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);

  const [token] = useToken(gUser || gitUser);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
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
        className="shadow-md lg:w-28 w-20 h-12 py-[5px] rounded-md hover:bg-sky-200 cursor-pointer transition ease-in-out delay-150 duration-500"
      />
      <FaFacebook className="shadow-md lg:w-28 w-20 h-12 py-[5px] rounded-md hover:bg-sky-200 text-blue-500 cursor-pointer transition ease-in-out delay-150 duration-500" />
      <AiFillGithub
        onClick={async () => {
          if (gitError) {
            setCustomError(gitError?.message);
          }
          await signInWithGithub();
          toast.success("user created successfully !");
        }}
        className="shadow-md lg:w-28 w-20 h-12 py-[5px] rounded-md hover:bg-sky-200 hover:text-black cursor-pointer transition ease-in-out delay-150 duration-500"
      />
    </div>
  );
};
export default Social;
