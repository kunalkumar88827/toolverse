import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p>Page Not Found</p>
      <Link href="/">Go Home</Link>
    </div>
  );
}