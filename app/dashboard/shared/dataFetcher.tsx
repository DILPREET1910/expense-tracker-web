// clerk imports
import { auth } from "@clerk/nextjs";

// lib imports
import {
  AddSharedKey,
  GetSharedKeys,
  GetSharedUserProfileData,
} from "@/app/lib/user";
import AddPublicKeyForm from "@/app/ui/dashboard/shared/addPublicKeyForm";
import SharedUserProfile from "@/app/ui/dashboard/shared/sharedUserProfile";

export default async function SharedWithYouDataFetcher() {
  const { userId } = auth();

  async function handleOnSubmit(formData: FormData) {
    "use server";
    const shared_key = formData.get("public_key")?.toString();
    await AddSharedKey({ id: userId!, shared_key: shared_key! });
  }

  const shared_keys = await GetSharedKeys({ id: userId! });
  const shared_user_profile_data = await GetSharedUserProfileData({
    shared_keys: shared_keys,
  });

  return (
    <div>
      <AddPublicKeyForm handleOnSubmit={handleOnSubmit} />
      <p className="mb-8"></p>
      {shared_user_profile_data.map((user: any) => {
        return (
          <SharedUserProfile
            key={user[3]}
            networkImage={user[0]}
            firstName={user[1]}
            lastName={user[2]}
            public_key={user[3]}
          />
        );
      })}
    </div>
  );
}
