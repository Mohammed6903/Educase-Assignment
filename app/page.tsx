import Link from "next/link"

export default function LandingScreen() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col justify-end items-center p-6">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2 text-left">
            <h1 className="text-2xl font-bold">Welcome to PopX</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
          </div>
          <div className="space-y-4">
            <Link
              href="/signup"
              className="w-full py-3 flex justify-center items-center bg-purple-1000 text-white font-medium rounded-md hover:bg-purple-1000 transition-colors"
            >
              Create Account
            </Link>
            <Link
              href="/login"
              className="w-full py-3 flex justify-center items-center bg-purple-200 text-black font-medium rounded-md hover:bg-purple-300 transition-colors"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
