import { SignUp } from "@clerk/clerk-react"

const SignUpPage = () => {
  return <SignUp path="/signup" routing="path" signInUrl="/signin" />;
}

export default SignUpPage