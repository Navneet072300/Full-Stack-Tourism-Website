import React from "react";
import { SiGmail } from "react-icons/si";

const Signup = () => {
  return (
    <>
      <div className="login-container mx-auto max-w-md p-6">
        <div className="header mb-6">
          <header className="text-2xl font-semibold">Register Now</header>
          <div className="underline"></div>
        </div>
        <div className="input-container mt-3">
          <div className="input-field mb-4">
            <label htmlFor="user" className="text-xl font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="username"
              id="user"
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="input-field mb-4">
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              name="username"
              id="user"
              placeholder="yatrionyatra@gmail.com"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="input-field mb-4">
            <label htmlFor="number" className="text-xl font-medium">
              Mobile
            </label>
            <input
              type="tel"
              name="username"
              id="user"
              placeholder="Your 10 digit mobile number"
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
              placeholder="Min. 8 digit password"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="input-field mb-4">
            <button className="login-btn bg-blue-500 text-white py-2 px-4 rounded-lg">
              SignUp
            </button>
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

export default Signup;
