"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <Link href={href}>
      <span className={`${href === pathName ? '!decoration-red-500': ''} decoration-wavy  underline decoration-transparent transition-all hover:decoration-blue-500`}>
      {children}
      </span>
    </Link>
  );
}
