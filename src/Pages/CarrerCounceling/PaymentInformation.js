import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const PaymentInformation = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "name required",
              },
            })}
            readOnly
            placeholder={user?.displayName}
            className="input input-bordered w-full "
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            readOnly
            placeholder={user?.email}
            className="input input-bordered w-full "
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Country</span>
          </label>
          <input
            {...register("country", {
              required: {
                value: true,
                message: "country required ",
              },
            })}
            placeholder="Country"
            className="input input-bordered w-full "
          />
          <label className="label">
            {errors.country?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.country.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="text-white text-[15px] font-[500] uppercase rounded btn-md bg-primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentInformation;
