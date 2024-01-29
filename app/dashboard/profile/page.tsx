// clerk imports
import { auth } from "@clerk/nextjs";

// react icons imports
import CopyPublicKey from "@/app/ui/dashboard/profile/copyPublicKey";
import { RiInformationLine } from "react-icons/ri";
import { GetPublicKey } from "@/app/lib/user";
import { useId } from "react";

export default async function Profile() {
  const { userId } = auth();

  const publicKey = await GetPublicKey({ id: userId! });
  return (
    <div>
      <p className="inline-block">Public key</p>
      <div
        title="people with this key can see your data entries"
        className="pl-1 inline-block"
      >
        <RiInformationLine className="text-gray-500 hover:text-black" />
      </div>
      <CopyPublicKey publicKey={publicKey} />
    </div>
  );
}
