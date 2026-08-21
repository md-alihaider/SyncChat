const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="
          w-full max-w-md
          rounded-2xl
          border border-white/20
          bg-black/30
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          relative
          overflow-hidden
        "
      >
        {/* Glass highlight */}
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative p-8">
          {/* Heading */}
          <div className="text-center mb-7">
            <h1 className="text-3xl font-semibold text-white">
              Welcome to <span className="text-blue-400">ChatApp</span>
            </h1>

            <p className="text-sm text-white/60 mt-2">
              Login to continue your conversations
            </p>
          </div>

          <form className="space-y-5">
            {/* Username */}
            <div className="form-control">
              <label className="label px-1 pb-2">
                <span className="label-text text-white/80 font-medium">
                  Username
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter username"
                className="
                  input w-full
                  h-12
                  bg-black/25
                  border border-white/20
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
              <label className="label px-1 pb-2">
                <span className="label-text text-white/80 font-medium">
                  Password
                </span>

                <a
                  href="#"
                  className="
                    text-xs
                    text-blue-400
                    hover:text-blue-300
                    transition-colors
                  "
                >
                  Forgot password?
                </a>
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="
                  input w-full
                  h-12
                  bg-black/25
                  border border-white/20
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

            {/* Login button */}
            <button
              type="submit"
              className="
                btn
                btn-primary
                w-full
                h-12
                mt-2
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
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider before:bg-white/10 after:bg-white/10 text-white/40 text-xs">
            OR
          </div>

          {/* Register */}
          <p className="text-center text-sm text-white/60">
            Don't have an account?{" "}
            <a
              href="#"
              className="
                text-blue-400
                hover:text-blue-300
                font-medium
                transition-colors
              "
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
