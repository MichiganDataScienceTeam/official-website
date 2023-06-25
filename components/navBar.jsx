import { useState } from 'react';
import Link from 'next/link';

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute  top-0 left-0 h-screen w-screen transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter bg-grey`}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-grey-dark h-20">
        {' '}
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          LOGO
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4"
          href="/projects"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Projects
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/team"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Our Team
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/sponsors"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Our Sponsors
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter px-4 py-4 h-20 items-center fixed w-full backdrop-filter backdrop-blur z-50 ">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link className="text-2xl font-semibold" href="/">
          LOGO
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/team">Our Team</NavLink>
          <NavLink to="/sponsors">Our Sponsors</NavLink>
        </div>
      </div>
    </nav>
  );
}
