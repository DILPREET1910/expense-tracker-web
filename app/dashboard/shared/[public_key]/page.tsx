"use server";

// clerk imports
import { auth } from "@clerk/nextjs";

// lib imports
import { CheckValidSharedSlug } from "@/app/lib/user";
import NotFound from "@/app/not-found";

export default async function SharedData({
  params,
}: {
  params: { public_key: string };
}) {
  const { userId } = auth();

  const validSlug = await CheckValidSharedSlug({
    id: userId!,
    public_key: params.public_key,
  });

  if (!validSlug) {
    return <NotFound />;
  }

  return <p>{params.public_key}</p>;
}
