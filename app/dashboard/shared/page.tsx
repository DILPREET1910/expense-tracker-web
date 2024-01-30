// clerk imports
import { auth } from "@clerk/nextjs";

// lib imports
import { AddSharedKey, GetSharedKeys } from "@/app/lib/user";
import AddPublicKeyForm from "@/app/ui/dashboard/shared/addPublicKeyForm";

export default function SharedWithYou() {
  const { userId } = auth();

  async function handleOnSubmit(formData: FormData) {
    "use server";
    const shared_key = formData.get("public_key")?.toString();
    await AddSharedKey({ id: userId!, shared_key: shared_key! });
  }

  async function getSharedKeys() {
    console.log(await GetSharedKeys({ id: userId! }));
  }

  getSharedKeys();

  return <AddPublicKeyForm handleOnSubmit={handleOnSubmit} />;
}
