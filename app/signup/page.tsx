'use client';
import Link from "next/link";
import { useState } from "react";

export default function SignupScreen() {
  const [fullName, setFullName] = useState("Marry Doe");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("yes");

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const isFormValid =
    fullName.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    isValidEmail(email) &&
    password.trim() !== "" &&
    isAgency !== "";

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col">
        <div className="p-6 overflow-y-auto flex-grow">
          <div className="w-full max-w-sm mx-auto space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold leading-tight">
                Create your
                <br />
                PopX account
              </h1>
            </div>
            <style jsx global>{`
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px #f9fafb inset !important; /* bg-gray-50 equivalent */
                -webkit-text-fill-color: inherit !important;
                transition: background-color 5000s ease-in-out 0s;
              }
            `}</style>
            <div className="space-y-4">
              <fieldset className="border border-gray-300 rounded-md px-3 relative">
                <legend className="text-xs font-semibold text-purple-1000 px-1">
                  Full Name<span className="text-red-500">*</span>
                </legend>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-gray-50 pl-1 h-10 border-none focus:ring-0 focus:outline-none text-sm flex items-center"
                  required
                />
              </fieldset>

              <fieldset className="border border-gray-300 rounded-md px-3 relative">
                <legend className="text-xs font-semibold text-purple-1000 px-1">
                  Phone number<span className="text-red-500">*</span>
                </legend>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-gray-50 pl-1 h-10 border-none focus:ring-0 focus:outline-none text-sm flex items-center"
                  required
                />
              </fieldset>

              <fieldset className="border border-gray-300 rounded-md px-3 relative">
                <legend className="text-xs font-semibold text-purple-1000 px-1">
                  Email address<span className="text-red-500">*</span>
                </legend>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 pl-1 h-10 border-none focus:ring-0 focus:outline-none text-sm flex items-center"
                  required
                />
              </fieldset>

              <fieldset className="border border-gray-300 rounded-md px-3 relative">
                <legend className="text-xs font-semibold text-purple-1000 px-1">
                  Password<span className="text-red-500">*</span>
                </legend>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50 pl-1 h-10 border-none focus:ring-0 focus:outline-none text-sm flex items-center"
                  required
                />
              </fieldset>


              <fieldset className="border border-gray-300 rounded-md px-3 relative">
                <legend className="text-xs font-semibold text-purple-1000 px-1">
                  Company name
                </legend>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-gray-50 pl-1 h-10 border-none focus:ring-0 focus:outline-none text-sm flex items-center"
                />
              </fieldset>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-purple-1000">
                  Are you an Agency?<span className="text-red-500">*</span>
                </p>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="agency"
                        value="yes"
                        checked={isAgency === "yes"}
                        onChange={(e) => setIsAgency(e.target.value)}
                        className="sr-only"
                      />
                      <div className="h-5 w-5 rounded-full border border-gray-300"></div>
                      {isAgency === "yes" && (
                        <div className="absolute h-3 w-3 rounded-full bg-purple-1000"></div>
                      )}
                    </div>
                    <span className="text-sm">Yes</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="agency"
                        value="no"
                        checked={isAgency === "no"}
                        onChange={(e) => setIsAgency(e.target.value)}
                        className="sr-only"
                      />
                      <div className="h-5 w-5 rounded-full border border-gray-300"></div>
                      {isAgency === "no" && (
                        <div className="absolute h-3 w-3 rounded-full bg-purple-1000"></div>
                      )}
                    </div>
                    <span className="text-sm">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 pb-5">
          <div className="w-full max-w-sm mx-auto">
            <Link
              href="/profile"
              className={`w-full flex justify-center items-center py-3 ${isFormValid ? "bg-purple-1000" : "bg-gray-400"
                } text-white text-sm font-semibold rounded-md transition-colors`}
              onClick={(e) => !isFormValid && e.preventDefault()}
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
