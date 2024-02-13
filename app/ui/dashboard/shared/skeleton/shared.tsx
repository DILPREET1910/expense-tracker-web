// project imports
import SkeletonAddPublicKeyForm from "./addPublicKeyForm";
import SkeletonSharedUserProfile from "./sharedUserProfile";

export default function SkeltonShared() {
  return (
    <div>
      <SkeletonAddPublicKeyForm />
      <div className="mb-10"></div>
      <SkeletonSharedUserProfile />
      <SkeletonSharedUserProfile />
      <SkeletonSharedUserProfile />
      <SkeletonSharedUserProfile />
      <SkeletonSharedUserProfile />
    </div>
  );
}
