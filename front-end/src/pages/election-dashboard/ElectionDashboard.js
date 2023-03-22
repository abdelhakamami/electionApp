import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon, HomeIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { adminLogout } from "../admin-dashboard/services/admin-dashboard-service";
import { useNavigate } from "react-router-dom";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Settings", href: "#", current: false },
];

const userNavigation = [
  { name: "Your Profile", ref: "profile" },
  { name: "Settings", ref: "settings" },
  { name: "Sign out", ref: "signOut" },
];

const ElectionDashboard = () => {
  const navigate = useNavigate();

  const handleProfileClick = (itemRef) => {
    if (itemRef === "signOut") {
      adminLogout();
      navigate("/");
    }
  };
  return (
    <>
      <div className="min-h-full">
        <aside className="fixed w-72 h-screen bg-gray-50">
          <div className="flex flex-col  justify-between px-4 sm:px-6 lg:px-8 h-full">
            <header className="pt-8">
              <h2>ElectApp</h2>
            </header>
            <main>
              <a href="/#" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Overview
              </a>
              <a href="/#" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Overview
              </a>
              <a href="/#" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Overview
              </a>
              <a href="/#" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Overview
              </a>
              <a href="/#" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Overview
              </a>
              <a href="/#" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Overview
              </a>
              <a href="/#" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Overview
              </a>
            </main>
            <footer>
              <div className="py-5">Start Date</div>
              <div className="py-5">End Date</div>
              <div className="py-5">Timezone</div>
            </footer>
          </div>
        </aside>
        <Disclosure as="nav" className="bg-indigo-600">
          {({ open }) => (
            <>
              <div className="max-w-full mx-auto pr-4 pl-80 ">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                        alt="Workflow"
                      />
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-indigo-600 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <div
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                    )}
                                    onClick={() => handleProfileClick(item.ref)}
                                  >
                                    {item.name}
                                  </div>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-700 text-white"
                          : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-indigo-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-indigo-300">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-indigo-600 flex-shrink-0 p-1 border-2 border-transparent rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {/*<div className="px-4 py-4 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>*/}

            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default ElectionDashboard;
