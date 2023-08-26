import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <section className="flex flex-col p-4 gap-x-16 hero md:p-16 sm:flex-row">
        <div className="flex items-center flex-1 w-full text-center sm:text-left">
          <div className="p-10 mx-auto bg-gray-900 rounded-xl w-[22rem] sm:w-full lg:w-[22rem] bg-opacity-50">
            <h1 className="text-5xl font-black text-white drop-shadow">
              AI Art.
            </h1>
            <h3 className="mt-4 text-2xl font-medium text-white">
              On all your walls.
            </h3>
            <Link href="create">
              <button className="mt-9 btn hover:-translate-y-1">
                Get Started{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center flex-1">
          <div className="mx-auto border-2 border-slate-100 outline outline-4 outline-offset-4 outline-slate-900 drop-shadow animate-wiggle">
            <Image
              width={350}
              height={100}
              src="/art.jpeg"
              alt="Art"
              className=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
