import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex items-center px-4 justify-between h-20">
            <Link href="/">
              <div className="text-white rounded-full bg-black font-bold text-2xl h-12 w-12 flex items-center justify-center cursor-pointer">
                <a>Iz</a>
              </div>
            </Link>
            <div className="links px-4 hidden md:inline">
              <Link href="/">
                <a className="px-3  hover:underline font-semibold">Homepage</a>
              </Link>
              <Link href="/about">
                <a className="px-3  hover:underline font-semibold">About</a>
              </Link>
              <Link href="/contact">
                <a className="px-3  hover:underline font-semibold">Contact</a>
              </Link>
            </div>
            <div className="md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-purple-800 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                <Link href="/">
                  <a className="px-3   hover:underline font-semibold">
                    Homepage
                  </a>
                </Link>
                <Link href="/about">
                  <a className="px-3   hover:underline font-semibold">About</a>
                </Link>
                <Link href="/contact">
                  <a className="px-3   hover:underline font-semibold">
                    Contact
                  </a>
                </Link>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
