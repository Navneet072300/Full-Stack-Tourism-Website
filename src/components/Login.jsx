import React from "react";
import { SiGmail } from "react-icons/si";

const Login = () => {
  return (
    <>
      <div className="login-container mx-auto max-w-md p-6">
        <div className="header mb-6">
          <header className="text-2xl font-semibold">Login</header>
          <div className="underline"></div>
        </div>
        <div className="input-container">
          <div className="input-field mb-4">
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              name="username"
              id="user"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="input-field mb-4">
            <label htmlFor="pass" className="text-xl font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="pass"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="input-field  mb-4">
            <button className="login-btn bg-blue-500 text-white py-2 px-4 rounded-lg">
              Log In
            </button>
            <span>
              <a href="#" className="text-blue-500">
                Forgot password?
              </a>
            </span>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex-grow border-b"></div>
          <p className="mx-4 text-xl font-medium">or</p>
          <div className="flex-grow border-b"></div>
        </div>
        <div className="cwg flex items-center gap-4 text-xl font-medium bg-slate-50 rounded-lg border border-black p-3 cursor-pointer">
          <SiGmail />
          <h3>Continue with Gmail</h3>
        </div>
      </div>
    </>
  );
};

export default Login;
