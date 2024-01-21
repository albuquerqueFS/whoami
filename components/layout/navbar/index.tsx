import Link from 'next/link';
import React, { ReactElement } from 'react';

export function Navbar(): ReactElement {
  const NavItem = ({
    children,
    href,
  }: {
    children: string | JSX.Element;
    href: string;
  }) => (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );

  return (
    <nav className="align-items-center flex justify-center py-6 pb-10">
      <ol className="flex gap-6 text-xl font-light tracking-wider text-silver-200">
        <NavItem href={'/'}>POSTS</NavItem>
        <NavItem href={'/me'}>WHO I AM</NavItem>
      </ol>
    </nav>
  );
}
