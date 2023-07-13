import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#e4e4e4]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="/assets/Logo.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* --------------- */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Demo</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-blue-100 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <a
                            href={item.href}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Shops
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Products
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Page
          </a>
        </Popover.Group>
        {/* -------------- */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 mr-6"
          >
            <img src="/assets/search.png" alt="" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 mr-6"
          >
            <img src="/assets/user.png" alt="" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 mr-6"
          >
            <img src="/assets/heart(1).png" alt="" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 mr-6"
          >
            <img src="/assets/shopping-bag.png" alt="" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 mr-6"
          >
            <img src="/assets/menu.png" alt="" className="h-5 w-5" />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-[#e4e4e4]">
          <div className="flex items-center justify-between ">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="/assets/Logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Popover className="relative">
                  <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <span>Demo</span>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {solutions.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                            >
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon
                                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>
                                <a
                                  href={item.href}
                                  className="font-semibold text-gray-900"
                                >
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                          {callsToAction.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                            >
                              <item.icon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:underline"
                >
                  Shops
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:underline"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:underline"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:underline"
                >
                  Page
                </a>
                <div className="mr-16 pr-11">
                  <ul className="flex">
                    <li>
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900 md:m-20 mr-12"
                      >
                        <img
                          src="/assets/search.png"
                          alt=""
                          className="h-5 w-5"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900 md:m-20 mr-12"
                      >
                        <img
                          src="/assets/user.png"
                          alt=""
                          className="h-5 w-5"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900 md:m-20 mr-12"
                      >
                        <img
                          src="/assets/heart(1).png"
                          alt=""
                          className="h-5 w-5"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900 md:m-20 mr-12"
                      >
                        <img
                          src="/assets/shopping-bag.png"
                          alt=""
                          className="h-5 w-5"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900 md:m-20 mr-12"
                      >
                        <img
                          src="/assets/menu.png"
                          alt=""
                          className="h-5 w-5"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}