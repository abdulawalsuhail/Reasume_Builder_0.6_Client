import React from "react";
import { FaGithubSquare, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";
import '../../Css/login.css';

const Login = () => {
  return (
    <div>
      <label htmlFor="login-modal_1" className="btn modal-button">
        open modal
      </label>
      <input type="checkbox" id="login-modal_1" className="modal-toggle" />
      <div className="modal modal-top sm:modal-middle">
        <div className="modal-box  [width:95%] relative">
          <label
            htmlFor="login-modal_1"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className=" text-3xl [color:#2d3639] text-center">
            Sign in to your account
          </h3>

          {/* social login */}

          <div className="flex items-center gap-3 justify-center mt-10 px-4">
            
            {/* linkedin login*/}

            <div className="flex items-center border-2 [border-color:##b3b3b3] rounded-md px-4 py-1 linkedin-btn">
              <span><FaLinkedin className=" [color:#0a66c2] logo"></FaLinkedin></span>
              <h1 className="[font-weight:500] [color:#0a66c2] text">Linkedin</h1>
            </div>

            {/* google login */}
            
            <div className="flex items-center border-2 [border-color:##b3b3b3] rounded-md px-4 py-1 google-btn">
              <span><FaGooglePlusSquare className=" [color:#dd4b39] logo"></FaGooglePlusSquare></span>
              <h1 className="[font-weight:500] [color:#dd4b39] text">Google</h1>
            </div>

            {/* github login */}
            
            <div className="flex items-center border-2 [border-color:##b3b3b3] rounded-md px-4 py-1 github-btn">
              <span><FaGithubSquare className="text-xl logo"></FaGithubSquare></span>
              <h1 className="[font-weight:500] text">Github</h1>
            </div>
          </div>
            <div>
                <p className="text-center [color:#bdbfc1] mt-6 [font-weight:400]">or sign in with email</p>
            </div>

          {/* form login */}
        </div>
      </div>
    </div>
  );
};

export default Login;
