// next imports
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Not found</h1>
      <Link href={"/dashboard"}>Return to Dashboard</Link>
    </div>
  );
}
