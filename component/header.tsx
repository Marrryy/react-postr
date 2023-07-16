'use client'

import { getUsername } from "@/lib/function";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

export interface HeaderArgs {
    title: string;
}
const Header:FunctionComponent<HeaderArgs>=({title})=> {
    const [usn, setUsn] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      getUsername()
      setUsn(localStorage.getItem("usn")??"Guest");
    }, [])
    
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
        
    return (
        <nav id="nav" className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
              <a href="/" >
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
              </a>
              <span className="py-2 pl-3 pr-4">Username: {usn}</span>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                English (US)
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                    <ul className="py-2 font-medium" role="none">
                      <li>
                        <Link href="/en" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                          <div className="inline-flex items-center">
                            English (US)
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/id" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                          <div className="inline-flex items-center">
                            Indonesia
                          </div>
                        </Link>
                      </li>
                    </ul>
                </div>
              )}
            </div>
            <div className=" w-full block " id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link href="/post" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Post</Link>
                  {/* <a href="/post" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Post</a> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}
export default Header;