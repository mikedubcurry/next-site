import Link from "next/link";
import NavLink from "@/lib/NavLink";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-4 justify-between items-center py-2">
      <ul className="flex flex-col md:flex-row w-full md:w-96 px-8 md:px-0 justify-between">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/misc">Miscellaneous</NavLink>
        </li>
        <li>
          <NavLink href="/cool">Cool</NavLink>
        </li>
      </ul>
    </nav>
  );
}
