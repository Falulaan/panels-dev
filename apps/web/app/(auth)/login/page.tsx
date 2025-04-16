import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

export default function Login() {
  return (
    <Card className="px-6 py-12 rounded-4xl">
      <CardHeader>
        <CardTitle className="text-2xl font-normal text-center">
          Sign in
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md"
          >
            Sign In
          </button>
          <div className="flex flex-col gap-2">
            <div className="text-center">
              <a
                href="/register"
                className="text-sm text-gray-600 hover:underline"
              >
                Don&apos;t have an account? Register
              </a>
            </div>
            <div className="text-center">
              <a
                href="/forgot-password"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
