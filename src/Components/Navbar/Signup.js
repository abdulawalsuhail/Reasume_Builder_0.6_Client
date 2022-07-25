import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import whyWe from "../../../src/assets/why-we.jpg";
import icon2 from "../../assets/icon/handshake.png";
import icon3 from "../../assets/icon/hto-deal.png";
import icon1 from "../../assets/icon/saving.png";
import "../../Css/login.css";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import Alert from "./Alert";
import Social from "./Social";

const Signup = () => {
  const [customError, setCustomError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const rePassword = e.target.rePassword.value;
    if (password === rePassword) {
      setCustomError("");
      await createUserWithEmailAndPassword(email, password);
      toast.success("user created successfully 🎉");
    } else {
      setCustomError("Please input the same password !");
      toast.error("please input the same password !");
    }
  };
  if (loading) {
    return <Loading />;
  }
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
                <img className="w-20" src={icon1} alt="" />
              </span>
              <h4 className="text-white signup-text">
                Save time with hassle free templates
              </h4>
            </div>
            <div className="flex items-center justify-center mt-6">
              <span>
                <img className="w-28" src={icon2} alt="" />
              </span>
              <h4 className="text-white signup-text">
                Beat the competition using actionable, contextual advise
              </h4>
            </div>
            <div className="flex items-center justify-center mt-6">
              <span>
                <img className="w-28" src={icon3} alt="" />
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

        <div className="lg:[width:70%] md:w-[90%] py-8 rounded">
          {/* Form signup */}

          <div>
            <h2 className="text-3xl mb-2 pl-12 md:pl-0">
              Get Started With Me 🔐
            </h2>
            <p className="opacity-50 md:mb-8 pl-12 md:pl-0">
              Please Sign Up here !
            </p>
            <div className="bg-opacity-30 p-5 pt-10 rounded-lg bg-slate-700">
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
                      <span class="label-text text-white">
                        Email <span className="text-warning">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      required
                      placeholder="email"
                      class="input border border-slate-400 bg-slate-800  text-white"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-white">
                        Password <span className="text-warning">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      required
                      placeholder="password"
                      class="input border border-slate-400 bg-slate-800  text-white"
                    />
                    <label class="label">
                      <span class="label-text text-white">
                        Re-Type-Password <span className="text-warning">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="rePassword"
                      required
                      placeholder="Re-Type-Password"
                      class="input border border-slate-400 bg-slate-800  text-white"
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
  );
};

export default Signup;
