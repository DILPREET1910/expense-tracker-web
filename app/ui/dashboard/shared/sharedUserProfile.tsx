"use client";

// next imports
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SharedUserProfile({
  networkImage,
  firstName,
  lastName,
  public_key,
}: {
  networkImage: string;
  firstName: string;
  lastName: string;
  public_key: string;
}) {
  const pathname = usePathname();

  return (
    <Link href={pathname + "/" + public_key}>
      <div className="p-2 border-2 rounded-lg shadow w-2/5 mt-4">
        <img
          className="w-8 h-8 rounded-full inline-block"
          src={networkImage}
          alt="user profile"
        />
        <p className="inline-block pl-2 font-semibold">
          {firstName} {lastName}
        </p>
      </div>
    </Link>
  );
}
