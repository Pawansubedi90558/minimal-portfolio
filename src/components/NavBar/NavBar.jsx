import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { IoHome } from "react-icons/io5";

import { HashLink as Link } from 'react-router-hash-link'

import DarkMode from './DarkMode'

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Timeline', href: '#timeline', current: false },
  { name: 'Blog', href: '#blog', current: false },
  { name: 'Contact Me', href: '#contact_me', current: false },
]

function NavBar() {
  return (
    <>
      <div className='fixed w-full border-3 border-red-500'>
        <div className='flex border-2 border-white p-2 justify-between sm:justify-between h-14 z-10 dark:text-white dark:bg-stone-900 opacity-100 bg-white'>
          <div className='flex border-2 border-red-500 justify-center items-center gap-5'>
            <div>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </a>
            </div>

            <ul className='flex text-1xl md:text-1xl  font-semibold gap-5'>
              {navigation.map((item) => (
                <Link to={item.href}
                  className='hover:bg-slate-300 duration-300 border-stone-200 rounded p-1'
                >
                  <li key={item.id} >{item.name}</li>
                </Link>)
              )}
            </ul>
          </div>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </>
  )
}
export default NavBar;