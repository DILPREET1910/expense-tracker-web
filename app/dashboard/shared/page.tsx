// clerk imports
import { auth } from "@clerk/nextjs";

// lib imports
import { AddSharedKey } from "@/app/lib/user";
import AddPublicKeyForm from "@/app/ui/dashboard/shared/addPublicKeyForm";

export default function SharedWithYou() {
  const { userId } = auth();

  async function handleOnSubmit(formData: FormData) {
    "use server";
    console.log(formData.get("public_key"));
  }

  return <AddPublicKeyForm handleOnSubmit={handleOnSubmit} />;
}
