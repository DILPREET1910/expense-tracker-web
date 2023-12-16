// clerk imports
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return ( 
    <div className="flex h-screen w-full justify-center items-center">
      <SignIn />
    </div>
  );
}
