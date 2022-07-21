import React from "react";
import { useForm } from "react-hook-form";
import { FaGithubSquare, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Css/login.css";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <input type="checkbox" id="login-modal_1" className="modal-toggle" />
      <div className="modal modal-top sm:modal-middle">
        <div className="modal-box  [width:95%] relative">
          <label
            htmlFor="login-modal_1"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className=" mt-6 text-3xl [color:#2d3639] text-center">
            Sign in to your account
          </h3>

          {/* social login */}

          <div className="flex items-center gap-3 justify-center mt-10 px-4">
            
            {/* linkedin login*/}

            <div className="flex items-center border-2 [border-color:##b3b3b3] rounded-md px-4 py-1 linkedin-btn">
              <span>
                <FaLinkedin className=" [color:#0a66c2] logo"></FaLinkedin>
              </span>
              <h1 className="[font-weight:500] [color:#0a66c2] text">
                Linkedin
              </h1>
            </div>

            {/* google login */}

            <div className="flex items-center border-2 [border-color:##b3b3b3] rounded-md px-4 py-1 google-btn">
              <span>
                <FaGooglePlusSquare className=" [color:#dd4b39] logo"></FaGooglePlusSquare>
              </span>
              <h1 className="[font-weight:500] [color:#dd4b39] text">Google</h1>
            </div>

            {/* github login */}

            <div className="flex items-center border-2 [border-color:##b3b3b3] rounded-md px-4 py-1 github-btn">
              <span>
                <FaGithubSquare className="text-xl logo"></FaGithubSquare>
              </span>
              <h1 className="[font-weight:500] text">Github</h1>
            </div>
          </div>
          <div>
            <p className="text-center [color:#bdbfc1] mt-6 [font-weight:400]">
              or sign in with email
            </p>
          </div>

          {/* form login */}

          <div className="mt-6  text-center">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email can't be blank",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "invalid email",
                    },
                  })}
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs mx-auto input-text"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500 sm:[margin-left:65px]">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 sm:[margin-left:65px]">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password can't be blank",
                    },
                    minLength: {
                      value: 6,
                      message: "password must be 6 character",
                    },
                  })}
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs mx-auto input-text"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500 sm:[margin-left:65px]">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500 sm:[margin-left:65px]">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input className="btn btn-primary input input-bordered w-full max-w-xs mx-auto text-white" type="submit" value="sign in"/>
            </form>
          </div>
                
        {/* Forget password */}
          <div>
            <p className=" font-semibold text-center mt-16 [color:#777b7e]">Forgotten password?</p>
          </div>
          <div className="pb-4 mt-2">
            <p className="text-center">Don't have an account?la <Link  to='/signup'     className="font-semibold [color:#65696d]"> Create an account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
