// clerk imports
import { auth, clerkClient } from "@clerk/nextjs";

// lib imports
import { AddSharedKey, GetSharedKeys } from "@/app/lib/user";
import AddPublicKeyForm from "@/app/ui/dashboard/shared/addPublicKeyForm";
import SharedUserProfile from "@/app/ui/dashboard/shared/sharedUserProfile";

export default async function SharedWithYou() {
  const { userId } = auth();

  async function handleOnSubmit(formData: FormData) {
    "use server";
    const shared_key = formData.get("public_key")?.toString();
    await AddSharedKey({ id: userId!, shared_key: shared_key! });
  }

  const shared_keys = await GetSharedKeys({ id: userId! });

  const user = await clerkClient.users.getUser(userId!);
  console.log(user.imageUrl);
  console.log(user.firstName);

  return (
    <div>
      <AddPublicKeyForm handleOnSubmit={handleOnSubmit} />
      <p className="mb-8"></p>
      <SharedUserProfile
        networkImage={user.imageUrl}
        firstName={user.firstName || "Anonymous"}
        lastName={user.lastName || ""}
      />
      <SharedUserProfile
        networkImage={user.imageUrl}
        firstName={user.firstName || "Anonymous"}
        lastName={user.lastName || ""}
      />
    </div>
  );
}
