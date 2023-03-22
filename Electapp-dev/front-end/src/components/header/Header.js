import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import ClipLoader from "react-spinners/ClipLoader";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { adminLogout } from "../../pages/admin-dashboard/services/admin-dashboard-service";
import { getTokenValue } from "../../utils/getToken";
import headerService from "./services/header-service";
import Container from "../container/Container";

const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Settings", href: "#", current: false },
];

const userNavigation = [
    { name: "Your Profile", ref: "profile" },
    { name: "Settings", ref: "settings" },
    { name: "Sign out", ref: "signOut" },
];

const Header = () => {

    const navigate = useNavigate();
    const [authenticatedUser, setAuthenticatedUser] = useState();
    const [isAuthenticatedUserLoading, setIsAuthenticatedUserLoading] = useState(true);

    const getAuthenticatedUser = async () => {
        setIsAuthenticatedUserLoading(true);
        const token = getTokenValue();
        try {
            const response = await headerService.getAuthenticatedUser(token);
            setAuthenticatedUser({
                name: response.name,
                imageUrl: `https://api.dicebear.com/5.x/initials/svg?seed=${response.name}`
            })
        } catch (error) {
            console.log(error);

        } finally {
            setIsAuthenticatedUserLoading(false);
        }
    }

    const handleProfileClick = (itemRef) => {
        if (itemRef === "signOut") {
            adminLogout();
            navigate("/");
        }
    };

    useEffect(() => {
        getAuthenticatedUser();
    }, [])


    return (
        <Disclosure as="nav" className="bg-indigo-600">
            {({ open }) => (
                <>
                    <Container>
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-8"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-indigo-700 text-white"
                                                        : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                                                    "px-3 py-2 rounded-md text-sm font-medium"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
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
                                            <ClipLoader
                                                color={"#4A90E2"}
                                                loading={isAuthenticatedUserLoading}
                                                size={20}
                                            />
                                        </div>
                                        {authenticatedUser &&
                                            <div>
                                                <Menu.Button className="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src={authenticatedUser.imageUrl}
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                        }

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
                                                                onClick={() =>
                                                                    handleProfileClick(item.ref)
                                                                }
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
                    </Container>

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
                                <div>
                                    <ClipLoader
                                        color={"4A90E2"}
                                        loading={isAuthenticatedUserLoading}
                                        size={20}
                                    />
                                </div>

                                {authenticatedUser &&
                                    <>
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={authenticatedUser.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium text-white">
                                                {authenticatedUser.name}
                                            </div>
                                            {/* <div className="text-sm font-medium text-indigo-300">
                                        {user.email}
                                    </div> */}
                                        </div>
                                    </>
                                }
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
    )
}
export default Header