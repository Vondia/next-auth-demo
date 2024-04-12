"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'
export default function Navigation() {
    const pathName = usePathname();

    console.log(pathName);
  return (
    <nav className="flex justify-around">
      <ul className="flex gap-3 justify-around mt-4 max-w-sm">
        <li> 
          <Link className={'nav-item' + (pathName === '/' ? ' active' : '')} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={'nav-item' + (pathName === '/protected' ? ' active' : '')} href="/protected">
            Protected page
          </Link>
        </li>
        <li>
          <Link className={'nav-item' + (pathName === '/admin' ? ' active' : '')} href="/admin">
            Admin page
          </Link>
        </li>
      </ul>
    </nav>
  );
}
