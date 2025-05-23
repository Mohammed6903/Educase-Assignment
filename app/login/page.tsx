'use client'
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      redirect('/profile');
    }
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '' && isValidEmail(email);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6">
        <div className="w-full max-w-sm mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold leading-tight">
              Signin to your
              <br />
              PopX account
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
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
              <legend className="text-xs font-semibold text-purple-600 px-1">
                Email Address
              </legend>
              <input
                id="email"
                type="email"
                placeholder="Enter Email Address"
                className={`w-full bg-gray-50 pl-1 h-10 border-none focus:ring-0 focus:outline-none text-sm flex items-center ${emailError ? 'border-red-500' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
            </fieldset>

            <fieldset className="border border-gray-300 rounded-md px-3 relative">
              <legend className="text-xs font-semibold text-purple-600 px-1">
                Password
              </legend>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                className={`w-full bg-gray-50 pl-1 h-10 border-none focus:ring-0 focus:outline-none text-sm flex items-center ${passwordError ? 'border-red-500' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <p className="text-xs text-red-500 mt-1">{passwordError}</p>}
            </fieldset>

            <div className="pt-8">
              <Link
                href="/profile"
                onClick={handleFormSubmit}
                className={`w-full flex justify-center items-center py-3 text-white text-sm font-semibold rounded-md transition-colors ${isFormValid ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Login
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
