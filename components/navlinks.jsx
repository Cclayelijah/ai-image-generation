import Link from "next/link";

export default function Navlinks() {
  return (
    <div>
      <Link href="/" className="p-2 m-1 rounded hover">
        Home
      </Link>
      <Link href="/contact" className="p-2 m-1 rounded hover">
        Contact
      </Link>
      <Link
        href="/create"
        className="p-2 m-1 border border-gray-400 rounded shadow hover:bg-white hover:text-black"
      >
        Create
      </Link>
      <Link
          href="/login"
          className="inline-flex items-center gap-1 px-3 py-2 m-1 text-white rounded btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          Sign In
        </Link>
    </div>
  );
}
