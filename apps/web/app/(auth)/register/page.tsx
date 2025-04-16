import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

export default function Register() {
  return (
    <Card className="px-6 py-12 rounded-4xl">
      <CardHeader>
        <CardTitle className="text-2xl font-normal text-center">
          Register
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm text-gray-600">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm text-gray-600">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm text-gray-600">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded-md"
            />
          </div>
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
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm text-gray-600">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md"
          >
            Register
          </button>
          <div className="text-center">
            <a href="/login" className="text-sm text-gray-600 hover:underline">
              Already have an account? Sign in
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
