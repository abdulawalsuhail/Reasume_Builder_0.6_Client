import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../src/assets/login2.png";
import whyWe from "../../../src/assets/login_bg.jpg";
import "../../Css/login.css";
import auth from "../../firebase.init";
import useToken from "../../Hook/useToken";
import Loading from "../../Shared/Loading/Loading";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Social from "./Social";

const Login = () => {
  const [customError, setCustomError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user);

  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    if (error) {
      setCustomError(error?.message);
    } else {
      setCustomError("");
      toast.success("Login Successfully");
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar />
      <section className="bg-white relative">
        <img
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src={whyWe}
          alt="resume"
        />

        <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-blue-100 sm:to-blue-50 opacity-75"></div>
        <div className="grid md:grid-cols-2 mx-auto relative py-10">
          {/* left side */}
          <div className="hidden md:block mx-auto my-auto">
            <img
              className="w-[80%] mx-auto opacity-[90%] bg-transparent"
              src={loginImg}
              alt="This is login page img"
            />
          </div>

          {/* signup */}

          <div className="lg:[width:70%] md:w-[90%] py-8 rounded">
            {/* Form signup */}

            <div>
              <h2 className="text-3xl mb-2 pl-12 md:pl-0 font-medium">
                Find a job With Me 🔐
              </h2>
              <p className="opacity-75 md:mb-8 pl-12 md:pl-0">
                Please login here !
              </p>
              <div className="bg-opacity-50 p-5 pt-10 rounded-lg bg-white shadow-lg">
                <Social setCustomError={setCustomError} />
                <div className="flex items-center gap-3 mx-7 text-lg mt-5 -mb-4 ">
                  <div className="w-full h-[1px] bg-gray-400"></div>
                  or
                  <div className="w-full h-[1px] bg-gray-400"></div>
                </div>
                {/* error message */}
                {customError ||
                  (error && (
                    <Alert
                      error={error}
                      setCustomError={setCustomError}
                      customError={customError}
                    ></Alert>
                  ))}
                {/* sign in from */}
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
                        class="input border border-gray-300 bg-gray-200 "
                      />
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text text-white">
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
                    </div>
                    <div class="form-control mt-5">
                      <button type="submit" class="btn btn-primary">
                        Sign In
                      </button>
                      <p className="mt-2">
                        I am new?{" "}
                        <Link className="text-primary link" to="/signUp">
                          create account
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

export default Login;
