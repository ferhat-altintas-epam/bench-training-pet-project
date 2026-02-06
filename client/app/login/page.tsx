export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Login Page
          </h1>
          <p className="text-gray-600 text-lg">
            Sign in to continue to CineNexus
          </p>
        </div>

        <form className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <span className="ml-2 text-gray-600 text-sm">Remember me</span>
            </label>
            <a
              href="#"
              className="text-red-600 text-sm hover:text-red-700 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-red-600 to-orange-500 text-white font-semibold py-3 rounded-lg hover:from-red-700 hover:to-orange-600 transition-all transform hover:scale-105"
          >
            Sign In
          </button>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="text-red-600 font-medium hover:text-red-700 transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
