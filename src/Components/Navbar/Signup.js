import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import whyWe from "../../../src/assets/login_bg.jpg";
import icon2 from "../../assets/icon/handshake.png";
import icon3 from "../../assets/icon/hto-deal.png";
import icon1 from "../../assets/icon/saving.png";
import "../../Css/login.css";
import auth from "../../firebase.init";
import useToken from "../../Hook/useToken";
import Loading from "../../Shared/Loading/Loading";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Social from "./Social";

const Signup = () => {
  const [customError, setCustomError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  // update profile

  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const displayName = e.target.name.value;
    const password = e.target.password.value;
    const rePassword = e.target.rePassword.value;
    if (password === rePassword) {
      setCustomError("");
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName });
      toast.success("user created successfully 🎉");
    } else {
      setCustomError("Please input the same password !");
      toast.error("please input the same password !");
    }
  };
  if (loading || updating) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <section className=" bg-gray-900 relative">
        <img
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src={whyWe}
          alt="resume"
        />
        <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-blue-100 sm:to-blue-50 opacity-75"></div>
        <div className="grid md:grid-cols-2 mx-auto relative py-10">
          {/* left side */}
          <div className="hidden md:block mx-auto my-auto w-72">
            <div>
              <h3 className="text-3xl font-medium">
                Create a resume you are proud of
              </h3>
              <div className="flex items-center justify-center mt-8">
                <span>
                  <img className="w-20" src={icon1} alt="" />
                </span>
                <h4 className="signup-text">
                  Save time with hassle free templates
                </h4>
              </div>
              <div className="flex items-center justify-center mt-6">
                <span>
                  <img className="w-28" src={icon2} alt="" />
                </span>
                <h4 className=" signup-text">
                  Beat the competition using actionable, contextual advise
                </h4>
              </div>
              <div className="flex items-center justify-center mt-6">
                <span>
                  <img className="w-28" src={icon3} alt="" />
                </span>
                <h4 className=" signup-text">
                  Highlight key achievements with memorable visuals
                </h4>
              </div>
            </div>
            <h3 className="mt-6 ">
              Get inspired by
              <span className="[font-weight:600]">
                {" "}
                200+ Free Resume Examples and Templates
              </span>
            </h3>
          </div>

          {/* signup */}

          <div className="lg:[width:70%] md:w-[90%] py-8 rounded">
            {/* Form signup */}

            <div>
              <h2 className="text-3xl mb-2 pl-12 md:pl-0 font-medium">
                Get Started With Me 🔐
              </h2>
              <p className="opacity-75 md:mb-8 pl-12 md:pl-0">
                Please Sign Up here !
              </p>
              <div className="bg-opacity-50 p-5 pt-10 rounded-lg bg-white shadow-lg">
                <Social setCustomError={setCustomError} />
                <div className="flex items-center gap-3 mx-7 text-lg mt-5 -mb-4 ">
                  <div className="w-full h-[1px] bg-gray-400"></div>
                  or
                  <div className="w-full h-[1px] bg-gray-400"></div>
                </div>
                {/* error message */}
                {(customError || error) && (
                  <Alert
                    error={error}
                    setCustomError={setCustomError}
                    customError={customError}
                  ></Alert>
                )}
                {/* sign up from */}
                <div class="card flex-shrink-0 w-full">
                  <form onSubmit={(e) => handelSubmit(e)} class="card-body">
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text ">
                          Name <span className="text-warning">*</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Type your name"
                        class="input border border-gray-300 bg-gray-200 "
                      />
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text ">
                          Email <span className="text-warning">*</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        required
                        placeholder="Type your email"
                        class="input border border-gray-300 bg-gray-200 "
                      />
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text ">
                          Password <span className="text-warning">*</span>
                        </span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        placeholder="password"
                        class="input border border-gray-300 bg-gray-200 "
                      />
                      <label class="label">
                        <span class="label-text ">
                          Re-Type-Password{" "}
                          <span className="text-warning">*</span>
                        </span>
                      </label>
                      <input
                        type="password"
                        name="rePassword"
                        required
                        placeholder="Re-Type-Password"
                        class="input border border-gray-300 bg-gray-200 "
                      />
                    </div>
                    <div class="form-control mt-2">
                      <button type="submit" class="btn btn-primary">
                        Sign Up
                      </button>
                      <p className="mt-2">
                        Already have an account?{" "}
                        <Link className="text-primary link" to="/login">
                          Login
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
