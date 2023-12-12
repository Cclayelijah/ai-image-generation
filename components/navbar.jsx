"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import {
  XMarkIcon,
  Bars3Icon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Navlinks from "./navlinks";

function Navbar() {
  return (
    <nav className="py-4 text-white bg-black navbar">
      <div className="navbar-start">
        <Link href="/">
          <img className="h-12" src="/logo-bg.png" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="display-block sm:hidden">
          <Disclosure>
            <Disclosure.Button>
              <Bars3Icon className="w-10 h-10 ui-open:hidden display-block" />
              <ChevronRightIcon className="hidden w-10 h-10 ui-open:display-block" />
            </Disclosure.Button>
            <Disclosure.Panel>No</Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="sm-max:hidden sm:display-block">
          <Navlinks />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
