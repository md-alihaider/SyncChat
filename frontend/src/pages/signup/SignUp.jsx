import { useState } from "react";
import GenderSelect from "./GenderSelect";
import { Link } from "react-router";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {signup, loading} = useSignUp();
  const handleSelectChange = (gender) => {
    setInputs({ ...inputs, gender });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6">
      <div
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-2xl
          border border-white/20
          bg-black/30
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* Glass highlight */}
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative p-6">
          {/* Heading */}
          <div className="text-center mb-5">
            <h1 className="text-3xl font-semibold text-white">
              Create your <span className="text-blue-400">ChatApp</span> account
            </h1>

            <p className="text-xs text-white/60 mt-1">
              Join the conversation and connect with others
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Full Name */}
            <div className="form-control">
              <label className="label px-1 pb-1">
                <span className="label-text text-white/80 font-medium">
                  Full Name
                </span>
              </label>

              <input
                type="text"
                placeholder="John Doe"
                value={inputs.fullname}
                onChange={(e) =>
                  setInputs({ ...inputs, fullname: e.target.value })
                }
                className="
                  input
                  w-full
                  h-10
                  bg-black/25
                  border-white/20
                  text-white
                  placeholder:text-white/40
                  focus:border-blue-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400/20
                  transition-all
                "
              />
            </div>

            {/* Username */}
            <div className="form-control">
              <label className="label px-1 pb-1">
                <span className="label-text text-white/80 font-medium">
                  Username
                </span>
              </label>

              <input
                type="text"
                placeholder="johndoe"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
                className="
                  input
                  w-full
                  h-10
                  bg-black/25
                  border-white/20
                  text-white
                  placeholder:text-white/40
                  focus:border-blue-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400/20
                  transition-all
                "
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label px-1 pb-1">
                <span className="label-text text-white/80 font-medium">
                  Password
                </span>
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                className="
                  input
                  w-full
                  h-10
                  bg-black/25
                  border-white/20
                  text-white
                  placeholder:text-white/40
                  focus:border-blue-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400/20
                  transition-all
                "
              />
            </div>

            {/* Confirm Password */}
            <div className="form-control">
              <label className="label px-1 pb-1">
                <span className="label-text text-white/80 font-medium">
                  Confirm Password
                </span>
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                className="
                  input
                  w-full
                  h-10
                  bg-black/25
                  border-white/20
                  text-white
                  placeholder:text-white/40
                  focus:border-blue-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-400/20
                  transition-all
                "
              />
            </div>

            {/* Gender */}
            <GenderSelect
              onSelectChange={handleSelectChange}
              value={inputs.gender}
            />

            {/* Already have account */}
            <div className="pt-1">
              <span className="text-sm text-white/60">
                Already have an account?{" "}
              </span>

              <Link
                to="/login"
                className="
                  text-sm
                  text-blue-400
                  hover:text-blue-300
                  hover:underline
                  transition-colors
                "
              >
                Login
              </Link>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                btn
                btn-primary
                w-full
                h-11
                min-h-0
                mt-1
                border-none
                bg-blue-500
                hover:bg-blue-400
                text-white
                shadow-lg
                shadow-blue-500/25
                transition-all
                duration-300
              "
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
