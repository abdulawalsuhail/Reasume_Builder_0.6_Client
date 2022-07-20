import React from "react";

const Login = () => {
  return (
    <div>
      <label for="login-modal" class="btn modal-button">
        open modal
      </label>
      <input type="checkbox" id="login-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div
          class="modal-box relative
        "
        >
          <label
            for="login-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div class="modal-action">
            <label for="login-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
