// clerk imports
import { SignInButton, SignUpButton, auth } from "@clerk/nextjs";

//next js imports
import { redirect } from "next/navigation";

export default function Home() {
  // redirect to dashboard if user logged in
  const { userId } = auth();
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div>
      <h1>Home</h1>
      <SignInButton />
      <SignUpButton />
    </div>
  );
}
