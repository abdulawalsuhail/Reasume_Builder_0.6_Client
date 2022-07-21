import React from "react";
import { useForm } from "react-hook-form";
import { FaGithubSquare, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";
import whyWe from "../../../src/assets/why-we.jpg";
import icon2 from "../../assets/icon/hand.png";
import icon3 from "../../assets/icon/hot-deal.png";
import icon1 from "../../assets/icon/save-time.png";
import "../../Css/login.css";

const Signup = () => {
   
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onSubmit = (data) => console.log(data);
  return (
    <section className="text-white bg-gray-900 relative">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src={whyWe}
        alt="resume"
      />
      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-slate-800 sm:to-slate-600 opacity-75"></div>
      <div className="grid md:grid-cols-2 mx-auto relative py-10">
        {/* left side */}
        <div className="hidden md:block mx-auto my-auto w-72">
          <div>
            <h3 className="text-3xl text-white">
              Create a resume you are proud of
            </h3>
            <div className="flex items-center justify-center mt-8">
              <span>
                <img className="w-10" src={icon1} alt="" />
              </span>
              <h4 className="text-white signup-text">
                Save time with hassle free templates
              </h4>
            </div>
            <div className="flex items-center justify-center mt-6">
              <span>
                <img className="w-16" src={icon2} alt="" />
              </span>
              <h4 className="text-white signup-text">
                Beat the competition using actionable, contextual advise
              </h4>
            </div>
            <div className="flex items-center justify-center mt-6">
              <span>
                <img className="w-16" src={icon3} alt="" />
              </span>
              <h4 className="text-white signup-text">
                Highlight key achievements with memorable visuals
              </h4>
            </div>
          </div>
          <h3 className="mt-6 text-white">
            Get inspired by
            <span className="[font-weight:600]">
              {" "}
              200+ Free Resume Examples and Templates
            </span>
          </h3>
        </div>

        {/* signup */}

        <div className="bg-white shadow-lg md:[width:70%] py-8 rounded">
          <h3 className=" mt-6 text-3xl [color:#2d3639] text-center">
            Create Your Account
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
                <FaGithubSquare className="text-xl logo text-black"></FaGithubSquare>
              </span>
              <h1 className="[font-weight:500] text text-black">Github</h1>
            </div>
          </div>

          <div>
            <p className="text-center [color:#bdbfc1] mt-6 [font-weight:400]">
              or sign up with email
            </p>
          </div>

          {/* Form signup */}

          <div className="mt-6 text-center">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name can't be blank",
                    },
                  })}
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs mx-auto input-text"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500  md:[margin-left:75px]">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
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
                    <span className="label-text-alt text-red-500 md:[margin-left:75px]
                    ">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 sm:[margin-left:75px]">
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
                    <span className="label-text-alt text-red-500 sm:[margin-left:75px]">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500 sm:[margin-left:75px]">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn btn-primary input input-bordered w-full max-w-xs mx-auto text-white"
                type="submit"
                value="create your account"
              />
            </form>
          </div>

          <div className="pb-4 mt-8">
            <p className="text-center text-black">
              Already have an account?
              <label
                htmlFor="login-modal_1"
                className="font-semibold [color:#65696d] ml-1"
              >
                 Log in
              </label>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
